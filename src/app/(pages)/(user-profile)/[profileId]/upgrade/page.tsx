import { Rocket } from "lucide-react";

import { Button, Header } from "@/app/components";

export default function UpgradePage() {
  return (
    <>
      <Header />

      <main className="h-[calc(100vh-290px)] flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <h1 className="font-bold text-4xl">What plan is best for you?</h1>
          <Rocket className="size-10" />
        </div>

        <div className="flex gap-4">
          <Button>$9.90/month</Button>
          <Button>$99.90/year</Button>
        </div>
      </main>
    </>
  );
}
