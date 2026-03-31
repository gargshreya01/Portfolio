const experiences = [
  {
    company: "Kaiser Permanente",
    location: "Renton, WA",
    period: "May 2022 – Present",
    role: "Social Media Lead – Communications Consultant",
    highlights: [
      "Own day-to-day editorial operations across Instagram, Facebook, X, and Threads; 5,000+ net new followers in WA region in one year",
      "Manage LinkedIn thought leadership for WA Regional President and WPMG Executive Medical Director; 42% YoY audience growth",
      "Lead physician influencer program: source, brief, film, and publish content; manage Fox-13 broadcast media partnership",
      "Directed social campaign for Seattle to Portland Bicycle Classic (10,000+ participants) and Seafair 5K",
      "Drove 30% increase in employee participation through targeted messaging campaigns",
      "Instagram +136% views; Facebook +454% views (2024–2025)",
    ],
  },
  {
    company: "Cyient",
    location: "India & USA",
    period: "June 2017 – May 2018",
    role: "Deputy Public Relations Manager",
    highlights: [
      "Supported communications for large-scale corporate product launches and leadership summits across US and India markets",
      "Briefed senior leaders with talking points; managed on-site press relationships",
      "Amplified corporate announcements across channels in real time; developed crisis messaging frameworks",
    ],
  },
  {
    company: "Trunks Company",
    location: "India",
    period: "July 2013 – April 2015",
    role: "Brand Manager",
    highlights: [
      "Built content pipeline from scratch as the company's first marketer: website, newsletter, editorial, social, and PR",
      "Designed brand activations, pop-up events, and creator/influencer engagement campaigns",
      "Secured international press coverage; contributed to 42% increase in global brand awareness",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
            Experience
          </p>
          <h2
            className="reveal font-display text-foreground reveal-delay-1"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            A decade of building<br />
            <span className="italic">what works</span>
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`reveal reveal-delay-${i + 1} grid md:grid-cols-[280px_1fr] gap-0 border-t border-border`}
            >
              {/* Left: Company info */}
              <div className="py-10 md:pr-10 bg-background">
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  {exp.period}
                </p>
                <p className="font-display text-xl text-foreground mt-3">
                  {exp.company}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {exp.location}
                </p>
                <p className="font-body text-sm text-accent mt-3 leading-snug">
                  {exp.role}
                </p>
              </div>

              {/* Right: Highlights */}
              <div className="py-10 md:pl-10 border-t md:border-t-0 md:border-l border-border">
                <ul className="space-y-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed">
                      <span className="text-gold mt-1 shrink-0 text-xs">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* Bottom rule */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
