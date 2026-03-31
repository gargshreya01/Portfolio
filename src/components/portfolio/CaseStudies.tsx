import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-28 bg-surface-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
            Case Studies
          </p>
          <h2
            className="reveal font-display text-foreground reveal-delay-1"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Work that moved the needle
          </h2>
          <p className="reveal reveal-delay-2 font-body text-muted-foreground max-w-xl mt-4 leading-relaxed">
            Five stories of content programs built, channels grown, and audiences earned - from regional health campaigns to luxury brand launches.
          </p>
        </div>

        <div className="space-y-px">
          {caseStudies.map((cs, i) => (
            <article key={cs.id} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <button
                onClick={() => setActive(active === cs.id ? null : cs.id)}
                className="w-full text-left bg-background hover:bg-gold-light/40 transition-colors duration-300 group"
              >
                <div className="px-8 py-7 flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6 min-w-0">
                    <span className="font-body text-xs tracking-widest uppercase text-gold pt-1 shrink-0 w-24 hidden sm:block">
                      {cs.tags[0]}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-foreground group-hover:text-accent transition-colors duration-200 text-xl font-serif font-normal">
                        {cs.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {cs.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-muted-foreground group-hover:text-accent transition-all duration-300 shrink-0 mt-1 text-xl leading-none"
                    style={{
                      transform: active === cs.id ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    +
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <div
                style={{
                  maxHeight: active === cs.id ? "800px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="bg-background border-t border-border px-8 py-10 sm:pl-36">
                  <div className="grid md:grid-cols-3 gap-10">
                    {/* Challenge */}
                    <div>
                      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                        The Challenge
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    {/* Approach */}
                    <div>
                      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                        My Role
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {cs.myRole}
                      </p>
                    </div>
                    {/* Results */}
                    <div>
                      <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                        Key Results
                      </p>
                      <ul className="space-y-2 mb-5">
                        {cs.stats.map((s) => (
                          <li key={s.label} className="flex items-start gap-2.5 font-body text-sm text-muted-foreground">
                            <span className="text-accent mt-0.5 shrink-0">—</span>
                            <span>
                              <strong className="text-foreground">{s.value}{s.unit}</strong> {s.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {cs.tags && (
                        <div className="flex flex-wrap gap-2 mt-5 mb-6">
                          {cs.tags.map((p) => (
                            <span key={p} className="font-body text-xs px-3 py-1 border border-border text-muted-foreground tracking-wide">
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to={`/case-studies/${cs.id}`}
                        className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read case study
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
