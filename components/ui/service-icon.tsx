import * as Icons from "lucide-react";

const iconNameMap: Record<string, keyof typeof Icons> = {
  building2: "Building2",
  sparkles: "Sparkles",
  hardHat: "HardHat",
  brushCleaning: "Brush",
  flaskConical: "FlaskConical",
  keyRound: "KeyRound",
  badgeCheck: "BadgeCheck",
  calculator: "Calculator",
  clock3: "Clock3",
  star: "Star",
  shieldCheck: "ShieldCheck",
  timer: "Timer",
  home: "House",
  clipboardCheck: "ClipboardCheck",
  wrench: "Wrench",
  shield: "Shield",
  cross: "Cross",
  sparkle: "Sparkles",
  slidersHorizontal: "SlidersHorizontal",
  alarmClock: "AlarmClock",
  shieldAlert: "ShieldAlert",
  handHelping: "HandHelping",
  scanEye: "ScanSearch",
  briefcaseBusiness: "BriefcaseBusiness",
};

export function ServiceIcon({
  name,
  className,
  strokeWidth = 1.9,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const mappedName = iconNameMap[name] ?? "Circle";
  const Icon = Icons[mappedName] as Icons.LucideIcon;

  return <Icon className={className} strokeWidth={strokeWidth} />;
}
