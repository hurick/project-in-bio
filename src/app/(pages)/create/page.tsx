import { Rocket } from "lucide-react";

import { Button, Header, Input } from "@/app/components";

export default function CreatePage() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="h-[calc(100vh-260px)] flex flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-4 text-white">
          <h1 className="font-bold text-4xl">Choose your link</h1>
          <Rocket className="size-10" />
        </div>

        <form className="flex items-center gap-2">
          <label htmlFor="create-custom-link" className="text-white">
            projectinbio.com/
          </label>

          <Input
            name="create-custom-link"
            placeholder="your-custom-link-here"
            inputClassName="min-w-96"
          />

          <Button type="submit" className="min-w-32">
            Create
          </Button>
        </form>

        <div>
          <span className="text-accent-pink">Example error</span>
        </div>
      </div>
    </div>
  );
}
