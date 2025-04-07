import { StaticImageData } from "next/image";

import { twMerge } from "tailwind-merge";

interface CardProjectProps {
  className?: string;
  image: StaticImageData;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  clicks: number;
}

export function CardProject({
  className,
  image,
  imageAlt,
  projectName,
  projectDescription,
  clicks,
}: CardProjectProps) {
  const clickClassNames = twMerge(
    "inline-flex mb-3 font-bold text-sm text-accent-light-orange",
    clicks >= 10 ? "text-accent-light-green" : "text-accent-light-orange"
  );

  const cardClassNames = twMerge(
    "flex flex-row items-start max-w-85 min-w-85 rounded-xl gap-5 p-3 bg-background-secondary",
    className
  );

  return (
    <div className={cardClassNames}>
      <img src={image.src} alt={imageAlt} />
      <div>
        <span className={clickClassNames}>{clicks} clicks</span>
        <h3 className="font-bold text-lg">{projectName}</h3>
        <h4>{projectDescription}</h4>
      </div>
    </div>
  );
}
