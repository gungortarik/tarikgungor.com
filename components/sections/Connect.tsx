import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";

export function Connect() {
  return (
    <section
      className="bg-surface"
      aria-labelledby="connect-heading"
      data-field-chapter="connect"
    >
      <div className="page-pad page-width py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 border-t border-surface-border pt-12 sm:pt-16">
          <div className="lg:col-span-3">
            <p className="field-meta text-foreground-subtle">Connect</p>
          </div>
          <div className="lg:col-span-8">
            <h2
              id="connect-heading"
              className="font-serif text-[28px] sm:text-[40px] tracking-[-0.03em] font-medium leading-[1.15] max-w-[16ch]"
            >
              {profile.contactIntro}
            </h2>
            <p className="mt-5 text-[16px] text-foreground-muted leading-[1.7] max-w-[36rem]">
              Email is the cleanest way. LinkedIn and GitHub are there if you prefer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href={`mailto:${profile.contact.email}`}>{profile.contact.email}</Button>
              <Button href="/resume" variant="secondary">
                Resume
              </Button>
              <Button href="/contact" variant="ghost">
                Contact page →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
