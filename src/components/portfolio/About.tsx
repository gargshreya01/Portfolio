const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "5K+", label: "Net New Followers (1 Year)" },
  { number: "42%", label: "Executive LinkedIn Growth YoY" },
  { number: "65K+", label: "National Channel Followers" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
              About
            </p>
            <h2 className="reveal font-display text-foreground mb-6 reveal-delay-1"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Where strategy meets<br />
              <span className="italic">storytelling</span>
            </h2>
            <div className="reveal h-px w-12 bg-gold mb-8 reveal-delay-2" />
            <div className="reveal reveal-delay-2 space-y-4 font-body text-muted-foreground leading-relaxed">
              <p className="text-primary">
                I'm a content and social media program manager with over a decade of experience building programs that span editorial operations, multi-platform channel management, physician and creator influencer programs, live event coverage, and cross-functional campaign execution.
              </p>
              <p className="text-primary">
                At Kaiser Permanente, I lead the social program for the WA region across five platforms while contributing to the national @kaiserpermanente channel and managing a cadenced broadcast media partnership with Fox-13.
              </p>
              <p className="text-primary">
                Earlier roles at Cyient and Trunks Company gave me deep experience in corporate launch events, press engagements, brand activations, and cross-platform storytelling for leadership.
              </p>
              <p className="text-primary">
                I move between strategic planning and fast-turnaround execution without losing quality and I'm genuinely energized by what AI is doing to content and how ideas reach people.
              </p>
            </div>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mt-8">
              {["Greater Seattle Area, WA", "Kaiser Permanente", "UW Master's Alum"].map((tag) => (
                <span key={tag} className="font-body text-xs tracking-wider uppercase px-4 py-2 border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-px bg-border mt-12 md:mt-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal bg-surface-warm p-8 reveal-delay-${i + 1}`}
              >
                <p className="stat-number tabular mb-2">{stat.number}</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
