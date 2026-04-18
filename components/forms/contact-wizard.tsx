"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { services } from "@/content/services";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icon";

const objectTypes = ["Büro", "Praxis", "Wohnhaus", "Neubau", "Sonstiges"] as const;
const areaOptions = ["<100", "100-300", "300-1000", ">1000"] as const;
const frequencyOptions = ["Einmalig", "Wöchentlich", "2x pro Woche", "Monatlich", "Nach Bedarf"] as const;

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Bitte wählen Sie mindestens eine Leistung."),
  propertyType: z.string().min(1, "Bitte wählen Sie die Objektart."),
  area: z.string().min(1, "Bitte wählen Sie die Fläche."),
  frequency: z.string().min(1, "Bitte wählen Sie die Reinigungshäufigkeit."),
  firstName: z.string().min(2, "Bitte geben Sie Ihren Vornamen ein."),
  lastName: z.string().min(2, "Bitte geben Sie Ihren Nachnamen ein."),
  phone: z.string().min(6, "Bitte geben Sie eine gueltige Telefonnummer ein."),
  email: z
    .union([z.string().email("Bitte geben Sie eine gueltige E-Mail-Adresse ein."), z.literal("")])
    .optional(),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
  privacyAccepted: z
    .boolean()
    .refine((value) => value, "Bitte bestaetigen Sie die Datenschutzhinweise."),
});

type FormValues = z.infer<typeof formSchema>;

const stepLabels = ["Service wählen", "Objekt beschreiben", "Kontaktdaten"];

export function ContactWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      propertyType: "",
      area: "",
      frequency: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      preferredDate: "",
      notes: "",
      privacyAccepted: false,
    },
  });

  const selectedServices = watch("services");

  const progress = useMemo(() => ((step + 1) / stepLabels.length) * 100, [step]);

  const toggleService = (slug: string) => {
    const current = selectedServices ?? [];
    const isSelected = current.includes(slug);
    const updated = isSelected ? current.filter((item) => item !== slug) : [...current, slug];

    setValue("services", updated, { shouldValidate: true });
  };

  const goNext = async () => {
    const fieldsToValidate: Array<keyof FormValues> =
      step === 0
        ? ["services"]
        : step === 1
          ? ["propertyType", "area", "frequency"]
          : ["firstName", "lastName", "phone", "email", "privacyAccepted"];

    const valid = await trigger(fieldsToValidate);
    if (!valid) return;

    setStep((currentStep) => Math.min(currentStep + 1, stepLabels.length - 1));
  };

  const goBack = () => setStep((currentStep) => Math.max(currentStep - 1, 0));

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSubmitError("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
      return;
    }

    router.push("/kontakt/danke");
  });

  return (
    <form className="space-y-6 rounded-card border border-slate-200 bg-white p-6 shadow-card" onSubmit={onSubmit}>
      <div>
        <p className="text-sm font-semibold text-navy">Schritt {step + 1} von 3</p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-navy">{stepLabels[step]}</h2>
        <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-cyan transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 ? (
        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Welche Leistung interessiert Sie?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const active = selectedServices?.includes(service.slug);
              return (
                <button
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    active ? "border-cyan bg-cyan/10" : "border-slate-200 hover:border-slate-300"
                  }`}
                  key={service.slug}
                  onClick={() => toggleService(service.slug)}
                  type="button"
                >
                  <ServiceIcon className="h-5 w-5 text-cyan" name={service.icon} />
                  <p className="mt-3 font-semibold text-navy">{service.name}</p>
                </button>
              );
            })}
          </div>
          {errors.services ? <p className="mt-3 text-sm text-red-600">{errors.services.message}</p> : null}
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Art des Objekts</span>
            <select className="field" {...register("propertyType")}>
              <option value="">Bitte wählen</option>
              {objectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.propertyType ? <p className="text-sm text-red-600">{errors.propertyType.message}</p> : null}
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Ungefaehre Fläche (m2)</span>
            <select className="field" {...register("area")}>
              <option value="">Bitte wählen</option>
              {areaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.area ? <p className="text-sm text-red-600">{errors.area.message}</p> : null}
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Reinigungshäufigkeit</span>
            <select className="field" {...register("frequency")}>
              <option value="">Bitte wählen</option>
              {frequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.frequency ? <p className="text-sm text-red-600">{errors.frequency.message}</p> : null}
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Vorname*</span>
            <input className="field" {...register("firstName")} placeholder="Max" />
            {errors.firstName ? <p className="text-sm text-red-600">{errors.firstName.message}</p> : null}
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Nachname*</span>
            <input className="field" {...register("lastName")} placeholder="Mustermann" />
            {errors.lastName ? <p className="text-sm text-red-600">{errors.lastName.message}</p> : null}
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Telefon*</span>
            <input className="field" {...register("phone")} placeholder="09342 3029778" />
            {errors.phone ? <p className="text-sm text-red-600">{errors.phone.message}</p> : null}
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">E-Mail (optional)</span>
            <input className="field" {...register("email")} placeholder="name@firma.de" type="email" />
            {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Wunschtermin / Anmerkungen</span>
            <input className="field" {...register("preferredDate")} placeholder="z. B. nächste Woche vormittags" />
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Weitere Hinweise</span>
            <textarea
              className="field min-h-24"
              {...register("notes")}
              placeholder="Beschreiben Sie Ihr Objekt oder besondere Anforderungen"
            />
          </label>

          <label className="sm:col-span-2">
            <span className="flex items-start gap-3 rounded-lg border border-slate-200 p-3">
              <input className="mt-1 h-4 w-4" type="checkbox" {...register("privacyAccepted")} />
              <span className="text-sm text-slate-700">
                Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Angaben zu.*
              </span>
            </span>
            {errors.privacyAccepted ? (
              <p className="mt-2 text-sm text-red-600">{errors.privacyAccepted.message}</p>
            ) : null}
          </label>
        </div>
      ) : null}

      {submitError ? (
        <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {submitError}
        </div>
      ) : null}

      <div className="flex flex-col justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
        <div className="text-sm text-slate-500">* Pflichtfelder</div>

        <div className="flex gap-2 self-end">
          {step > 0 ? (
            <Button onClick={goBack} type="button" variant="ghost">
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Button>
          ) : null}

          {step < stepLabels.length - 1 ? (
            <Button onClick={goNext} type="button" variant="amber">
              Weiter
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button disabled={isSubmitting} type="submit" variant="amber">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Angebot anfordern
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
