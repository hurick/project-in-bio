import {
  Input,
  Button,
  CardProject,
  CardVisitsCounter,
  CardUser,
} from "@/app/components";

import { imgProject01, imgProject02, imgHurick } from "@/app/static/images";

export function Hero() {
  return (
    <section className="flex">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl leading-16 font-bold text-white max-w-xl">
          Your projects & social media in a{" "}
          <span className="underline underline-offset-[16px]">single link</span>
        </h1>

        <h2 className="text-xl leading-7">
          <p>Create your own project page and share it with the world.</p>
          <p>Track engagement with Click Analytics.</p>
        </h2>

        <div className="flex items-center gap-2 mt-28">
          <label htmlFor="project-link" className="text-white text-xl">
            projectinbio.com/
          </label>
          <Input name="project-link" placeholder="your-link-here" />
          <Button>Create now</Button>
        </div>
      </div>

      <div className="relative flex flex-col items-center flex-1 bg-[radial-gradient(circle_at_50%_50%,rgba(75,45,187,.35),transparent_80%)]">
        <CardProject
          className="absolute z-10 -top-12 left-25"
          clicks={15}
          projectName="BugTracer"
          projectDescription="Simple bug tracker"
          image={imgProject01}
          imageAlt="Preview of a project page showing social media links and engagement metrics"
        />

        <CardProject
          className="absolute top-28 left-[40px] z-10"
          clicks={2}
          projectName="CodeLink"
          projectDescription="GitHub and GitLab integration"
          image={imgProject02}
          imageAlt="Display showing multiple lines of code"
        />

        <CardUser
          containerClassName="pb-24"
          image={imgHurick}
          imageAlt="Portrait of Hurick Krügner"
          name="Hurick Krügner"
          description="I create products for the internet"
          buttonLabel="Check out my SaaS template"
        />

        <CardVisitsCounter
          className="absolute bottom-4 z-10 left-1/2"
          totalVisits={12453}
        />
      </div>
    </section>
  );
}
