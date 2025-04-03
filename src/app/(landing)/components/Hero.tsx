import { Input, Button, TextArea } from "@/app/components";

export default function Hero() {
  return (
    <section>
      <div>
        <h1 className="text-5xl leading-16 font-bold text-white">
          Your projects & social media in a single link
        </h1>

        <h2 className="text-xl leading-7">
          <p>Create your own project page and share it with the world.</p>
          <p>Track engagement with Click Analytics.</p>
        </h2>

        <div>
          <span className="text-white">projectinbio.com/</span>
          <Input name="project-link" placeholder="What's your project name?" />
          <Button>Create now</Button>
        </div>
      </div>
      <div></div>
    </section>
  );
}
