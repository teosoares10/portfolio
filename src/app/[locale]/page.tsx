import { ButtonLink } from "@/components/ui/button-link";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { Github, LucideGithub, LucideLinkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <section>
      <header className="h-[92vh] flex flex-col justify-center">
        <Typography as="h1" className="font-bold text-6xl w-[38rem]">
          {t("header.title")}
        </Typography>

        <div className="space-x-4 mt-2">
          <ButtonLink
            link="https/linkedin.com/teosoares10/"
            content={<LucideLinkedin />}
          />
          <ButtonLink
            link="https/github.com/teosoares10/"
            content={<LucideGithub />}
          />
        </div>
      </header>

      <main className="py-24">
        <div className="h-64 flex items-center justify-between">
          <Image
            src={``}
            alt=""
            className="size-[20rem] bg-slate-700 rounded-full"
          />

          <section className="space-y-4 w-[33rem]">
            <Typography as="h1" className="text-6xl">
              {t("main.about.title")}
              <Typography as="span" className="block text-base pt-2">
                {t("main.about.subtitle")}
              </Typography>
            </Typography>

            <Typography>
              {t.rich("main.about.content", {
                important: (chuncks) => (
                  <span className="font-bold italic underline">{chuncks}</span>
                ),
              })}
            </Typography>
          </section>
        </div>
      </main>
    </section>
  );
}
