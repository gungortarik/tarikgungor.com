import Link from "next/link";
import { profile } from "@/lib/content/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-depth text-on-depth">
      <div className="px-5 sm:px-7 lg:px-8 py-14 sm:py-16">
        <p className="home-folio text-on-depth-subtle">Contact</p>
        <h2 className="home-quote text-on-depth mt-5 max-w-[20rem]">{profile.contactIntro}</h2>
        <a
          href={`mailto:${profile.contact.email}`}
          className="home-email mt-6 inline-block text-on-depth hover:text-on-depth-muted transition-colors break-all"
        >
          {profile.contact.email}
        </a>
        <div className="mt-8 home-folio flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${profile.contact.email}`} className="text-on-depth-muted hover:text-on-depth py-1">
            Email
          </a>
          <Link href="/resume" className="text-on-depth-muted hover:text-on-depth py-1">
            Resume ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
