import { Header, Hero } from "./components";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />

      {/*
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
