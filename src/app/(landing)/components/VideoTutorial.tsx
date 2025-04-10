import { Play } from "lucide-react";

import { imgTutorialPlaceholder } from "@/app/static/images";

export function VideoTutorial() {
  return (
    <div className="relative flex items-center justify-center border border-border-primary aspect-video rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-xl brightness-50"
        src={imgTutorialPlaceholder.src}
        alt="Video tutorial thumbnail placeholder"
      />

      <Play className="p-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-purple size-16 hover:scale-150 transition-transform cursor-pointer" />
    </div>
  );
}
