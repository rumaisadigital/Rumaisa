import React, { useState, useEffect } from 'react';

// Types
interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  icon: string;
  tag: string;
  summary: string;
  deliverables: string[];
  metrics: string[];
  tools: string[];
}

interface ProjectDetail {
  id: string;
  caseNumber: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
  metricHighlight: string;
  clientContext: string;
  problem: string;
  solution: string[];
  results: { label: string; value: string }[];
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'seo',
    number: '01',
    title: 'SEO — Search Engine Optimization',
    icon: 'troubleshoot',
    tag: 'Visibility • Traffic',
    summary: 'Helps improve website ranking on search engines like Google, increase organic traffic, and boost online visibility to reach the right audience.',
    deliverables: [
      'Comprehensive Technical Website Audit',
      'High-Intent Keyword Research & Mapping',
      'On-Page Meta & Schema Architecture',
      'Authority Backlink Building & Outreach',
      'Core Web Vitals & Mobile Optimization'
    ],
    metrics: ['Organic Impressions & Clicks', 'Keyword Ranking Positions', 'Organic Conversion Rate'],
    tools: ['Google Search Console', 'Ahrefs / SEMrush', 'Screaming Frog', 'Google Analytics 4']
  },
  {
    id: 'aeo',
    number: '02',
    title: 'AEO — Answer Engine Optimization',
    icon: 'psychology',
    tag: 'AI Search • Perplexity',
    summary: 'Optimizes content for AI search engines and voice search to help businesses appear in featured answers and zero-click search results.',
    deliverables: [
      'AI Search Engine Readiness (ChatGPT, Perplexity, Gemini, Claude)',
      'Entity-Based Knowledge Graph Optimization',
      'FAQ & Q&A Conversational Schema Modeling',
      'Direct Answer Snippet Structuring',
      'Voice Search Query Intent Alignment'
    ],
    metrics: ['Zero-Click Answer Share', 'AI Engine Citations', 'Brand Entity Visibility'],
    tools: ['Schema Markup Validator', 'OpenAI SearchGPT Benchmarks', 'Perplexity Engine']
  },
  {
    id: 'sem',
    number: '03',
    title: 'SEM — Search Engine Marketing',
    icon: 'ads_click',
    tag: 'Google Ads • Paid PPC',
    summary: 'Focuses on paid advertising strategies to increase website traffic, generate quality leads, and improve conversions quickly.',
    deliverables: [
      'Google Ads Search & Performance Max Setup',
      'Negative Keyword Filtering & Quality Score Tuning',
      'High-Converting Ad Copy & Extension Variations',
      'Conversion Tracking & Attribution Modeling',
      'Bid Strategy Optimization for Maximum ROAS'
    ],
    metrics: ['Cost Per Acquisition (CPA)', 'Return on Ad Spend (ROAS)', 'Conversion Rate'],
    tools: ['Google Ads Manager', 'Google Tag Manager', 'Looker Studio']
  },
  {
    id: 'smm',
    number: '04',
    title: 'SMM — Social Media Marketing',
    icon: 'share_reviews',
    tag: 'Meta • LinkedIn • Engagement',
    summary: 'Promotes businesses on social media platforms by creating engaging content and running targeted campaigns to grow brand awareness and reach.',
    deliverables: [
      'Visual Content Calendars & Creative Direction',
      'Meta (Instagram/Facebook) Ads Funnel Management',
      'Reels & Video Concept Scripting',
      'Community Engagement & Audience Building',
      'Influencer Collaboration & Brand Partnerships'
    ],
    metrics: ['Follower Growth Rate', 'Engagement & Saves Rate', 'Paid Lead Cost (CPL)'],
    tools: ['Meta Ads Manager', 'Canva Pro / Adobe Suite', 'CapCut', 'Notion Scheduler']
  },
  {
    id: 'content',
    number: '05',
    title: 'Content Marketing',
    icon: 'history_edu',
    tag: 'Editorial • Copy • Funnels',
    summary: 'Involves creating valuable, SEO-friendly content to attract, engage, and convert potential customers effectively.',
    deliverables: [
      'Topical Authority & Content Cluster Roadmaps',
      'SEO-Optimized Long-Form Articles & Case Studies',
      'High-Conversion Landing Page Copywriting',
      'Lead Magnets & Email Drip Sequences',
      'Content Repurposing Across Multiple Channels'
    ],
    metrics: ['Time on Page', 'Scroll Depth', 'Newsletter & Lead Magnet Signups'],
    tools: ['Grammarly Business', 'SurferSEO', 'Notion CMS', 'Substack / Mailchimp']
  },
  {
    id: 'webdev',
    number: '06',
    title: 'Web Development',
    icon: 'web',
    tag: 'Speed • UX • Conversions',
    summary: 'Includes designing and developing modern, responsive, and user-friendly websites that support business growth and improve online presence.',
    deliverables: [
      'Responsive Mobile-First UI/UX Design',
      'Fast Modern Web Frameworks (Next.js / React / WordPress)',
      'Conversion-Focused Landing Pages & CTAs',
      'SEO-Friendly Clean Semantic Markup',
      'PageSpeed 90+ Core Web Vitals Optimization'
    ],
    metrics: ['LCP / FID / CLS Scores', 'Bounce Rate', 'Goal Completion Rate'],
    tools: ['React / Tailwind CSS', 'Vite', 'Figma', 'Vercel / Cloud Run']
  }
];

const PROJECTS: ProjectDetail[] = [
  {
    id: 'project-seo',
    caseNumber: 'Case 01',
    tag: 'SEO',
    title: 'SEO Strategy & Website Optimization',
    description: 'Comprehensive organic audit, technical fix execution, and search discovery framework delivering a sustainable organic search funnel.',
    image: '/images/case-seo.jpg',
    badges: ['Technical SEO', 'Keyword Clustering'],
    metricHighlight: '+180% Organic Clicks',
    clientContext: 'Regional E-commerce & Service Provider',
    problem: 'Stagnant organic search rankings, crawling errors due to poorly structured URL slugs, and missing on-page metadata leading to negligible search visibility.',
    solution: [
      'Executed full site crawl audit repairing 140+ indexation and 404 broken link warnings.',
      'Constructed modular keyword clusters matching high-intent commercial search queries in Kerala & pan-India.',
      'Implemented JSON-LD structured schema for rich snippets and zero-click answer boxes.'
    ],
    results: [
      { label: 'Organic Click Growth', value: '+180%' },
      { label: 'Top 3 Keyword Rankings', value: '38+' },
      { label: 'Domain Authority Boost', value: '+14 pts' }
    ]
  },
  {
    id: 'project-smm',
    caseNumber: 'Case 02',
    tag: 'SMM',
    title: 'Social Media Marketing Campaign',
    description: 'Audience segmentation, creative asset design, and multi-format content distribution producing viral reach across targeted demographic tiers.',
    image: '/images/case-smm.jpg',
    badges: ['Meta Campaigns', 'Creative Direction'],
    metricHighlight: '4.2x Engagement',
    clientContext: 'Nila Wellness — Modern Consumer Brand',
    problem: 'Low follower engagement and inconsistent social posting resulting in high customer acquisition costs through unoptimized direct ads.',
    solution: [
      'Refreshed brand visual identity on Instagram with high-contrast editorial reels and carousel guides.',
      'Introduced narrative founder stories and customer transformations to spark organic saves and shares.',
      'Restructured Meta ad funnels into TOFU (Awareness), MOFU (Consideration), and BOFU (Retargeting).'
    ],
    results: [
      { label: 'Engagement Multiplier', value: '4.2x' },
      { label: 'Reach Growth', value: '2.4M+' },
      { label: 'Customer Acquisition Cost', value: '-38%' }
    ]
  },
  {
    id: 'project-content',
    caseNumber: 'Case 03',
    tag: 'Content Marketing',
    title: 'SEO Content Strategy',
    description: 'Intent-focused topic clustering and search architecture designed to capture high-converting informational queries and zero-click answers.',
    image: '/images/case-content.jpg',
    badges: ['Topic Clusters', 'AEO Snippets'],
    metricHighlight: '12 Featured Snippets',
    clientContext: 'B2B Professional Services Firm',
    problem: 'Thin informational content failing to establish topical authority or capture prospective clients researching solutions before purchase.',
    solution: [
      'Mapped customer pain points against long-tail informational search queries.',
      'Authored 15 pillar guides formatted with tables, bullet lists, and conversational FAQs tailored for Google AI Overviews and Perplexity.',
      'Interlinked cluster pages with contextual anchor texts establishing clear semantic hierarchies.'
    ],
    results: [
      { label: 'Featured Snippets Captured', value: '12' },
      { label: 'Average Time on Page', value: '3m 48s' },
      { label: 'Qualified Inquiries', value: '+92%' }
    ]
  },
  {
    id: 'project-web',
    caseNumber: 'Case 04',
    tag: 'Web Development',
    title: 'Business Website Development',
    description: 'Fast, responsive web experience optimized for mobile conversions, Core Web Vitals compliance, and clear lead capture touchpoints.',
    image: '/images/case-web.jpg',
    badges: ['Responsive UX', 'Speed 95+'],
    metricHighlight: '2.8x Lead Rate',
    clientContext: 'Enterprise Consulting Agency',
    problem: 'Outdated legacy website with 6+ second load times on mobile devices and confusing navigation that discouraged visitors from requesting consultations.',
    solution: [
      'Redesigned user journey with intuitive navigation hierarchy and clear, prominent consultation booking CTAs.',
      'Developed high-performance web architecture scoring 96+ across Google Lighthouse performance metrics.',
      'Integrated streamlined lead capture forms directly synced to CRM and email notifications.'
    ],
    results: [
      { label: 'Lead Conversion Rate', value: '2.8x' },
      { label: 'Mobile PageSpeed Score', value: '96/100' },
      { label: 'Bounce Rate Reduction', value: '-52%' }
    ]
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactService, setContactService] = useState('SEO — Search Engine Optimization');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active navigation tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const openServiceModal = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const openProjectModal = (project: ProjectDetail) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#1a1c1b] font-sans">
      {/* 1. FIXED HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#f9f9f7]/90 backdrop-blur-xl border-b border-[#e5e5e0]/60 transition-all">
        <div className="h-20 max-w-[1280px] mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#131416] flex items-center justify-center text-[#fddc1e] text-xl font-bold shadow-[2px_2px_0px_#28282B] group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1a1c1b] tracking-tight group-hover:text-[#6d5e00] transition-colors">
                Rumaisa M S
              </span>
              <span className="text-xs uppercase tracking-wider text-[#46464b] font-semibold">
                Kochi, Kerala
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#eeeeec] px-2 py-1.5 rounded-full shadow-[0_1px_4px_rgba(40,40,43,0.04)]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeSection === item.id
                    ? 'bg-[#ffffff] text-[#131416] shadow-sm'
                    : 'text-[#46464b] hover:text-[#1a1c1b] hover:bg-[#e2e3e1]/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center bg-[#fddc1e] text-[#211b00] font-semibold text-sm px-6 py-2.5 rounded-full shadow-[2px_2px_0px_#28282B] hover:bg-[#ffe251] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Let's Work Together
            </a>

            <a
              href="#contact"
              title="Open Contact Profile"
              className="w-9 h-9 rounded-full bg-[#131416] flex items-center justify-center text-white hover:bg-[#28282b] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#1a1c1b] hover:bg-[#e2e3e1] transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f9f9f7] border-b border-[#e5e5e0] px-6 py-4 space-y-2 shadow-lg animate-fadeIn">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#fddc1e] text-[#211b00]'
                    : 'text-[#46464b] hover:bg-[#eeeeec]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#131416] text-[#fddc1e] font-semibold text-sm py-3 rounded-full shadow-sm"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="w-full pt-20">
        {/* 1. HERO SECTION */}
        <section id="home" className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-[#e5e5e0] mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fddc1e] animate-pulse"></span>
                <span className="text-xs uppercase tracking-wider text-[#1a1c1b] font-bold">
                  OPEN TO DIGITAL MARKETING OPPORTUNITIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#131416] tracking-tight leading-[1.15] mb-4">
                Digital Marketer in Kochi
              </h1>

              {/* Supporting Headline */}
              <p className="text-xl sm:text-2xl text-[#1a1c1b] mb-4 font-semibold max-w-2xl leading-snug">
                I help businesses build a stronger online presence through SEO, AEO, SEM, Social Media, Content Marketing &amp; Web Development.
              </p>

              {/* Short Bio */}
              <p className="text-base sm:text-lg text-[#46464b] mb-8 max-w-xl leading-relaxed">
                I'm Rumaisa M S, a passionate Digital Marketer based in Kochi, Kerala, focused on creating practical digital strategies that help brands grow, connect with their audience, and achieve measurable results.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-[#fddc1e] text-[#211b00] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[2px_2px_0px_#28282B] hover:bg-[#ffe251] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>View My Services</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-[#131416] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-sm border border-[#e5e5e0] hover:bg-[#eeeeec] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>Let's Connect</span>
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                </a>
              </div>

              {/* Location Tag & Credentials */}
              <div className="mt-8 pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[#46464b] text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#6d5e00] text-[20px]">location_on</span>
                  <span>Kochi, Kerala • Pan-India / Global Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#6d5e00] text-[20px]">verified</span>
                  <span>Certified Digital Growth Practitioner</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composition with Hero Photo & Search Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Ambient Glow */}
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-[#fddc1e]/25 blur-3xl -z-10 pointer-events-none"></div>

              <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#e5e5e0]/80 overflow-hidden">
                {/* Search Engine Simulation Header */}
                <div className="bg-[#f4f4f2] rounded-2xl p-2 sm:p-2.5 mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 px-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffdad6] border border-[#ba1a1a]/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fddc1e] border border-[#6d5e00]/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e2e3e1]"></span>
                  </div>
                  <div className="flex-1 min-w-0 bg-white rounded-xl py-1.5 px-2.5 sm:px-3 flex items-center justify-between text-[#1a1c1b] shadow-sm gap-2">
                    <span className="flex items-center gap-1.5 min-w-0 truncate text-xs sm:text-sm">
                      <span className="material-symbols-outlined text-[#46464b] text-[16px] shrink-0">search</span>
                      <span className="font-semibold text-[#131416] truncate">Best Digital Marketer in Kochi</span>
                    </span>
                    <span className="bg-[#fddc1e] text-[#211b00] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0 whitespace-nowrap">
                      Rank #1
                    </span>
                  </div>
                </div>

                {/* Main Hero Photograph Container - Taller portrait ratio with her face fully clear */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] min-h-[360px] sm:min-h-[420px] bg-[#eeeeec]">
                  <img
                    className="w-full h-full object-cover object-[center_12%] hover:scale-102 transition-transform duration-700"
                    src="/images/rumaisa-hero.jpg"
                    alt="Rumaisa M S - Digital Marketer in Kochi"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCqlUEb_te8Yy8PVXVJvMBCdOGyyOHNBAHERWqW5idmiDIwsP-UO5GEaJXcGuJodfrbVFxgpE4A8PS1OHp2bmr0UP5830PYJgTNcmlIUarkM3htxfg59MN9gsMGs-EchVuMkLRi96xqGEZQj5422XtqgEvPjvUmlm5OWrgAT-7GGdzi_5uz-HKlBc88Sgkq6HIgqxf-0q5rGGU_baoF5VgNhX5PUZxyQjajtyrTGGDyLug7h-BxE0snJA';
                    }}
                  />
                  {/* Subtle scrim gradient only at very bottom behind the badge */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#131416]/70 to-transparent pointer-events-none"></div>

                  {/* Profile Badge Bottom Overlay - Unobtrusive, resting below chin/shoulders */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-between shadow-md border border-white/40">
                    <div className="min-w-0 pr-2">
                      <p className="text-sm sm:text-base font-bold text-[#131416] leading-tight truncate">Rumaisa M S</p>
                      <p className="text-[11px] sm:text-xs text-[#46464b] truncate">Digital Marketing Strategist • Kochi</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#fddc1e] flex items-center justify-center text-[#211b00] font-bold shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[18px]">trending_up</span>
                    </span>
                  </div>
                </div>

                {/* Floating Interactive Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#f4f4f2] p-3 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#131416] text-[#fddc1e] flex items-center justify-center font-bold shrink-0">
                      <span className="material-symbols-outlined text-[20px]">query_stats</span>
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xl font-extrabold text-[#131416] leading-none">+140%</span>
                      <span className="text-xs text-[#46464b] truncate block mt-0.5">Visibility Growth</span>
                    </div>
                  </div>

                  <div className="bg-[#f4f4f2] p-3 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fddc1e] text-[#211b00] flex items-center justify-center font-bold shrink-0">
                      <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold text-[#131416] uppercase truncate">SEO &amp; AEO</span>
                      <span className="text-xs text-[#46464b] truncate block mt-0.5">Zero-Click Ready</span>
                    </div>
                  </div>
                </div>

                {/* Strategic Footer Strip */}
                <div className="mt-3 bg-[#131416] text-white p-3 rounded-xl flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#fddc1e] animate-pulse shrink-0"></span>
                    <span className="font-semibold text-white truncate">ROI Driven Performance Strategy</span>
                  </div>
                  <span className="text-[#fddc1e] font-bold shrink-0 pl-2">Kochi, KL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK SKILLS STRIP (Full-width Dark Obsidian Strip) */}
        <section className="w-full bg-[#28282b] text-white py-4 shadow-md overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10 flex flex-wrap items-center justify-around gap-y-3 gap-x-6">
            {['SEO', 'AEO', 'SEM', 'SMM', 'Content Marketing', 'Web Development'].map((skill, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fddc1e]"></span>
                <span className="text-sm sm:text-base font-bold tracking-wide text-white uppercase">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ABOUT ME SECTION */}
        <section id="about" className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Real photo at DigitalX desk */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-[#e5e5e0]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] min-h-[360px] sm:min-h-[420px] bg-[#eeeeec]">
                  <img
                    className="w-full h-full object-cover object-[center_20%] hover:scale-102 transition-transform duration-700"
                    src="/images/rumaisa-about.jpg"
                    alt="Rumaisa M S working at DigitalX office"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVcnW9Nvs9bF0HhpqXo7Px6tG_h0nvacIAUjviuaaOwRM6NzdFh00uBJLA6va_wHU4bCxsldq1K55e3cfAAG-1Wl0Z9toCzlMfQiXDz0hwgMWF0gNGTJJ9Ts1cNpcD01mVVO6p0hTcNxXUx5PAsPlTcE5dHFUqm6bNYJIMFCyJp1-G9O_1Yo56ERjArr0H5yZ9wyXFxeE3iQKMaBiDMkhxmW9-QlkfaZbdPcNpPlz2NQmHd5e4TWjJQ';
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#131416]/70 to-transparent pointer-events-none"></div>

                  {/* Bottom Floating Tag Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 flex items-center justify-between shadow-sm border border-white/40">
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className="w-9 h-9 rounded-full bg-[#131416] flex items-center justify-center text-[#fddc1e] font-bold text-base shrink-0">
                        R
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#131416] truncate">Rumaisa M S</h4>
                        <p className="text-[11px] sm:text-xs text-[#46464b] truncate">Digital Marketer | Kochi</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-[#eeeeec] rounded-full text-[11px] font-bold text-[#131416] uppercase shrink-0">
                      Kerala
                    </span>
                  </div>
                </div>

                {/* Micro Highlights Ribbon */}
                <div className="mt-4 pt-2 flex items-center justify-between text-xs sm:text-sm text-[#46464b] px-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#6d5e00] text-[18px]">school</span>
                    DigitalX Trained
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#6d5e00] text-[18px]">verified_user</span>
                    White-Hat Practice
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#6d5e00] text-[18px]">rocket_launch</span>
                    Growth Mindset
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative with Verbatim Highlights */}
            <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight mb-6">
                Driving Growth with Strategy &amp; Creativity
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#46464b] leading-relaxed">
                <p>
                  I'm Rumaisa, a passionate{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">
                    Digital Marketer in Kochi
                  </mark>{' '}
                  dedicated to helping businesses build a strong online presence. I completed my professional digital marketing training at DigitalX, where I developed expertise in{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">SEO</mark>,{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">Social Media Marketing</mark>,{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">Content Marketing</mark>, and{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">Web Development</mark>.
                </p>
                <p>
                  I believe in{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">Continuous Learning</mark>, creativity, and delivering effective strategies that help brands grow, connect with their audience, and achieve{' '}
                  <mark className="bg-[#fddc1e]/40 text-[#1a1c1b] font-semibold px-1.5 py-0.5 rounded">Measurable Results</mark> in the digital world.
                </p>
              </div>

              {/* Metric Counter Bar */}
              <div className="grid grid-cols-3 gap-4 w-full my-6 p-5 sm:p-6 bg-[#f4f4f2] rounded-2xl border border-[#e5e5e0]">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#131416] block leading-none">100%</span>
                  <span className="text-xs sm:text-sm text-[#46464b] mt-1.5 block font-medium">Dedicated Focus</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#131416] block leading-none">6+</span>
                  <span className="text-xs sm:text-sm text-[#46464b] mt-1.5 block font-medium">Core Disciplines</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#131416] block leading-none">AEO</span>
                  <span className="text-xs sm:text-sm text-[#46464b] mt-1.5 block font-medium">Next-Gen Search</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-[#131416] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[2px_2px_0px_#fddc1e] hover:bg-[#28282b] transition-all hover:translate-x-1"
                >
                  <span>More About Me</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="inline-flex items-center gap-2 bg-white text-[#131416] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-[#e5e5e0] hover:bg-[#eeeeec] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#6d5e00]">workspace_premium</span>
                  <span>View Credentials</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION (3-col x 2-row Grid) */}
        <section id="services" className="w-full bg-[#f4f4f2] py-16 lg:py-24 border-y border-[#e5e5e0]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">SERVICES</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight mb-3">
                What I Can Do For Your Business
              </h2>
              <p className="text-base sm:text-lg text-[#46464b] leading-relaxed">
                From improving search visibility to building a stronger digital presence, I provide practical digital marketing services designed around business goals.
              </p>
            </div>

            {/* 6 Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => openServiceModal(srv)}
                  className="cursor-pointer bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#e5e5e0] hover:border-[#fddc1e] hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-[#fddc1e] group-hover:text-[#6d5e00] transition-colors">
                        {srv.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#eeeeec] flex items-center justify-center text-[#131416] group-hover:bg-[#fddc1e] group-hover:text-[#211b00] transition-colors">
                        <span className="material-symbols-outlined text-[24px]">{srv.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#131416] mb-2 group-hover:text-[#6d5e00] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#46464b] mb-6 leading-relaxed">
                      {srv.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#eeeeec] flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#77767b]">
                      {srv.tag}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#131416] group-hover:text-[#6d5e00] transition-colors"
                    >
                      <span>Explore Service</span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TOOLKIT / SKILLS SECTION */}
        <section id="skills" className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 py-16 lg:py-24">
          <div className="flex flex-col items-start mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight">
              My Digital Marketing Toolkit
            </h2>
          </div>

          {/* Skill Badges Grid - Geometrically balanced 5-col on desktop, 3-col on tablet, 2-col on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
            {[
              { name: 'SEO', style: 'default' },
              { name: 'On-Page SEO', style: 'default' },
              { name: 'Technical SEO', style: 'default' },
              { name: 'Keyword Research', style: 'default' },
              { name: 'Content Optimization', style: 'default' },
              { name: 'AEO', style: 'primary' },
              { name: 'Search Intent', style: 'default' },
              { name: 'Content Strategy', style: 'default' },
              { name: 'Google Search', style: 'default' },
              { name: 'Social Media Marketing', style: 'default' },
              { name: 'Content Marketing', style: 'default' },
              { name: 'Website Optimization', style: 'default' },
              { name: 'Web Development', style: 'default' },
              { name: 'Analytics & Reporting', style: 'default' },
              { name: 'Digital Strategy', style: 'yellow' }
            ].map((badge, idx) => {
              const spanClass = idx === 14 ? 'col-span-2 sm:col-span-1' : '';
              if (badge.style === 'primary') {
                return (
                  <div
                    key={idx}
                    className={`h-12 bg-[#131416] text-white px-4 rounded-full shadow-sm flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm hover:scale-102 transition-transform text-center ${spanClass}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#fddc1e] shrink-0"></span>
                    <span className="truncate">{badge.name}</span>
                  </div>
                );
              }
              if (badge.style === 'yellow') {
                return (
                  <div
                    key={idx}
                    className={`h-12 bg-[#fddc1e] text-[#211b00] px-4 rounded-full shadow-sm flex items-center justify-center gap-2 font-bold text-xs sm:text-sm hover:scale-102 transition-transform text-center ${spanClass}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#131416] shrink-0"></span>
                    <span className="truncate">{badge.name}</span>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className={`h-12 bg-white text-[#131416] px-4 rounded-full shadow-sm border border-[#e5e5e0] flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm hover:border-[#fddc1e] hover:shadow-md transition-all text-center ${spanClass}`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#fddc1e] shrink-0"></span>
                  <span className="truncate">{badge.name}</span>
                </div>
              );
            })}
          </div>

          {/* Dark Summary Banner */}
          <div className="w-full bg-[#131416] text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#28282b]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fddc1e] text-[#211b00] flex items-center justify-center font-bold shrink-0">
                <span className="material-symbols-outlined text-[24px]">hub</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Digital Strategy Core</h4>
                <p className="text-sm text-[#dadad8] mt-0.5">
                  Audience mapping &amp; funnel optimization for compounding organic acquisition.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 bg-[#28282b] px-4 py-2 rounded-full shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fddc1e] animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fddc1e]">
                ACTIVE PIPELINE
              </span>
            </div>
          </div>
        </section>

        {/* 6. PROCESS / APPROACH SECTION (4-Column Roadmap) */}
        <section className="w-full bg-[#f4f4f2] py-16 lg:py-24 border-y border-[#e5e5e0]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">PROCESS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight">
                How I Approach Digital Marketing
              </h2>
            </div>

            {/* 4 Connected Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                {
                  step: '01',
                  title: 'UNDERSTAND',
                  desc: 'Understand the business, audience, competitors, and goals.',
                  sub: 'Discovery & Research',
                  icon: 'explore',
                  highlight: false
                },
                {
                  step: '02',
                  title: 'PLAN',
                  desc: 'Build a focused digital strategy based on research and search intent.',
                  sub: 'Intent Architecture',
                  icon: 'architecture',
                  highlight: false
                },
                {
                  step: '03',
                  title: 'CREATE',
                  desc: 'Develop optimized content, campaigns, social media strategies, and digital experiences.',
                  sub: 'Multi-channel Assets',
                  icon: 'design_services',
                  highlight: true
                },
                {
                  step: '04',
                  title: 'MEASURE & IMPROVE',
                  desc: 'Track performance, identify opportunities, and continuously improve the strategy.',
                  sub: 'Feedback Loops',
                  icon: 'monitoring',
                  highlight: false
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#e5e5e0] relative flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-extrabold mb-5 shadow-sm ${
                        item.highlight
                          ? 'bg-[#fddc1e] text-[#211b00]'
                          : 'bg-[#131416] text-[#fddc1e]'
                      }`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#131416] mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#46464b] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#eeeeec] flex items-center gap-2 text-xs font-semibold text-[#46464b]">
                    <span className="material-symbols-outlined text-[16px] text-[#6d5e00]">{item.icon}</span>
                    <span>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SELECTED WORK / PORTFOLIO SECTION */}
        <section id="projects" className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2 block">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight">
                Selected Work
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#46464b] max-w-md">
              Practical campaign executions delivering verified organic reach, brand awareness, and conversions.
            </p>
          </div>

          {/* 4 Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => openProjectModal(proj)}
                className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e5e5e0] hover:shadow-xl hover:border-[#fddc1e] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-[#eeeeec] overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={proj.image}
                      alt={proj.title}
                      onError={(e) => {
                        // If relative path fails, fallback to user provided public URLs
                        const fallbacks: Record<string, string> = {
                          'project-seo':
                            'https://lh3.googleusercontent.com/aida-public/AB6AXuDQL0UH3XRstiB7zvf1A7AGwhLLnuzttyPN53B0VzCL_n1B_nwRumvAKaFGFYBZXI1Xhst9IVZ_5txXLbro3YRuafdqhkih3ywVvM_TpMV0o9gFsnQlnfEfqFDs-elJD3BUU4Xcki65oNvoxyKf5RTbQfqDSjK6_ErAK3YlwsK7PPig5_8fiS7mhHmB8m94ogo1NNWW89yuA679iWXjxPLWH9TrhwifJc5V4ayRXY_k',
                          'project-smm':
                            'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5A2WDV9ZXQWta7NG752neyCjs9wLI8YkRrk6Kdr8X4Xq12sqnOobvl6mXwDLt4v48szQF3ieLKFnynGaGFSf2rqtMONupWQ7UpglkzBW1Fl90W2uhD41mKBRc55wAfnI6EeTxqO24VNq_0FBzV1jK8i1hk9JYH83hs4DniBw1PMIIgttcpusiDDCTpbVfJvGUzleFJWY80oL0EOgPl6DviS9hKeD7LAu3_HNjR3a',
                          'project-content':
                            'https://lh3.googleusercontent.com/aida-public/AB6AXuA5CfuMGqZTRxSiq30eC8Pfcy_LSvIy6EuITQxL9LD_JEEhqR1SkDNpsykj2fRRluMlwC3QznFT5iSdGhw2YcAzDbKEUItt4hLEp6CVIRFn_rYNhPPNJFrBQwZjSuVgqj9HlI275tfo9zYhg-kkKBGxJwM7cssHGx-OytEIKJz0RrJYErLillzdeY13V1VAFtiq09qieDJ3sKQU6-yDlqmOrFOdJLggm0frzhqxCaHH',
                          'project-web':
                            'https://lh3.googleusercontent.com/aida-public/AB6AXuDzuYBdrPMVxGpV8R5iQoRla4a9mHw53mTHloQRMXwtRXXMRxOWWeKeNhLvTP4YL8j482_TastHvO84FAKuoT2Ozx-RYmC1og3C0n_SZq66of9qsh-KcCSlpda7AJwuGlAnZUDSnbRy-WcSkjTdSzZTXRO8WOWH8BJ8_83a6XOrMV3kWwGnO66onVrQ08MCWv2dFfGWX9VANoNulrwy0-rKkh44lYmgSDKWQLfyc3Jl'
                        };
                        if (fallbacks[proj.id]) {
                          (e.currentTarget as HTMLImageElement).src = fallbacks[proj.id];
                        }
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-[#131416] text-[#fddc1e] text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {proj.caseNumber}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#131416] text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-sm">
                      {proj.tag}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#131416] mb-2 group-hover:text-[#6d5e00] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#46464b] mb-4 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {proj.badges.map((b, bIdx) => (
                        <span key={bIdx} className="px-3 py-1 bg-[#eeeeec] rounded-lg text-xs font-medium text-[#131416]">
                          {b}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-[#fddc1e]/30 text-[#706000] rounded-lg text-xs font-bold">
                        {proj.metricHighlight}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#131416] group-hover:text-[#6d5e00] transition-colors">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. WHY WORK WITH ME */}
        <section className="w-full bg-[#f4f4f2] py-16 lg:py-24 border-y border-[#e5e5e0]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
            <div className="flex flex-col items-start max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">ADVANTAGE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight mb-2">
                Why Work With Me?
              </h2>
              <p className="text-base sm:text-lg text-[#46464b]">
                I combine creativity, research, technical skills, and continuous learning to build digital strategies that are focused on real business objectives.
              </p>
            </div>

            {/* 5 Benefit Cards in Desktop Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  title: 'Continuous Learning',
                  desc: 'Staying perpetually ahead of search algorithms, AI developments, and digital consumption trends.',
                  icon: 'auto_stories'
                },
                {
                  title: 'Creative Thinking',
                  desc: 'Distinct messaging and storytelling angles that cut through digital noise and capture real attention.',
                  icon: 'lightbulb'
                },
                {
                  title: 'Practical Strategy',
                  desc: 'Realistic, executable frameworks tailored to your actual business capacity and core audience.',
                  icon: 'target'
                },
                {
                  title: 'Data-Driven Approach',
                  desc: 'Every decision backed by search intent metrics, analytics data, and conversion feedback.',
                  icon: 'query_stats'
                },
                {
                  title: 'Growth-Focused Mindset',
                  desc: 'Relentless optimization pointed directly toward tangible business outcomes and revenue impact.',
                  icon: 'trending_up'
                }
              ].map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#e5e5e0] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#eeeeec] flex items-center justify-center text-[#131416] mb-4">
                      <span className="material-symbols-outlined text-[22px]">{adv.icon}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#131416] mb-1.5">{adv.title}</h4>
                    <p className="text-xs sm:text-sm text-[#46464b] leading-relaxed">{adv.desc}</p>
                  </div>
                  <div className="mt-5">
                    <span className="w-full h-1 bg-[#fddc1e] rounded-full block"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. EDUCATION & BACKGROUND */}
        <section className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 py-16 lg:py-24">
          <div className="flex flex-col items-start mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">BACKGROUND</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131416] tracking-tight">
              My Digital Marketing Journey
            </h2>
          </div>

          {/* Wide Education Card with Gold Left Accent Border */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border-l-4 border-l-[#fddc1e] border-y border-r border-[#e5e5e0] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-6 max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#131416] text-[#fddc1e] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[30px]">workspace_premium</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#fddc1e] text-[#211b00] text-[11px] font-bold uppercase tracking-wider">
                    Certified Training
                  </span>
                  <span className="text-xs text-[#46464b] font-medium">Kochi, Kerala</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#131416] mb-2">
                  Digital Marketing Professional Training — DigitalX Academy
                </h3>
                <p className="text-sm sm:text-base text-[#46464b] leading-relaxed">
                  Professional training in digital marketing with practical exposure to SEO, social media marketing, content marketing, and web development.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setShowCertificateModal(true)}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#131416] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#28282b] transition-all shadow-[2px_2px_0px_#fddc1e]"
              >
                <span>View Certificate</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>
            </div>
          </div>
        </section>

        {/* 10. FINAL CONTACT & CTA SECTION */}
        <section id="contact" className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 pb-16 lg:pb-24">
          <div className="w-full bg-[#28282b] text-white rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-[#131416]">
            {/* Ambient Gold Glow */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#fddc1e]/15 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              {/* CTA Copy & Interactive Form (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 mb-4 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#fddc1e] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#fddc1e]">
                    GET IN TOUCH
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                  Let's Build Something Digital
                </h2>

                <p className="text-base sm:text-lg text-[#dadad8] mb-8 max-w-xl leading-relaxed">
                  Have a project, business idea, or digital marketing opportunity? Let's connect and explore how I can help strengthen your online presence.
                </p>

                {/* Interactive Message Form */}
                <div className="w-full bg-[#131416]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg mb-6">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-[#fddc1e] text-[#211b00] flex items-center justify-center mx-auto mb-4 font-bold">
                        <span className="material-symbols-outlined text-[32px]">check_circle</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                      <p className="text-sm text-[#dadad8] max-w-md mx-auto mb-6">
                        Thank you for reaching out, {contactName}. Rumaisa will get back to your inquiry at <strong className="text-white">{contactEmail}</strong> shortly.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setContactName('');
                          setContactEmail('');
                          setContactMessage('');
                        }}
                        className="px-6 py-2 bg-white/10 text-white rounded-full text-xs font-semibold hover:bg-white/20 transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#dadad8] mb-1.5 uppercase tracking-wider">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Nair"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#fddc1e] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#dadad8] mb-1.5 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#fddc1e] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dadad8] mb-1.5 uppercase tracking-wider">
                          Service of Interest
                        </label>
                        <select
                          value={contactService}
                          onChange={(e) => setContactService(e.target.value)}
                          className="w-full bg-[#28282b] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#fddc1e] transition-colors"
                        >
                          <option value="SEO — Search Engine Optimization">SEO — Search Engine Optimization</option>
                          <option value="AEO — Answer Engine Optimization">AEO — Answer Engine Optimization</option>
                          <option value="SEM — Search Engine Marketing">SEM — Search Engine Marketing</option>
                          <option value="SMM — Social Media Marketing">SMM — Social Media Marketing</option>
                          <option value="Content Marketing">Content Marketing</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Complete Digital Strategy">Complete Digital Strategy</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#dadad8] mb-1.5 uppercase tracking-wider">
                          Project Brief / Message *
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Tell me about your business goals, target market, or timeline..."
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#fddc1e] transition-colors"
                        ></textarea>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 bg-[#fddc1e] text-[#211b00] font-bold text-sm px-8 py-3.5 rounded-full shadow-[2px_2px_0px_#ffffff] hover:bg-[#ffe251] active:translate-y-0 hover:-translate-y-0.5 transition-all disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-[#211b00] border-t-transparent rounded-full animate-spin"></span>
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Direct Inquiry</span>
                              <span className="material-symbols-outlined text-[18px]">send</span>
                            </>
                          )}
                        </button>

                        <a
                          href="mailto:rumaisadatameris@gmail.com"
                          className="inline-flex items-center gap-2 bg-transparent text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                        >
                          <span>Open Email Client</span>
                          <span className="material-symbols-outlined text-[18px]">mail</span>
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Direct Contact Details Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#131416]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">Direct Contact Info</h4>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-[#fddc1e] shrink-0 border border-white/10">
                      <span className="material-symbols-outlined text-[20px]">email</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#dadad8] block font-semibold uppercase tracking-wider">Email</span>
                      <a
                        href="mailto:rumaisadatameris@gmail.com"
                        className="text-base text-white hover:text-[#fddc1e] font-semibold transition-colors block"
                      >
                        rumaisadatameris@gmail.com
                      </a>
                      <a
                        href="mailto:contact@rumaisams.com"
                        className="text-xs text-[#dadad8] hover:text-[#fddc1e] transition-colors block mt-0.5"
                      >
                        contact@rumaisams.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-[#fddc1e] shrink-0 border border-white/10">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#dadad8] block font-semibold uppercase tracking-wider">Phone</span>
                      <a
                        href="tel:+919876543210"
                        className="text-base text-white hover:text-[#fddc1e] font-semibold transition-colors block"
                      >
                        +91 98765 43210
                      </a>
                      <span className="text-xs text-[#dadad8] block">Available 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-[#fddc1e] shrink-0 border border-white/10">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#dadad8] block font-semibold uppercase tracking-wider">Location</span>
                      <span className="text-base text-white font-semibold block">
                        Kochi, Kerala, India
                      </span>
                      <span className="text-xs text-[#dadad8] block">Available for Remote / Hybrid Engagements</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#dadad8] font-semibold block mb-3">
                    Connect On Social Media
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-white hover:bg-[#fddc1e] hover:text-[#211b00] transition-all border border-white/10 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <span className="material-symbols-outlined text-[20px]">share</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-white hover:bg-[#fddc1e] hover:text-[#211b00] transition-all border border-white/10 shadow-sm"
                      aria-label="Instagram"
                    >
                      <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-[#28282b] flex items-center justify-center text-white hover:bg-[#fddc1e] hover:text-[#211b00] transition-all border border-white/10 shadow-sm"
                      aria-label="GitHub"
                    >
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-[#e5e5e0] shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#eeeeec]">
            <div className="md:col-span-5 flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#131416] flex items-center justify-center text-[#fddc1e] text-lg font-bold shadow-[2px_2px_0px_#28282B]">
                  R
                </div>
                <span className="text-xl font-bold text-[#131416]">Rumaisa M S</span>
              </div>
              <p className="text-sm text-[#46464b] max-w-sm mt-1 leading-relaxed">
                Digital Marketer in Kochi helping ambitious brands and enterprises scale with performance-driven campaigns, SEO mastery, and conversion-focused growth.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-[#fddc1e]"></span>
                <span className="text-xs uppercase tracking-wider text-[#46464b] font-bold">
                  Available for High-Impact Projects
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <span className="text-base font-bold text-[#131416]">Explore Portfolio</span>
              <nav className="grid grid-cols-2 gap-y-2 gap-x-6">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-[#46464b] hover:text-[#131416] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3 flex flex-col gap-3">
              <span className="text-base font-bold text-[#131416]">Connect</span>
              <p className="text-xs sm:text-sm text-[#46464b] leading-relaxed">
                Follow campaign breakdowns, growth experiments, and marketing insights.
              </p>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] hover:text-[#211b00] transition-all"
                  aria-label="LinkedIn"
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] hover:text-[#211b00] transition-all"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] hover:text-[#211b00] transition-all"
                  aria-label="GitHub"
                >
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-[#46464b]">
              © 2026 Rumaisa M S. All rights reserved.
            </span>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-[#46464b]">
              <span>Kochi, Kerala • Global Remote</span>
            </div>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#e5e5e0]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-extrabold text-[#fddc1e] bg-[#131416] px-3 py-1 rounded-xl">
                {selectedService.number}
              </span>
              <span className="px-3 py-1 bg-[#eeeeec] rounded-full text-xs font-bold text-[#131416] uppercase">
                {selectedService.tag}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#131416] mb-3">{selectedService.title}</h3>
            <p className="text-sm sm:text-base text-[#46464b] mb-6 leading-relaxed">
              {selectedService.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-3">
                Key Deliverables &amp; Scope
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1a1c1b]">
                    <span className="material-symbols-outlined text-[#6d5e00] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3 bg-[#f4f4f2] p-4 rounded-2xl">
              <div>
                <span className="text-xs font-bold text-[#77767b] uppercase block mb-1">Tools Used</span>
                <div className="flex flex-wrap gap-1">
                  {selectedService.tools.map((t, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-0.5 rounded text-[#131416] font-medium border border-[#e5e5e0]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-[#77767b] uppercase block mb-1">Key KPIs</span>
                <div className="text-xs text-[#131416] space-y-1">
                  {selectedService.metrics.map((m, idx) => (
                    <div key={idx} className="font-medium">• {m}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setContactService(selectedService.title);
                  setSelectedService(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#131416] text-[#fddc1e] rounded-full font-bold text-sm shadow-[2px_2px_0px_#fddc1e] hover:bg-[#28282b] transition-all"
              >
                Inquire About {selectedService.title.split('—')[0]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT CASE STUDY DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-[#e5e5e0]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] transition-colors z-10"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5 bg-[#eeeeec]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#131416] text-[#fddc1e] text-xs font-bold px-3 py-1 rounded-full">
                {selectedProject.caseNumber}
              </div>
              <div className="absolute top-3 right-12 bg-white/95 text-[#131416] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {selectedProject.tag}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#131416] mb-2">{selectedProject.title}</h3>
            <p className="text-xs font-semibold text-[#6d5e00] uppercase tracking-wider mb-4">
              Client Context: {selectedProject.clientContext}
            </p>

            <div className="grid grid-cols-3 gap-3 bg-[#f4f4f2] p-4 rounded-2xl mb-6">
              {selectedProject.results.map((res, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#131416] block">{res.value}</span>
                  <span className="text-xs text-[#46464b] block mt-0.5">{res.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ba1a1a] mb-1">
                  The Problem
                </h4>
                <p className="text-sm text-[#46464b] leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] mb-2">
                  The Strategy &amp; Solution
                </h4>
                <ul className="space-y-2">
                  {selectedProject.solution.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#1a1c1b]">
                      <span className="material-symbols-outlined text-[#6d5e00] text-[18px] shrink-0 mt-0.5">
                        task_alt
                      </span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#eeeeec]">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#131416] text-[#fddc1e] rounded-full font-bold text-sm shadow-[2px_2px_0px_#fddc1e] hover:bg-[#28282b] transition-all"
              >
                Start a Similar Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATE PREVIEW MODAL */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e5e5e0]">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#eeeeec] flex items-center justify-center text-[#131416] hover:bg-[#fddc1e] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="text-center pb-6 border-b border-[#eeeeec]">
              <div className="w-16 h-16 rounded-2xl bg-[#131416] text-[#fddc1e] flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="material-symbols-outlined text-[36px]">workspace_premium</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6d5e00] block mb-1">
                CERTIFICATE OF COMPLETION
              </span>
              <h3 className="text-2xl font-extrabold text-[#131416]">
                Digital Marketing Professional
              </h3>
              <p className="text-sm text-[#46464b] mt-1">Conferred to Rumaisa M S</p>
            </div>

            <div className="py-6 space-y-4">
              <div className="bg-[#f4f4f2] p-4 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-[#77767b] font-semibold mb-2">
                  <span>ISSUING INSTITUTION</span>
                  <span>LOCATION</span>
                </div>
                <div className="flex items-center justify-between font-bold text-sm text-[#131416]">
                  <span>DigitalX Academy</span>
                  <span>Kochi, Kerala, India</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6d5e00] block mb-2">
                  Verified Competencies &amp; Practicum
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Search Engine Optimization (SEO)',
                    'Answer Engine Optimization (AEO)',
                    'Social Media Marketing (SMM)',
                    'Content Marketing Strategy',
                    'Google Search & Paid Search (SEM)',
                    'Web Development & Optimization'
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-[#e5e5e0] rounded-lg text-xs font-semibold text-[#131416]"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="w-full py-3 bg-[#131416] text-white rounded-full font-bold text-sm hover:bg-[#28282b] transition-all"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
