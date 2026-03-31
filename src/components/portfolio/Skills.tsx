const skillGroups = [
  {
    label: "Strategy & Management",
    items: [
      "Multi-Platform Social Channel Management",
      "Editorial & Publishing Operations",
      "Cross-Platform Campaign Promotion",
      "Social Listening & Performance Analytics",
      "Budget Tracking & Workflow Management",
      "Contributor & Vendor Coordination",
    ],
  },
  {
    label: "Content & Production",
    items: [
      "Newsletter, Web & Long-Form Content",
      "Video Scripting, Filming & Editing",
      "Broadcast Clip Adaptation",
      "Graphic Design",
      "Executive & Thought Leadership Communications",
      "Physician & Creator Influencer Programs",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Sprout Social · Hootsuite",
      "Meta Business Suite · LinkedIn Analytics",
      "Meltwater · Reputation",
      "YouTube Studio · Google Business",
      "Claude · ChatGPT · Perplexity",
      "Live Event Coverage & Speaker Support",
    ],
  },
];

const education = [
  {
    degree: "Master of Communication in Communities and Networks",
    school: "University of Washington",
    year: "2022",
    location: "Seattle, WA",
  },
  {
    degree: "MBA, Marketing & Strategy",
    school: "ICFAI Business School",
    year: "2011",
    location: "India",
  },
  {
    degree: "BA (Hons.), Economics",
    school: "University of Rajasthan",
    year: "2009",
    location: "India",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
            Expertise
          </p>
          <h2
            className="reveal font-display text-foreground reveal-delay-1"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Skills &amp; Education
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border mb-20">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`reveal reveal-delay-${i + 1} bg-background p-8`}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-5">
                {group.label}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm text-muted-foreground">
                    <span className="text-accent mt-1 shrink-0 text-xs">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-8">
            Education
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {education.map((edu, i) => (
              <div
                key={edu.school}
                className={`reveal reveal-delay-${i + 1} bg-background p-8`}
              >
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  {edu.year}
                </p>
                <p className="font-display text-foreground leading-snug mb-2"
                  style={{ fontSize: "1.05rem" }}>
                  {edu.degree}
                </p>
                <p className="font-body text-sm text-accent">{edu.school}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
