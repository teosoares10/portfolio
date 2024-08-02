import { ButtonLink } from "@/components/ui/button-link";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { Github, LucideGithub, LucideLinkedin } from "lucide-react";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <section>
      <header className="py-[10rem]">
        <Typography
          as="h1"
          content={t("header.title")}
          className="font-bold text-6xl w-[38rem]"
        />

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
    </section>
  );
}
