import { Input, Button } from "@/app/components";

import { imgProject01, imgProject02, imgHurick } from "@/app/static/images";

import {
  TrendingUp,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  PlusIcon,
} from "lucide-react";

export default function Hero() {
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

        <div className="flex items-center gap-3 mt-28">
          <label htmlFor="project-link" className="text-white text-xl">
            projectinbio.com/
          </label>
          <Input name="project-link" placeholder="Your link" />
          <Button>Create now</Button>
        </div>
      </div>

      <div className="relative flex flex-col items-center flex-1 bg-[radial-gradient(circle_at_50%_50%,rgba(75,45,187,.35),transparent_75%)]">
        {/* 15 Cliques */}
        <div className="absolute -z-20 -top-12 left-25 flex flex-row items-start max-w-85 min-w-85 rounded-xl gap-5 p-3 bg-background-secondary">
          <img
            src={imgProject01.src}
            alt="Preview of a project page showing social media links and engagement metrics"
          />
          <div>
            <span className="inline-flex mb-3 font-bold text-sm text-accent-light-green">
              15 clicks
            </span>
            <h3 className="font-bold text-lg">BugTracer</h3>
            <h4>Simple bug tracker</h4>
          </div>
        </div>

        {/* 2 Cliques */}
        <div className="absolute top-28 left-[40px] -z-20 flex flex-row items-start max-w-85 min-w-85 rounded-xl gap-5 p-3 bg-background-secondary">
          <img
            src={imgProject02.src}
            alt="Display showing multiple lines of code"
          />
          <div>
            <span className="inline-flex mb-3 font-bold text-sm text-accent-light-orange">
              2 clicks
            </span>
            <h3 className="font-bold text-lg">CodeLink</h3>
            <h4>GitHub and GitLab integration</h4>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex flex-col z-10 gap-5 max-w-82 w-full p-5 pb-24 bg-background-secondary rounded-4xl border border-border-primary">
          <img
            src={imgHurick.src}
            alt="Portrait of Hurick Krügner"
            className="inline-flex self-center size-50 rounded-full"
          />

          <div className="flex flex-col gap-2 items-start">
            <h3 className="font-bold text-4xl text-ellipsis whitespace-nowrap overflow-x-hidden w-full">
              Hurick Krügner
            </h3>

            <h4 className="font-medium text-content-body/40">
              I create internet products
            </h4>
          </div>

          <div className="flex flex-col gap-2 py-5 border-t border-b border-border-primary">
            <span className="uppercase text-sm font-medium">Links</span>
            <div className="flex flex-row justify-between">
              <Button variant="secondary">
                <Linkedin />
              </Button>

              <Button variant="secondary">
                <Instagram />
              </Button>

              <Button variant="secondary">
                <Facebook />
              </Button>

              <Button variant="secondary">
                <Github />
              </Button>

              <Button variant="secondary">
                <PlusIcon />
              </Button>
            </div>
          </div>

          <Button>
            <span>Check out my SaaS template</span>
          </Button>
        </div>

        {/* Total de visitas */}
        <div className="absolute bottom-4 z-10 left-1/2 flex flex-row items-center gap-5 px-8 py-3 font-bold bg-background-secondary border border-border-primary rounded-xl">
          <span>Total de visitas</span>

          <span className="flex flex-row items-center gap-2 text-4xl text-accent-green">
            12,453
            <TrendingUp />
          </span>
        </div>
      </div>
    </section>
  );
}
