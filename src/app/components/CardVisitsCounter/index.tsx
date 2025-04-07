import { TrendingUp } from "lucide-react";

import { twMerge } from "tailwind-merge";

interface CardVisitsCounterProps {
  className?: string;
  totalVisits: number;
}

export function CardVisitsCounter({
  className,
  totalVisits,
}: CardVisitsCounterProps) {
  const formattedVisits = new Intl.NumberFormat("en-US").format(totalVisits);

  const cardClassNames = twMerge(
    "flex flex-row items-center gap-5 px-8 py-3 font-bold bg-background-secondary border border-border-primary rounded-xl",
    className
  );

  return (
    <div className={cardClassNames}>
      <span>Total visits</span>

      <span className="flex flex-row items-center gap-2 text-4xl text-accent-green">
        {formattedVisits}
        <TrendingUp />
      </span>
    </div>
  );
}
