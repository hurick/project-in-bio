import { twMerge } from "tailwind-merge";

import { Button } from "@/app/components/Button";

import { imgLogo } from "@/app/static/images";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const headerClassNames = twMerge(
    "max-w-7xl mx-auto flex items-center justify-between py-10",
    className
  );

  return (
    <header className={headerClassNames}>
      <img src={imgLogo.src} alt="ProjectinBio logo" />

      <div className="flex items-center gap-4">
        <Button>My page</Button>
      </div>
    </header>
  );
}
