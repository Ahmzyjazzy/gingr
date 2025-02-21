"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle, Button } from "@gingr/ui";

import { sendOneTimePasswordAction } from "./actions";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Ginger Admin &nbsp;</span>
        <span className={title({ color: "violet" })}>App&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "bordered",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Button
          onPress={() => {
            sendOneTimePasswordAction({
              email: "olanrewajuahmed095@yahoo.com",
              name: "Olanrewaju",
              token: "1 2 3 4 5 6",
            });
          }}
        >
          Send OTP (Server Action)
        </Button>
        <Button
          onPress={async () => {
            try {
              const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: "olanrewajuahmed095@yahoo.com",
                  name: "Ahmed",
                  token: "6 5 4 3 2 1",
                }),
              });

              const data = await res.json();
              console.log(data);
            } catch (error) {
              console.error("Frontend Error:", error);
            }
          }}
        >
          Send OTP (Api)
        </Button>
      </div>
    </section>
  );
}
