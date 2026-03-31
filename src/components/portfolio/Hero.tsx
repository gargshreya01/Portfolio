import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Eyebrow label */}
        <p
          className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6 font-light"
          style={{ animation: "fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          Content &amp; Social Media Manager
        </p>

        {/* Name */}
        <h1
          className="font-display text-foreground leading-none mb-8"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            letterSpacing: "-0.02em",
            animation: "fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        >
          Shreya
          <br />
          <span className="italic font-normal text-accent">Garg Bajaj</span>
        </h1>

        {/* Thin gold rule */}
        <div
          className="h-px bg-gold w-20 mb-8"
          style={{ animation: "line-grow 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        />

        {/* Summary */}
        <p
          className="font-body text-muted-foreground max-w-xl leading-relaxed mb-12"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            animation: "fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both",
          }}
        >
          "The best content programs don't start with a calendar. They start with a question: what does this audience actually need right now — and do we have the system to get it to them?"
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}
        >
          <button
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-accent transition-colors duration-300 active:scale-[0.97]"
          >
            View Case Studies
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-foreground/30 text-foreground font-body text-sm tracking-widest uppercase px-8 py-3.5 hover:border-accent hover:text-accent transition-colors duration-300 active:scale-[0.97]"
          >
            Get in Touch
          </button>
        </div>

        {/* Testimonials block */}
        <div
          className="mt-12 grid md:grid-cols-2 gap-0 bg-surface-deep/80 backdrop-blur-sm"
          style={{ animation: "fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
        >
          <div className="p-8 md:p-10 border-b border-gold/20 md:border-b-0 md:border-r md:border-gold/30">
            <p className="font-display italic text-base leading-relaxed mb-5" style={{ color: "hsl(40, 30%, 88%)", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
              "Shreya has really blossomed in the last year, finding her stride and earning praise from leaders for her confident presence and knowledge of social media platforms. She continues to work more independently, and we routinely count on her to deliver impactful insights and resources."
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/70">
              Manager · Annual Review 2024 · Rating: Excellent
            </p>
          </div>
          <div className="p-8 md:p-10">
            <p className="font-display italic text-base leading-relaxed mb-5" style={{ color: "hsl(40, 30%, 88%)", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}>
              "Her social media knowledge and skills frequently exceed what I would expect at an IC3 level."
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/70">
              National KP Leader · Peer Review 2025 · Rating: Excellent
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fade-in 1s cubic-bezier(0.16,1,0.3,1) 1.2s both" }}
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
