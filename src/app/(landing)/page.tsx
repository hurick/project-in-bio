import { Header, Hero } from "./components";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header className="mb-30" />
      <Hero />

      {/*
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
