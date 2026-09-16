import Link from "next/link";
import { educationList } from "@/lib/content/experience";
import { profile } from "@/lib/content/profile";

export function WhoIAm() {
  const school = educationList[0];

  return (
    <section id="about" className="border-t border-surface-border">
      <div className="px-5 sm:px-7 lg:px-8 py-12 sm:py-16">
        <p className="home-folio text-foreground-muted">About</p>
        <p className="home-quote mt-5 max-w-[34rem]">{profile.aboutIntro}</p>
        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <ul className="lg:col-span-4 home-folio text-foreground-muted space-y-2">
            <li>{profile.location}</li>
            {school ? (
              <li>
                {school.institution}
                <span className="block mt-1 normal-case tracking-normal text-foreground-subtle">
                  {school.program}
                </span>
              </li>
            ) : null}
          </ul>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[14px] sm:text-[15px] text-foreground-muted leading-[1.75] max-w-[34rem]">
              {profile.shortBio}
            </p>
            <Link
              href="/about"
              className="inline-block mt-5 text-[13px] underline underline-offset-4 hover:text-foreground-muted py-1"
            >
              Continue on About →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
