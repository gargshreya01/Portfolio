export default function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-gold/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm tracking-widest uppercase" style={{ color: "hsl(35, 15%, 55%)" }}>
          Shreya Garg Bajaj
        </p>
        <p className="font-body text-xs tracking-wider" style={{ color: "hsl(35, 15%, 40%)" }}>
          Content &amp; Social Media Program Manager · Seattle, WA
        </p>
        <p className="font-body text-xs" style={{ color: "hsl(35, 15%, 35%)" }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
