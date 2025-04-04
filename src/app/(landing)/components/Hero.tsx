import { Input, Button } from "@/app/components";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl leading-16 font-bold text-white max-w-xl">
          Your projects & social media in a{" "}
          <span className="underline underline-offset-[16px]">single link</span>
        </h1>

        <h2 className="text-xl leading-7">
          <p>Create your own project page and share it with the world.</p>
          <p>Track engagement with Click Analytics.</p>
        </h2>

        <div className="flex items-center gap-3 mt-28">
          <span className="text-white text-xl">projectinbio.com/</span>
          <Input name="project-link" placeholder="Your link" />
          <Button>Create now</Button>
        </div>
      </div>

      <div></div>
    </section>
  );
}
