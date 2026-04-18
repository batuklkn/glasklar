import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { siteConfig } from "@/lib/site";

const requestSchema = z.object({
  services: z.array(z.string()).min(1),
  propertyType: z.string().min(1),
  area: z.string().min(1),
  frequency: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().optional().or(z.literal("")),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
  privacyAccepted: z.boolean().refine((value) => value),
});

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Ungueltige Anfrage." }, { status: 400 });
    }

    const payload = parsed.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.CONTACT_FROM ?? "GlasKlar Kontakt <onboarding@resend.dev>";
    const recipient = process.env.CONTACT_RECIPIENT ?? siteConfig.email;

    if (!resendApiKey) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[contact] RESEND_API_KEY is missing. Email sending skipped in development.");
        return NextResponse.json({ ok: true, skipped: true });
      }
      return NextResponse.json({ error: "E-Mail-Service ist nicht konfiguriert." }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const html = `
      <h2>Neue Anfrage über glasklar-wertheim.de</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Telefon:</strong> ${payload.phone}</p>
      <p><strong>E-Mail:</strong> ${payload.email || "-"}</p>
      <hr/>
      <p><strong>Leistungen:</strong> ${payload.services.join(", ")}</p>
      <p><strong>Objektart:</strong> ${payload.propertyType}</p>
      <p><strong>Fläche:</strong> ${payload.area}</p>
      <p><strong>Häufigkeit:</strong> ${payload.frequency}</p>
      <p><strong>Wunschtermin:</strong> ${payload.preferredDate || "-"}</p>
      <p><strong>Notizen:</strong> ${payload.notes || "-"}</p>
    `;

    await resend.emails.send({
      from: fromAddress,
      to: recipient,
      subject: `Neue Anfrage: ${payload.services.join(", ")}`,
      html,
      replyTo: payload.email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] sending failed", error);
    return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 });
  }
}
