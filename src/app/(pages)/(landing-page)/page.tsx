import { Header } from "@/app/components";

import { Hero, VideoTutorial, Pricing, FAQ } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Header />
      <Hero />
      <VideoTutorial />
      <Pricing />
      <FAQ />
    </div>
  );
}
