import { Header, Hero } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-20">
      <Header />
      <Hero />

      {/*
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
