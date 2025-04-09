import { StaticImageData } from "next/image";

import { twMerge } from "tailwind-merge";

import { Facebook, Instagram, Linkedin, Github, PlusIcon } from "lucide-react";

import { Button } from "../Button";

interface CardUserProps {
  containerClassName?: string;
  image: StaticImageData;
  imageAlt: string;
  name: string;
  description?: string;
  buttonLabel?: string;
}

export function CardUser({
  containerClassName,
  image,
  imageAlt,
  name,
  description,
  buttonLabel,
}: CardUserProps) {
  const socialIcons = [
    {
      id: "facebook",
      icon: <Facebook />,
      title: "Facebook",
    },
    {
      id: "instagram",
      icon: <Instagram />,
      title: "Instagram",
    },
    {
      id: "linkedin",
      icon: <Linkedin />,
      title: "Linkedin",
    },
    {
      id: "github",
      icon: <Github />,
      title: "Github",
    },
    {
      id: "add-new-link",
      icon: <PlusIcon />,
      title: "Add new link",
    },
  ];

  const cardClassNames = twMerge(
    "flex flex-col z-10 gap-5 max-w-82 w-full p-5 bg-background-secondary rounded-4xl border border-border-primary",
    containerClassName
  );

  return (
    <div className={cardClassNames}>
      <img
        src={image.src}
        alt={imageAlt}
        className="inline-flex self-center size-50 rounded-full"
      />

      <div className="flex flex-col gap-2 items-start">
        <h3 className="font-bold text-4xl text-ellipsis whitespace-nowrap overflow-hidden w-full">
          {name}
        </h3>

        {description && (
          <h4 className="font-medium text-content-body/40">{description}</h4>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-5 border-t border-border-primary">
        <span className="uppercase text-sm font-medium">Links</span>

        <div className="flex flex-row justify-between">
          {socialIcons.map(({ id, icon, title }) => (
            <Button key={id} variant="secondary" title={title}>
              {icon}
            </Button>
          ))}
        </div>
      </div>

      {buttonLabel && (
        <div className="flex pt-5 border-t border-border-primary">
          <Button className="w-full">
            <span>{buttonLabel}</span>
          </Button>
        </div>
      )}
    </div>
  );
}
