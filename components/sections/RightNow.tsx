import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { focusItems } from "@/lib/content/focus";

export function RightNow() {
  return (
    <section
      id="right-now"
      className="w-full bg-depth text-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <RevealOnScroll>
          <SectionHeader
            label="Right Now"
            title="What I'm focused on at the moment."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {focusItems.map((item, index) => (
            <RevealOnScroll key={item.category} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-depth-border bg-depth-elevated p-6">
                <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-surface/50">
                  {item.number} — {item.category}
                </span>
                <h3 className="font-serif text-[20px] text-surface mt-3">{item.title}</h3>
                {item.status && (
                  <Badge variant="accent" className="mt-3">
                    {item.status}
                  </Badge>
                )}
                <p className="text-[14px] text-surface/65 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
