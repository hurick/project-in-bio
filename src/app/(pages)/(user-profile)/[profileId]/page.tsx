import { Plus } from "lucide-react";

import { imgHurick, imgProject01 } from "@/app/static/images";

import {
  Button,
  CardProject,
  CardUser,
  CardVisitsCounter,
} from "@/app/components";

interface IUserProfilePageProps {
  params: Promise<{ profileId: string }>;
}

export default async function UserProfilePage({
  params,
}: IUserProfilePageProps) {
  const { profileId } = await params;

  return (
    <>
      <div className="z-10 fixed top-0 left-0 w-full flex items-center justify-center py-3 bg-background-tertiary">
        <p>
          Você está na versão trial.{" "}
          <span className="font-bold text-accent-green cursor-pointer hover:underline underline-offset-4">
            Faça o upgrade agora!
          </span>
        </p>
      </div>

      <main className="flex flex-row items-start justify-around gap-10 pt-20">
        <div className="sticky top-20 flex flex-col gap-10 min-w-xs max-w-xs w-full">
          <CardUser
            containerClassName="max-w-auto"
            image={imgHurick}
            imageAlt="Portrait of Hurick Krügner"
            name="Hurick Krügner"
            description="I create products for the internet"
            buttonLabel="Check out my SaaS template"
          />
        </div>

        <div className="relative flex flex-wrap gap-6 justify-start w-fit">
          <Button
            className="flex items-center justify-center gap-2 flex-1"
            variant="secondary"
          >
            <Plus className="size-8" />
            New project
          </Button>

          {Array.from({ length: 9 }).map((_, index) => (
            <CardProject
              className="max-w-[calc(50%-12px)] min-w-auto w-full"
              key={index}
              image={imgProject01}
              imageAlt="Project 1 Imagem"
              projectName={`Project ${index + 1}`}
              projectDescription={`This is a description for the Project ${
                index + 1
              }.`}
              clicks={7 + index * Math.ceil(Math.random() * 100)}
            />
          ))}

          <div className="sticky w-full pb-10 left-0 bottom-0 bg-gradient-to-b from-transparent to-background-primary backdrop-blur-xs">
            <CardVisitsCounter totalVisits={123632} />
          </div>
        </div>
      </main>
    </>
  );
}
