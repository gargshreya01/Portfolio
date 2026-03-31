import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { caseStudies, SubSection, WorkSample } from "@/data/caseStudies";
import drItanoReel from "@/assets/dr-itano-healthy-living-reel.jpeg";
import drEgwuatuReel from "@/assets/dr-egwuatu-health-tips-reel.jpeg";
import fox13Seasonal from "@/assets/fox-13-segment-seasonal-health.jpeg";
import mythFluReel from "@/assets/Myth_vs._Fact_flu_reel_1.jpeg";
import mythImmunityReel from "@/assets/Myth_vs._Fact_immunity_reel_2.jpeg";
import nationalKpHealthTipsCarousel from "@/assets/national-kp-health-tips-carousel.jpeg";
import nationalKpPhysicianQuoteCard from "@/assets/national-kp-physician-quote-card.jpeg";
import nationalKpDataInfographic from "@/assets/national-kp-data-infographic.jpeg";
import nationalKpGenZLifestyleReel from "@/assets/national-kp-genz-lifestyle-reel.jpeg";
import nationalKpMythBustingCarousel from "@/assets/national-kp-myth-busting-carousel.jpeg";
import nationalKpMemberStory from "@/assets/national-kp-member-story.jpeg";
import nationalKpNationalContribution from "@/assets/national-kp-national-contribution.jpeg";
import cynthiaDoldLinkedin from "@/assets/cynthia-dold-linkedin.jpeg";
import drDorianReidLinkedin from "@/assets/dr-dorian-reid-linkedin.jpeg";
import angelaDowlingLinkedin from "@/assets/angela-dowling-linkedin.jpeg";
import drLindaTolbertLinkedin from "@/assets/dr-linda-tolbert-linkedin.jpeg";
import shreyaPresentingLinkedinTraining from "@/assets/shreya-presenting-linkedin-training.jpeg";
import linkedinTrainingCheatSheet from "@/assets/linkedin-training-cheat-sheet.png";
import carolynBartonLinkedinPost from "@/assets/carolyn-barton-linkedin-post.jpeg";

const localImages: Record<string, string> = {
  "dr-itano-healthy-living-reel": drItanoReel,
  "dr-egwuatu-health-tips-reel": drEgwuatuReel,
  "fox-13-segment-seasonal-health": fox13Seasonal,
  "myth-vs-fact-flu-reel": mythFluReel,
  "myth-vs-fact-immunity-reel": mythImmunityReel,
  "national-kp-health-tips-carousel": nationalKpHealthTipsCarousel,
  "national-kp-physician-quote-card": nationalKpPhysicianQuoteCard,
  "national-kp-data-infographic": nationalKpDataInfographic,
  "national-kp-genz-lifestyle-reel": nationalKpGenZLifestyleReel,
  "national-kp-myth-busting-carousel": nationalKpMythBustingCarousel,
  "national-kp-member-story": nationalKpMemberStory,
  "national-kp-national-contribution": nationalKpNationalContribution,
  "cynthia-dold-linkedin": cynthiaDoldLinkedin,
  "dr-dorian-reid-linkedin": drDorianReidLinkedin,
  "angela-dowling-linkedin": angelaDowlingLinkedin,
  "dr-linda-tolbert-linkedin": drLindaTolbertLinkedin,
  "shreya-presenting-linkedin-training": shreyaPresentingLinkedinTraining,
  "linkedin-training-cheat-sheet": linkedinTrainingCheatSheet,
  "carolyn-barton-linkedin-post": carolynBartonLinkedinPost,
};
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

// ── Placeholder tile for portrait phone mock (4:5) or landscape (16:9 / 3:2)
function WorkSampleTile({ sample }: { sample: WorkSample }) {
  const isPortrait = sample.aspect === "portrait";
  const isContain = sample.objectFit === "contain";
  const aspectClass = isContain ? "" : isPortrait ? "aspect-[9/16]" : "aspect-[4/3]";
  const resolvedImage = sample.imageKey ? localImages[sample.imageKey] : sample.imagePath;
  const isClickable = !!sample.viewHref;

  const imageContent = resolvedImage ? (
    isContain ? (
      <img
        src={resolvedImage}
        alt={sample.label}
        className="w-full h-auto block rounded"
      />
    ) : (
    <img
      src={resolvedImage}
      alt={sample.label}
      className="absolute inset-0 w-full h-full object-cover"
    />
    )
  ) : (
    <>
      {isPortrait && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-muted-foreground/20 rounded-full" />
      )}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-muted-foreground opacity-40">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="font-body text-xs text-muted-foreground leading-snug">{sample.label}</p>
      {sample.caption && (
        <p className="font-body text-[10px] text-muted-foreground/60 italic leading-snug">{sample.caption}</p>
      )}
    </>
  );

  return (
    <div className="flex flex-col gap-2">
      {isClickable ? (
        <a
          href={sample.viewHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block ${isContain ? "relative rounded overflow-hidden" : `${aspectClass} relative overflow-hidden rounded`} group cursor-pointer ${!resolvedImage ? "bg-muted border border-dashed border-border flex flex-col items-center justify-center gap-2 text-center p-4 aspect-[4/3]" : ""}`}
        >
          {imageContent}
          {resolvedImage && !isContain && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded">
                {sample.viewHref?.includes("linkedin") ? "View on LinkedIn" : sample.viewHref?.includes("facebook") ? "View on Facebook" : "View on Instagram"}
              </span>
            </div>
          )}
          {resolvedImage && isContain && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded">
                View on LinkedIn
              </span>
            </div>
          )}
        </a>
      ) : (
        <div className={`${aspectClass} relative overflow-hidden rounded ${!resolvedImage ? "bg-muted border border-dashed border-border flex flex-col items-center justify-center gap-2 text-center p-4 aspect-[4/3]" : ""}`}>
          {imageContent}
        </div>
      )}
      {/* Caption below image */}
      {(sample.label || sample.caption) && resolvedImage && (
        <div className="mt-1">
          {sample.label && <p className="font-body text-sm text-foreground font-medium leading-snug">{sample.label}</p>}
          {sample.caption && <p className="font-body text-xs text-muted-foreground leading-snug mt-0.5">{sample.caption}</p>}
        </div>
      )}
      {sample.viewLabel && (
        <a
          href={sample.viewHref || "#"}
          className="inline-flex items-center gap-1 font-body text-xs text-accent hover:text-foreground transition-colors"
        >
          {sample.viewLabel} <ArrowRight className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}

// ── Results table (compact, shared)
function ResultsTable({ table }: { table: NonNullable<(typeof caseStudies)[0]["resultsTable"]> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-body border-collapse border border-border">
        <thead>
          <tr className="bg-surface-deep text-primary-foreground">
            {table.columns.map((col) => (
              <th key={col} className="text-left px-4 py-3 font-body text-xs tracking-wide font-normal border-r border-white/10 last:border-r-0">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-foreground border-r border-border last:border-r-0 ${j === row.length - 1 && typeof cell === "string" && cell.startsWith("+") ? "text-accent font-medium" : ""}`}>
                  {String(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Sub-section renderer (Fox-13 reel grids, Myth vs Fact, National KP)
function SubSectionBlock({ section }: { section: SubSection }) {
  const portraits = section.workSamples?.filter((s) => s.aspect === "portrait") ?? [];
  const landscapes = section.workSamples?.filter((s) => s.aspect !== "portrait") ?? [];
  const allSamples = section.workSamples ?? [];

  return (
    <section>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground shrink-0">{section.label}</p>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Text + table split layout */}
      {section.text && section.resultsTable ? (
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <p className="font-body text-base text-foreground leading-relaxed">{section.text}</p>
          <ResultsTable table={section.resultsTable} />
        </div>
      ) : section.text ? (
        <div className="mb-8">
          <p className="font-body text-base text-foreground leading-relaxed">
            {section.text}
            {section.textHighlights?.map((hl, i) => (
              <span key={i}><strong>{hl.bold}</strong>{hl.rest}</span>
            ))}
          </p>
        </div>
      ) : null}

      {/* twoCol sub-section layout */}
      {section.twoCol && (
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">{section.twoCol.leftTitle}</p>
            <p className="font-body text-base text-foreground leading-relaxed">{section.twoCol.leftBody}</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">{section.twoCol.rightTitle}</p>
            <p className="font-body text-base text-foreground leading-relaxed">{section.twoCol.rightBody}</p>
          </div>
        </div>
      )}

      {/* Callout box */}
      {section.callout && (
        <div className="border-l-2 border-gold bg-gold-light/30 px-6 py-5 mb-8">
          <p className="font-body text-base text-foreground leading-relaxed">
            {section.calloutBold && <strong>{section.calloutBold} </strong>}
            {section.callout}
          </p>
        </div>
      )}

      {/* Work samples — portrait phone grid (portrait only, no landscapes) */}
      {portraits.length > 0 && landscapes.length === 0 && (
        <div className={`grid gap-4 ${portraits.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
          {portraits.map((s, i) => <WorkSampleTile key={i} sample={s} />)}
        </div>
      )}

      {/* Work samples — portrait (3) + landscape (1) side by side like reference */}
      {portraits.length >= 3 && landscapes.length >= 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portraits.slice(0, 3).map((s, i) => <WorkSampleTile key={i} sample={s} />)}
          {landscapes.slice(0, 1).map((s, i) => <WorkSampleTile key={i + 3} sample={s} />)}
        </div>
      )}

      {/* Work samples — all landscape/plain (no portraits) */}
      {landscapes.length > 0 && portraits.length === 0 && (
        <div className={`grid gap-4 ${landscapes.length <= 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-4"}`}>
          {landscapes.map((s, i) => <WorkSampleTile key={i} sample={s} />)}
        </div>
      )}

      {/* Mixed: any portraits + any landscapes/plain together */}
      {portraits.length > 0 && portraits.length < 3 && landscapes.length > 0 && (
        <div className={`grid gap-4 ${allSamples.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
          {allSamples.map((s, i) => <WorkSampleTile key={i} sample={s} />)}
        </div>
      )}

      {/* Plain work samples only (no aspect specified on any) */}
      {allSamples.length > 0 && portraits.length === 0 && landscapes.length === 0 && (
        <div className={`grid gap-4 ${allSamples.length === 1 ? "grid-cols-1" : allSamples.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
          {allSamples.map((s, i) => <WorkSampleTile key={i} sample={s} />)}
        </div>
      )}

      {/* Links */}
      {section.links && section.links.length > 0 && (
        <div className="flex items-center gap-6 mt-6">
          {section.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-sm text-accent hover:text-foreground transition-colors border-b border-accent/40 hover:border-foreground pb-0.5"
            >
              {link.label} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

// ── Section header with rule line
function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="font-body text-xs tracking-[0.25em] uppercase text-accent shrink-0">{label}</p>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  useScrollReveal();

  const index = caseStudies.findIndex((cs) => cs.id === id);
  const cs = caseStudies[index];
  const prev = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  if (!cs) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-muted-foreground mb-4">Case study not found.</p>
          <Link to="/" className="font-body text-sm text-accent underline">← Back to portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Back nav */}
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-6">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Case Studies
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 pb-16 border-b border-border">
          <div className="w-full h-px bg-border mb-8" />

          {/* Tags — dot-separated like reference */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-6">
            {cs.tags.map((tag) => (
              <span key={tag} className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground bg-muted px-3 py-1 border border-border">
                {tag}
              </span>
            ))}
          </div>

          {/* Number + Title */}
          <div className="flex items-start gap-6 md:gap-10">
            <span
              className="font-display text-muted-foreground/20 leading-none select-none hidden sm:block shrink-0"
              style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 0.85, marginTop: "0.05em" }}
            >
              {cs.number}
            </span>
            <div>
              <h1
                className="font-display text-foreground mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
              >
                {cs.title}
              </h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{cs.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-surface-deep text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {cs.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-primary-foreground leading-none mb-2" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    {stat.value}
                    {stat.unit && <sup className="font-body text-xs opacity-70 ml-0.5">{stat.unit}</sup>}
                  </div>
                  <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/50 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-16 space-y-16">


          {/* The Problem — split layout: text left + table right (if resultsTable present) */}
          <section>
            <SectionHeader label="The Problem" />
            {cs.resultsTable ? (
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="font-body text-base text-foreground leading-relaxed">{cs.challenge}</p>
                  {cs.challengeHighlight && (
                    <p className="font-body text-base text-foreground leading-relaxed">{cs.challengeHighlight}</p>
                  )}
                </div>
                <div>
                  <ResultsTable table={cs.resultsTable} />
                  {cs.campaignInsight && (
                    <div className="border-l-2 border-gold bg-gold-light/30 px-5 py-4 mt-4">
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {cs.campaignInsight}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-body text-base text-foreground leading-relaxed">{cs.challenge}</p>
                {cs.challengeHighlight && (
                  <p className="font-body text-base text-foreground leading-relaxed">{cs.challengeHighlight}</p>
                )}
              </div>
            )}
          </section>

          {/* My Role — only if no resultsTable already absorbed the challenge section */}
          {!cs.resultsTable && (
            <section>
              <SectionHeader label="My Role" />
              <p className="font-body text-base text-foreground leading-relaxed">{cs.myRole}</p>
            </section>
          )}
          {cs.resultsTable && (
            <section>
              <SectionHeader label="My Role" />
              <p className="font-body text-base text-foreground leading-relaxed">{cs.myRole}</p>
            </section>
          )}

          {/* Insight */}
          {cs.insight && (
            <section>
              <SectionHeader label={cs.insightTitle || "The Insight"} />
              <p className="font-body text-base text-foreground leading-relaxed">
                {cs.insight}
                {cs.insightHighlight && <> <strong>{cs.insightHighlight}</strong></>}
              </p>
            </section>
          )}

          {/* Process (steps or twoCol) */}
          {cs.processSections && (cs.processSections.steps || cs.processSections.twoCol) && (
            <section>
              <SectionHeader label={cs.processSections.title || "Process"} />
              {cs.processSections.steps && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
                  {cs.processSections.steps.map((step, i) => (
                    <div key={i} className={`p-6 ${i < cs.processSections!.steps!.length - 1 ? "border-b sm:border-b-0 sm:border-r border-border" : ""}`}>
                      <p className="font-body text-xs text-muted-foreground mb-3 tracking-wide">{step.step}</p>
                      <p className="font-body text-sm text-foreground leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {cs.processSections.twoCol && (
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">{cs.processSections.twoCol.leftTitle}</p>
                    <p className="font-body text-base text-foreground leading-relaxed">{cs.processSections.twoCol.leftBody}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">{cs.processSections.twoCol.rightTitle}</p>
                    <p className="font-body text-base text-foreground leading-relaxed">{cs.processSections.twoCol.rightBody}</p>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Key Decisions */}
          {cs.keyDecisions && (
            <section>
              <SectionHeader label={cs.keyDecisions.sectionTitle} />
              <div className="grid md:grid-cols-2 gap-12">
                {cs.keyDecisions.items.map((item, i) => (
                  <div key={i}>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">{item.title}</p>
                    <p className="font-body text-base text-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Callout quote */}
          {cs.callout && (
            <div className="border-l-2 border-gold bg-gold-light/30 px-6 py-5">
              <p className="font-body text-base text-foreground leading-relaxed">
                <strong>{cs.callout.bold}</strong>
                {cs.callout.rest}
              </p>
              {cs.callout.linkLabel && cs.callout.linkHref && (
                <a
                  href={cs.callout.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-xs tracking-[0.15em] uppercase text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-colors duration-200 mt-4"
                >
                  {cs.callout.linkLabel} <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </div>
          )}

          {/* Results table — standalone (only if no resultsTable used in split layout above) */}
          {cs.resultsTable && !cs.processSections?.title && (
            <section>
              <SectionHeader label="Results" />
              <ResultsTable table={cs.resultsTable} />
            </section>
          )}

          {/* Campaign insight — standalone (only when not inlined in split layout) */}
          {cs.campaignInsight && !cs.resultsTable && (
            <div className="border-l-2 border-gold bg-gold-light/30 px-6 py-5">
              <p className="font-body text-base text-foreground leading-relaxed">
                <strong>Campaign insight:</strong> {cs.campaignInsight}
              </p>
            </div>
          )}

          {/* What I Learned */}
          <section>
            <SectionHeader label="What's Next" />
            <p className="font-body text-base text-foreground leading-relaxed">
              {cs.whatILearned}
              {cs.whatILearnedHighlight && <> <strong>{cs.whatILearnedHighlight}</strong></>}
            </p>
          </section>

          {/* Work Samples (legacy top-level) */}
          {cs.workSamples && cs.workSamples.length > 0 && (
            <section>
              <div className="flex items-center gap-4 mb-8">
                <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground shrink-0">
                  {cs.workSamplesLabel || "Work Samples"}
                </p>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className={`grid gap-6 ${cs.workSamples.length <= 2 ? "grid-cols-2" : "grid-cols-2"}`}>
                {cs.workSamples.map((sample, i) => (
                  <WorkSampleTile key={i} sample={sample} />
                ))}
              </div>
              {cs.viewExampleLabel && (
                <div className="mt-8">
                  <a
                    href={cs.viewExampleHref || "#"}
                    className="inline-flex items-center gap-2 font-body text-sm text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-colors duration-200"
                  >
                    {cs.viewExampleLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>
          )}

          {/* Sub-sections (Fox-13 reels, Myth vs Fact, National KP grid, training program tiles, etc.) */}
          {cs.subSections?.map((sub, i) => (
            <SubSectionBlock key={i} section={sub} />
          ))}
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-10 flex items-center justify-between gap-6">
            {prev ? (
              <Link to={`/case-studies/${prev.id}`} className="group flex items-center gap-3 text-left">
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Previous</p>
                  <p className="font-body text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/case-studies/${next.id}`} className="group flex items-center gap-3 text-right ml-auto">
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Next</p>
                  <p className="font-body text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1">{next.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
