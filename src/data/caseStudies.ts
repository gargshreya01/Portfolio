export interface StatItem {
  value: string;
  unit?: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  description: string;
}

export interface KeyDecision {
  title: string;
  body: string;
}

export interface ResultRow {
  channel: string;
  [key: string]: string | number;
}

export interface ResultsTable {
  columns: string[];
  rows: (string | number)[][];
}

export interface WorkSample {
  label: string;
  caption?: string;
  imagePath?: string;
  imageKey?: string;
  viewLabel?: string;
  viewHref?: string;
  aspect?: "portrait" | "landscape";
  objectFit?: "cover" | "contain";
}

export interface SubSection {
  label: string;           // small-caps label shown above section
  text?: string;           // left-column body text
  textHighlights?: { bold: string; rest: string }[];  // inline bold+rest fragments
  twoCol?: { leftTitle: string; leftBody: string; rightTitle: string; rightBody: string };
  callout?: string;        // gold callout box text
  calloutBold?: string;    // bold prefix for callout
  workSamples?: WorkSample[];
  resultsTable?: ResultsTable;
  links?: { label: string; href: string }[];
}

export interface CaseStudyData {
  id: string;
  number: string;
  tags: string[];
  title: string;
  subtitle: string;
  stats: StatItem[];
  challenge: string;
  challengeHighlight?: string;
  myRole: string;
  insightTitle?: string;
  insight?: string;
  insightHighlight?: string;
  processSections?: {
    title?: string;
    steps?: ProcessStep[];
    twoCol?: { leftTitle: string; leftBody: string; rightTitle: string; rightBody: string };
  };
  keyDecisions?: {
    sectionTitle: string;
    items: KeyDecision[];
  };
  callout?: {
    bold: string;
    rest: string;
    linkLabel?: string;
    linkHref?: string;
  };
  resultsTable?: ResultsTable;
  campaignInsight?: string;
  /** Rich sub-sections rendered after the main body content */
  subSections?: SubSection[];
  whatILearned: string;
  whatILearnedHighlight?: string;
  workSamplesLabel?: string;
  workSamples?: WorkSample[];
  viewExampleLabel?: string;
  viewExampleHref?: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "fox-13-physician-reels",
    number: "01",
    tags: ["Physician Content", "GEN-Z STRATEGY", "NATIONAL SCALE"],
    title: "Making Health Content People Actually Watch",
    subtitle: "Kaiser Permanente Washington (@kp_washington) + National @kaiserpermanente · Fox-13 Healthy Living · 2024–Present",
    stats: [
      { value: "#1", label: "TOP FORMAT BY ENGAGEMENT ON KPWA CHANNELS" },
      { value: "80K", unit: "+", label: "TOTAL VIEWS ON PHYSICIAN CONTENT ACROSS INSTAGRAM & FACEBOOK" },
      { value: "17K", unit: "+", label: "SAVES ON PHYSICIAN CONTENT" },
    ],
    challenge:
      "Kaiser Permanente Washington had an active broadcast partnership with Fox-13, featuring physician experts appearing monthly on the Healthy Living segment. The content was genuinely valuable - credentialed doctors explaining practical health topics people search for daily. But it lived entirely on broadcast TV. Our Instagram is in growth mode, Reels are the platform's primary reach driver, and physician voices are exactly what Gen-Z target audience responds to.",
    challengeHighlight: "The broadcast partnership was producing content that had no social life. Here I saw a clear need to build a system to actively distribute these assets to our social community.",
    myRole:
      "I identified the gap and built the entire pipeline from scratch. That meant negotiating directly with Fox-13 to extend the partnership beyond broadcast: we agreed to create reels on the same topics aired on TV, which would then be posted on KPWA's social channels. Once that agreement was in place, I managed every step: coordinating with physicians, adapting raw footage for vertical formats, and publishing.",
    insightTitle: "THE INSIGHT THAT DROVE THE STRATEGY",
    insight:
      "Before building the workflow, I needed to understand why physician content works on social when most institutional health content doesn't. The answer came from listening data: our community wasn't searching for \"Kaiser Permanente health tips\", they were searching for specific, practical answers.",
    insightHighlight: "A doctor giving you 60 seconds on what exercise bites actually are, is a fundamentally different content experience than a brand post about fitness. It feels like a conversation. And that distinction drove the creative and editorial decisions in this campaign.",
    processSections: {
      title: "KEY DECISIONS",
      twoCol: {
        leftTitle: "Step 1 — Negotiate the partnership extension",
        leftBody:
          "The broadcast relationship existed, but social rights did not. I worked with Fox-13 to create an arrangement where physician segments on air would also produce a parallel reel; same topic, same physician, built for social from the ground up rather than clipped from TV. IMHO, that distinction matters. Content designed for social performs differently than content repurposed from broadcast.",
        rightTitle: "Step 2 — Adapt for platform, not just format",
        rightBody:
          "Vertical crop and caption are the obvious edits. The harder work is the hook. Broadcast opens with context and builds to the point. Social has to open with the point or a question that makes someone stop scrolling. I rewrote the opening of each reel entirely, leading with the answer to the question, \"What I would know after watching this video?\", rather than the clinical framing. That rewrite is where most of the engagement difference lives.",
      },
    },
    resultsTable: {
      columns: ["Avg Eng/post"],
      rows: [],
    },
    campaignInsight:
      "8.6% average engagement against a 5.02% channel baseline for content featuring our people.",
    subSections: [
      {
        label: "Fox-13 Physician Reels",
        workSamples: [
          { label: "Dr. Itano · Healthy Living reel", caption: "Fox-13 partnership", aspect: "portrait", imageKey: "dr-itano-healthy-living-reel", viewHref: "https://www.instagram.com/p/DOel7XzicbH/" },
          { label: "Dr. Egwuatu · health tips reel", caption: "Fox-13 partnership", aspect: "portrait", imageKey: "dr-egwuatu-health-tips-reel", viewHref: "https://www.facebook.com/reel/24424588787243509" },
          { label: "Fox-13 segment · seasonal health", caption: "Broadcast to social", aspect: "portrait", imageKey: "fox-13-segment-seasonal-health", viewHref: "https://www.instagram.com/p/DSql0CRjXEA/" },
        ],
        links: [
          { label: "@kp_washington", href: "https://instagram.com/kp_washington" },
        ],
      },
      {
        label: "Myth vs. Fact Video Series — Winter Health & Flu Immunity",
        text: "Alongside the Fox-13 program, I developed a myth vs. fact physician video series for the region's Gen-Z content strategy. Physician experts debunk common health myths directly to camera, a format that works because younger audiences are skeptical of corporate health messaging but responsive to credentialed voices who speak plainly. Two videos published to date; the format is ongoing.",
        workSamples: [
          { label: "Myth vs. Fact flu reel", caption: "Flu myths debunked", aspect: "portrait", imageKey: "myth-vs-fact-flu-reel", viewHref: "https://www.instagram.com/p/DRNSPbuCdHx/" },
          { label: "Myth vs. Fact immunity reel", caption: "Winter immunity", aspect: "portrait", imageKey: "myth-vs-fact-immunity-reel", viewHref: "https://www.instagram.com/p/DU_flu9DGpS/" },
        ],
      },
      {
        label: "National @kaiserpermanente — Regional Work at National Scale",
        text: "Beyond Kaiser Permanente Washington's regional channels, I contribute content to the national @kaiserpermanente Instagram (65K+ followers). The national channel runs a sophisticated multi-format content strategy: health tip carousels (\"6 Common Running Injuries,\" \"5 Ways to Make Coffee Healthier\"), physician quote cards with named doctors and clinical insights, data infographics anchored in HEDIS benchmarks, myth-busting carousels (\"Get the facts about the flu vaccine\"), and Gen-Z lifestyle content on digital detox, sleep, stress, and mental health. A couple of years into my regional role, I expanded my scope to contribute to the national channel as a chance to take the same content instincts and apply them at a larger scale.",
      },
      {
        label: "National @kaiserpermanente — Content Snapshot",
        workSamples: [
          { label: "Health tips carousel", caption: "e.g. Running injuries", aspect: "landscape", imageKey: "national-kp-health-tips-carousel", viewHref: "https://www.instagram.com/p/DU02CgBknn0/?img_index=1" },
          { label: "Physician quote card", caption: "Named doctor + insight", aspect: "landscape", imageKey: "national-kp-physician-quote-card", viewHref: "https://www.instagram.com/p/DTlB1WbEzY4/" },
          { label: "Data infographic", caption: "HEDIS benchmarks", aspect: "landscape", imageKey: "national-kp-data-infographic", viewHref: "https://www.instagram.com/p/DVZeWfpE8cc/" },
          { label: "Gen-Z lifestyle reel", caption: "Sleep, stress, digital detox", aspect: "landscape", imageKey: "national-kp-genz-lifestyle-reel", viewHref: "https://www.instagram.com/p/DV1OjOEkpD3/?img_index=1" },
          { label: "Myth-busting carousel", caption: "Flu / vaccine facts", aspect: "landscape", imageKey: "national-kp-myth-busting-carousel", viewHref: "https://www.instagram.com/p/DVGsxyKjqE3/?img_index=1" },
          { label: "Member story", caption: "Community voice", aspect: "landscape", imageKey: "national-kp-member-story", viewHref: "https://www.instagram.com/p/DU3W4FPEl9c/?img_index=1" },
          { label: "National contribution", caption: "Published contribution", aspect: "landscape", imageKey: "national-kp-national-contribution", viewHref: "https://www.instagram.com/p/DV_dFPBklO8/" },
        ],
        links: [
          { label: "@kp_washington", href: "https://instagram.com/kp_washington" },
          { label: "@kaiserpermanente", href: "https://instagram.com/kaiserpermanente" },
        ],
      },
    ],
    whatILearned:
      "The next frontier for this program is moving beyond reactive health tips into proactive community listening. Right now I'm mapping physician expertise to seasonal health moments. What I want to build is a feedback loop where community questions - from comments, from reviews, from listening data, directly commission the next video. The community tells us what they're confused or scared about. And our physicians answer it.",
    whatILearnedHighlight: "",
  },
  {
    id: "executive-linkedin",
    number: "02",
    tags: ["Executive Communications", "Thought Leadership", "LinkedIn Strategy"],
    title: "Building and Growing Executive LinkedIn Presence",
    subtitle: "Kaiser Permanente Washington · Angela Dowling, Dr. Linda Tolbert, Cynthia Dold, Dr. Dorian Reid · 2022–Present · Role: Sole strategist, writer, content manager",
    stats: [
      { value: "184", unit: "%", label: "DR. TOLBERT FOLLOWER GROWTH, BUILT FROM GROUND UP" },
      { value: "16", label: "LEADERS COACHED IN 1:1 LINKEDIN STRATEGY SESSIONS" },
      { value: "4–5", unit: "%", label: "AVG ENGAGEMENT RATE PER POST ON BOTH REGIONAL PRESIDENTS' LINKEDIN" },
    ],
    challenge:
      "Kaiser Permanente Washington's senior leaders had LinkedIn accounts they rarely used. For a regional health system trying to build trust with members, attract B2B target audiences (brokers and producers), and show up as a credible community voice, that's a real gap.",
    challengeHighlight:
      "The issue wasn't that the leaders had a lack of awareness or interest. Most of them didn't know where to start, what to say, or how to make it feel like them rather than a press release with their name on it.",
    myRole:
      "I've managed LinkedIn for four regional senior leaders across 4 years. Angela Dowling and Dr. Linda Tolbert came first. Angela needed strategic repositioning for a leader already visible in the market, while Dr. Tolbert's account started at zero and needed to be built entirely from scratch. When Angela and Dr. Tolbert moved on from their roles, I transitioned that same program to their successors: Cynthia Dold as the current Regional President, and Dr. Dorian Reid as the Interim Washington Permanente Medical Group's Executive Medical Director. For each of them, I'm the sole strategist, writer, and content manager.",
    processSections: {
      title: "The Process — How I Build Executive Voice",
      twoCol: {
        leftTitle: "Step 1: The Interview",
        leftBody:
          "I begin with a direct conversation, and not a questionnaire, about why the leader took this role, what they believe about health care in Washington, and what they want people to feel when reading their message. I'm listening for two or three phrases that are unmistakably theirs: language a communications team would never write. That's what their LinkedIn voice and posts get built around. The rest carries the institutional context without burying the person.",
        rightTitle: "Step 2: Platform-Native Translation",
        rightBody:
          'LinkedIn has a specific grammar. First-person opening, no jargon in the first line. And the most important thing stated before the "see more" fold. I translate each leader\'s thoughts into this grammar while keeping it authentic to their voice. Dr. Tolbert, a physician, needed clinical precision in accessible language. Cynthia Dold, a strategic leader, needs relatability in her posts to connect with the community.',
      },
    },
    callout: {
      bold: "The Cynthia Dold introduction post (2025):",
      rest: " When Cynthia joined as Regional President, her first post had to introduce her to patients, the health care community, and prospective employees simultaneously, in fewer than 300 words. I interviewed her, identified the story that was unmistakably hers, and built the post around it. It earned 300+ likes, significantly above LinkedIn's 10–50 like benchmark for institutional leader posts.",
    },
    resultsTable: {
      columns: ["Metric", "Result"],
      rows: [
        ["Avg. executive impressions growth YoY", "34%"],
      ],
    },
    whatILearned:
      "The most important insight from managing four executive accounts is that voice is not transferable. It has to be constructed per person.",
    whatILearnedHighlight:
      "Visual storytelling is an area where I see the scope to build some of the most engaging thought leadership content. When people see a leader with a life outside the professional realm, it brings out the human-side of them. That is what grounds the connection and forges a deeper commitment to follow their story on socials.",
    workSamplesLabel: "Work Samples — Executive LinkedIn",
    workSamples: [
      { label: "Cynthia Dold", caption: "Regional President · Kaiser Permanente Washington", imageKey: "cynthia-dold-linkedin", viewHref: "https://www.linkedin.com/in/cynthia-dold/", objectFit: "contain" },
      { label: "Dr. Dorian Reid", caption: "Executive Medical Director · WPMG", imageKey: "dr-dorian-reid-linkedin", viewHref: "https://www.linkedin.com/in/dorianreid/", objectFit: "contain" },
      { label: "Angela Dowling", caption: "Former Regional President · Kaiser Permanente Washington", imageKey: "angela-dowling-linkedin", viewHref: "https://www.linkedin.com/in/angela-dowling-7b8b0a1a/", objectFit: "contain" },
      { label: "Dr. Linda Tolbert", caption: "Former Executive Medical Director · WPMG", imageKey: "dr-linda-tolbert-linkedin", viewHref: "https://www.linkedin.com/in/linda-tolbert-md/", objectFit: "contain" },
    ],
    subSections: [
      {
        label: "The Training Program — 16 Leaders Coached",
        text: "Managing four executive accounts also revealed a broader pattern: there were dozens of other regional leaders who wanted to be more visible on LinkedIn, but had no framework for it. I took the lead in designing one.",
        twoCol: {
          leftTitle: "Group Presentations",
          leftBody: "I delivered two group presentations to Angela Dowling's and Dr. Tolbert's full leadership teams of 30+ executives. These sessions shifted the mental model from \"LinkedIn is a job search tool\" to \"LinkedIn is where I shape how my community sees and engages with the market leadership.\" The sessions ended with leaders drafting a first post in the room and a CTA to schedule 1:1 coaching sessions with me for further LinkedIn support.",
          rightTitle: "1:1 Coaching Sessions",
          rightBody: "Individual sessions with 16 leaders. Four deliverables per session: a personal brand positioning statement, an editorial framework for posting, and a first draft post ready for use before we ended the call. The barrier to executive social engagement is almost never time, it's confidence. People find their voice more easily when they're not performing in front of peers. Several leaders who'd been inactive for years started posting and engaging consistently within weeks.",
        },
        calloutBold: "From the 2024 annual performance review by manager:",
        callout: " \"Shreya designed and led LinkedIn training sessions for leaders and executives. These sessions became some of her most significant accomplishments, motivating leaders to refocus on LinkedIn, actively engage their audiences, and share their stories effectively.\"",
      },
      {
        label: "Training Program — Session Photos",
        workSamples: [
          { label: "Presenting to leaders", caption: "Picture from the training session", imageKey: "shreya-presenting-linkedin-training", objectFit: "contain" },
          { label: "Training presentation slide", caption: "LinkedIn cheat sheet — slide from the group training session", imageKey: "linkedin-training-cheat-sheet", objectFit: "contain" },
          { label: "Post from a leader post-coaching", caption: "Post from a leader post-coaching", imageKey: "carolyn-barton-linkedin-post", aspect: "portrait", viewHref: "https://www.linkedin.com/in/carolynbarton/", viewLabel: "View on LinkedIn" },
        ],
      },
    ],
  },
  {
    id: "linkedin-training",
    number: "03",
    tags: ["Leadership Training", "Content Strategy", "Organizational Capability"],
    title: "LinkedIn as a Leadership Tool: Designing a Training Program That Changed How Executives Communicate",
    subtitle: "Kaiser Permanente Washington · 2023–2024 · Role: Program designer, facilitator, 1:1 coach",
    stats: [
      { value: "16", label: "Individual leaders coached in 1:1 sessions" },
      { value: "2", label: "Leadership team presentations delivered" },
      { value: "4", label: "Executives with active managed presence post-program" },
      { value: "★ 2024", label: "Named most significant accomplishment in annual review" },
    ],
    challenge:
      "KPWA's physician and administrative leaders understood that LinkedIn mattered. But understanding that something matters and knowing what to do about it are different things. Most leaders had accounts they opened years ago and posted on sporadically. A few had never posted at all.",
    challengeHighlight:
      "The gap wasn't motivation — it was a missing framework. Nobody had told them: here is your audience, here is what they want from you, here is how to develop a post without it taking an hour.",
    myRole:
      "I designed and delivered the full program: two group presentations to leadership teams, and 1:1 coaching sessions with 10+ individual leaders. I created all materials, facilitated all sessions, and provided follow-up support.",
    processSections: {
      title: "Program Design — Two Formats",
      twoCol: {
        leftTitle: "Format 1 — Group Presentations",
        leftBody:
          "I designed and delivered two presentations to Angela Dowling's and Dr. Tolbert's leadership teams. These sessions covered LinkedIn's role in a health system's communications strategy, what professional audiences expect from executive voices, and a live demonstration of developing a post from a simple professional observation. The goal: shift the mental model from \"LinkedIn is a job search tool\" to \"LinkedIn is where I shape how my community sees KPWA leadership.\" Both sessions concluded with leaders drafting a first post in the room.",
        rightTitle: "Format 2 — 1:1 Coaching Sessions",
        rightBody:
          "I conducted individual sessions with 16 leaders, each designed around four deliverables: a personal brand positioning statement, an editorial framework for what to post about and how often, and a first draft post ready for use by end of session. Leaders left with a reference document, not just advice they'd forget. Several began posting and engaging consistently within weeks. The 1:1 format worked far better than the group session for one reason: leaders could find their voice without being observed by peers — which matters enormously at the executive level.",
      },
    },
    callout: {
      bold: "From the 2024 annual performance review by manager:",
      rest: ' "Shreya designed and led LinkedIn training sessions for leaders and executives. These sessions became some of her most significant accomplishments, motivating leaders to refocus on LinkedIn, actively engage their audiences, and share their stories effectively."',
    },
    whatILearned:
      "The most important thing I learned: the barrier to executive social engagement is almost never time — it's confidence.",
    whatILearnedHighlight:
      "Once leaders understood that their professional insight is genuinely valuable to their audience, and that a post doesn't need to be polished to be effective, the resistance dissolved. The session structure I developed — ending with a published or near-published post — makes this concrete rather than theoretical. Leaders leave having done the thing, not just having heard about it.",
    workSamplesLabel: "Work Samples — Training Program",
    workSamples: [
      { label: "Presenting to leaders", caption: "Picture from the training session", imageKey: "shreya-presenting-linkedin-training", objectFit: "contain" },
      { label: "Training presentation slide", caption: "LinkedIn cheat sheet — slide from the group training session", imageKey: "linkedin-training-cheat-sheet", objectFit: "contain" },
      { label: "Post from a leader post-coaching", caption: "Post from a leader post-coaching", imageKey: "carolyn-barton-linkedin-post", aspect: "portrait", viewHref: "https://www.linkedin.com/in/carolynbarton/", viewLabel: "View on LinkedIn" },
    ],
  },
  {
    id: "physician-community-campaigns",
    number: "04",
    tags: ["Physician Content", "Live Event Coverage", "Gen Z Strategy", "Multi-Campaign"],
    title: "Physician Voices in Community Moments: Two Campaigns, One Repeatable Strategy",
    subtitle: "Seattle to Portland Bicycle Classic 2024 + Kaiser Permanente Seafair Torchlight Run 2025 · with Dr. Scott Itano · Role: Sole content strategist, producer, live coverage, publisher",
    stats: [
      { value: "194", unit: "%", label: "YoY engagement growth — Seafair Instagram 2025" },
      { value: "42,173", label: "Instagram views — Seafair 2025 (+139% YoY)" },
      { value: "14,785", label: "Reach — STP 2024 across 36 posts and stories" },
      { value: "Top 5", label: "KP national LinkedIn posts — Seafair 2025" },
    ],
    challenge:
      "These two campaigns look different on the surface — a 206-mile bike ride and a community 5K run — but they prove the same strategic point:",
    challengeHighlight:
      "When a physician speaks directly to a community moment, the content stops feeling like health messaging and starts feeling like a conversation. That shift drives engagement, builds trust, and makes a health system's social presence feel worth following. Both campaigns were built around this insight. Both significantly outperformed institutional content benchmarks.",
    myRole:
      "I managed the entire content campaign solo across three phases: a multi-week pre-event calendar built around physician training tips with Dr. Itano and other contributors; live day-of coverage across Instagram, Facebook, and X simultaneously — capturing real rider testimonials at the Renton rest stop and publishing in real time; and post-event recovery content connecting the sponsorship back to KPWA's health mission. I also coordinated collaborative posts directly with the Cascade Bicycle Club team. 18 posts and 18 stories. 14,785 total reach. Named KPWA's top-performing social campaign of 2024.",
    processSections: {
      title: "Campaign Breakdown",
      twoCol: {
        leftTitle: "Seattle to Portland Bicycle Classic 2024",
        leftBody:
          "The Kaiser Permanente STP — co-sponsored with Alaska Airlines, produced by Cascade Bicycle Club — is a 206-mile, two-day ride with nearly 5,000 completers. KPWA operated an official rest stop at mile 20 in Renton, where thousands of riders stopped for pre-packaged treats, smoothies, and giveaways sponsored by KP.",
        rightTitle: "Seafair Torchlight Run 2025 — with Dr. Scott Itano",
        rightBody:
          "For the 2025 Seafair 5K, I developed a physician-led content series with Dr. Itano built around practical, creator-style training tips designed to reach younger Instagram audiences. The creative brief was deliberate: short, approachable, expert-backed content in a format Gen Z consumes natively — not produced brand messaging.",
      },
    },
    resultsTable: {
      columns: ["Campaign / Channel", "Posts", "Reach", "Views", "Engagements", "YoY Change"],
      rows: [
        ["STP 2024 — Facebook / Instagram / X", 36, "14,785", "—", 411, "—"],
        ["Seafair 2025 — Instagram", 11, "16,836", "42,173", "1,074", "+194% engagement · +139% views"],
        ["Seafair 2025 — Facebook", 6, "8,252", "10,914", 171, "—"],
        ["Seafair 2025 — LinkedIn", 1, "4,056", "19,060", 358, "Top 5 KP national posts 2025"],
      ],
    },
    whatILearned:
      "The same physician-led strategy, adapted for a completely different platform and audience, performed at the top of KP's national content.",
    whatILearnedHighlight:
      "The Seafair LinkedIn post reached 19,060 views and 358 engagements — ranking among the top 5 posts on the KP national LinkedIn page in 2025. Community moment + physician voice + platform-native format = a repeatable formula that works across channels.",
    workSamplesLabel: "Work Samples — STP 2024 Live Coverage",
    workSamples: [
      { label: "STP pre-event physician post", caption: "STP pre-event physician post" },
      { label: "Renton rest stop live coverage", caption: "Renton rest stop live coverage" },
      { label: "Rider testimonial content", caption: "Rider testimonial content" },
      { label: "Day 2 live coverage post", caption: "Day 2 live coverage post" },
      { label: "Post-event recap reel", caption: "Post-event recap reel" },
      { label: "Cascade Bicycle collab post", caption: "Cascade Bicycle collab post" },
    ],
  },
  {
    id: "regional-social-growth",
    number: "05",
    tags: ["Social Growth", "Editorial Operations", "Multi-Platform"],
    title: "Building a Regional Social Presence from the Ground Up",
    subtitle: "Kaiser Permanente WA — Multi-Platform Channel Management · 2022–Present · Role: Sole channel manager",
    stats: [
      { value: "5,000", unit: "+", label: "Net new audience gain in WA region — one year" },
      { value: "+136", unit: "%", label: "Instagram views year-over-year (2024–2025)" },
      { value: "+454", unit: "%", label: "Facebook views year-over-year (2024–2025)" },
      { value: "5", label: "Platforms maintained with consistent publishing cadence" },
    ],
    challenge:
      "Kaiser Permanente's WA region needed a consistent, editorial-quality social presence across Instagram, Facebook, X, and Threads — while simultaneously contributing content to the national @kaiserpermanente channel. The challenge was managing five platforms with distinct audiences, approval workflows, contributor coordination, and permissions, all while maintaining publishing cadence.",
    myRole:
      "I established a robust editorial operations system: built content calendars aligned to organizational moments, designed contributor coordination workflows, streamlined permission management, and created approval routing to ensure quality at speed. I developed platform-specific content strategies that adapted a single narrative across channels without losing authenticity.",
    whatILearned:
      "The biggest lever in multi-platform management isn't content volume — it's system design.",
    whatILearnedHighlight:
      "When the workflow is right, you can maintain quality across five platforms without proportionally scaling headcount. The content calendar isn't a publishing schedule — it's an editorial operating system that coordinates contributors, approvals, and platform timing.",
    workSamplesLabel: "Work Samples — Channel Performance",
    workSamples: [
      { label: "Instagram channel growth dashboard", caption: "YoY comparison 2024–2025" },
      { label: "Facebook channel growth dashboard", caption: "YoY comparison 2024–2025" },
      { label: "Multi-platform content calendar", caption: "Editorial operations view" },
    ],
  },
  {
    id: "trunks-brand-build",
    number: "06",
    tags: ["Brand Building", "Content Strategy", "PR & Influencer"],
    title: "Building a Luxury Brand's Content Pipeline from Zero",
    subtitle: "Trunks Company — First Marketer, Full Content Ownership · Role: Sole marketer",
    stats: [
      { value: "42", unit: "%", label: "Increase in global brand awareness through owned and earned channels" },
      { value: "0→Full", label: "Content pipeline built: website, newsletter, social, PR" },
      { value: "Intl", label: "International press coverage secured through media outreach" },
      { value: "End-to-end", label: "Brand activations and influencer programs executed" },
    ],
    challenge:
      "As the first marketer at a luxury trunks startup, there was no content infrastructure, no brand voice, and no audience. Everything needed to be built from scratch — website, newsletter, brand narrative, influencer program, and press outreach.",
    myRole:
      "I built the entire owned content ecosystem: launched the brand website, established a regular email newsletter and internal digest, developed editorial content including media stories and product features, and executed brand activations, pop-up events, and creator/influencer campaigns. I coordinated media outreach and cross-platform campaign launches, supporting founders with messaging and media preparation throughout.",
    whatILearned:
      "Building from zero is clarifying. When there's no existing audience to satisfy and no legacy content to maintain, every decision is a first-principles choice.",
    whatILearnedHighlight:
      "The most important thing I built wasn't any single asset — it was the editorial framework that made all future content coherent. A brand voice document that every contractor, founder, and collaborator could reference. Without that infrastructure, you're producing content. With it, you're building a brand.",
    workSamplesLabel: "Work Samples — Trunks Brand",
    workSamples: [
      { label: "Brand website launch", caption: "Homepage or key landing page" },
      { label: "Newsletter example", caption: "Email or internal digest issue" },
      { label: "Brand activation / pop-up", caption: "Event or influencer campaign" },
    ],
  },
];
