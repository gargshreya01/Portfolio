export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-surface-deep text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="reveal font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Contact
            </p>
            <h2
              className="reveal font-display reveal-delay-1"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "hsl(40, 30%, 95%)", lineHeight: 1.1 }}
            >
              Let's create something<br />
              <span className="italic">worth remembering</span>
            </h2>
            <div className="reveal h-px w-12 bg-gold my-8 reveal-delay-2" />
            <p className="reveal reveal-delay-2 font-body text-sm leading-relaxed mb-8"
              style={{ color: "hsl(35, 15%, 65%)" }}>
              Whether you're building a content program from scratch, growing a social presence at scale, or developing executive thought leadership — I'd love to connect.
            </p>

            <div className="reveal reveal-delay-3 space-y-4">
              <a
                href="mailto:garg.shreya01@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="font-body text-xs tracking-widest uppercase text-gold">Email</span>
                <span className="font-body text-sm group-hover:text-gold transition-colors duration-200"
                  style={{ color: "hsl(35, 15%, 72%)" }}>
                  garg.shreya01@gmail.com
                </span>
              </a>
              <a
                href="tel:4259001865"
                className="flex items-center gap-4 group"
              >
                <span className="font-body text-xs tracking-widest uppercase text-gold">Phone</span>
                <span className="font-body text-sm group-hover:text-gold transition-colors duration-200"
                  style={{ color: "hsl(35, 15%, 72%)" }}>
                  425-900-1865
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="font-body text-xs tracking-widest uppercase text-gold">Location</span>
                <span className="font-body text-sm"
                  style={{ color: "hsl(35, 15%, 72%)" }}>
                  Greater Seattle Area, WA
                </span>
              </div>
            </div>
          </div>

          {/* Right: LinkedIn CTA card */}
          <div className="reveal reveal-delay-2">
            <div className="border border-gold/30 p-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-5">
                Connect on LinkedIn
              </p>
              <p className="font-display text-2xl mb-4" style={{ color: "hsl(40, 30%, 92%)" }}>
                Shreya Garg Bajaj
              </p>
              <p className="font-body text-sm leading-relaxed mb-8"
                style={{ color: "hsl(35, 15%, 65%)" }}>
                Content & Social Media Program Manager with 10+ years of experience. Follow for insights on content strategy, social media, and the evolving role of AI in editorial work.
              </p>
              <a
                href="https://www.linkedin.com/in/shreyagargbajaj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-xs tracking-widest uppercase px-8 py-3.5 bg-gold text-surface-deep hover:bg-gold/80 transition-colors duration-300 active:scale-[0.97]"
                style={{ color: "hsl(25, 18%, 18%)" }}
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
