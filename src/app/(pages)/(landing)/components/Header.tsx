import { Button } from "@/app/components/Button";

import { imgLogo } from "@/app/static/images";

export function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <img src={imgLogo.src} alt="ProjectinBio logo" width={187} height={32} />

      <div className="flex items-center gap-4">
        <Button>My page</Button>
      </div>
    </header>
  );
}
