"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import {
  AboutSection,
  Footer,
  LogoStrip,
  Navbar,
  PricingSection,
  ServicesSection,
  TestimonialsSection,
  WorksSection,
} from "@/components/home";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: premiumEase } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function revealProps(reduceMotion: boolean) {
  return reduceMotion
    ? { initial: false as const, whileInView: undefined, viewport: undefined }
    : { initial: false as const, whileInView: "visible" as const, viewport: { once: true, amount: 0.2 } };
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-6 ${className}`}>{children}</div>;
}

function Highlight({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`rounded-[3px] px-1.5 py-0.5 ${dark ? "bg-[#171321] text-white" : "bg-[#e2cafa] text-white"}`}>
      {children}
    </span>
  );
}

function DarkButton({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className="inline-flex h-10 items-center justify-center rounded-full bg-[#171321] px-7 text-sm font-bold text-white shadow-[0_12px_24px_rgba(23,19,33,0.12)]"
    >
      {children}
    </motion.a>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function InnerHero({ title, current }: { title: string; current: string }) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 text-center text-[#171321] md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-12 h-[270px] bg-[#F8F3FF] opacity-95 [clip-path:ellipse(72%_36%_at_50%_50%)]" />
      <motion.div initial={false} animate="visible" variants={staggerContainer} className="relative mx-auto max-w-3xl px-5">
        <motion.h1 variants={fadeUp} className="text-[46px] font-black leading-[1.05] md:text-[64px]">
          {title}
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#4b3f5c] px-7 py-3 text-sm font-bold text-white">
          Home <ArrowRight className="h-4 w-4" /> {current}
        </motion.div>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6B6475]">
          Practical accounting, tax, payroll, audit, and advisory support built for clear decisions and calmer operations.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function AboutPage() {
  return (
    <PageFrame>
      <InnerHero title="About Us" current="About Us" />
      <LogoStrip />
      <AboutSection />
      <WorksSection />
      <TeamSection compact />
    </PageFrame>
  );
}

export function ServicePage() {
  return (
    <PageFrame>
      <InnerHero title="Our Service" current="Service" />
      <LogoStrip />
      <ServicesSection />
      <ServiceCatalog />
      <WorksSection />
      <TestimonialsSection />
    </PageFrame>
  );
}

const services = [
  {
    id: "bookkeeping",
    title: "Accounting & Bookkeeping",
    icon: WalletCards,
    desc: "Monthly transaction coding, reconciliations, financial statements, and clean records your team can trust.",
    features: ["Bank reconciliations", "Monthly reports", "Year-end file preparation"],
  },
  {
    id: "tax-planning",
    title: "Tax Planning & Preparation",
    icon: Calculator,
    desc: "Forward-looking tax planning and accurate filing support for individuals, corporations, and growing teams.",
    features: ["Corporate tax returns", "Personal tax support", "Quarterly planning reviews"],
  },
  {
    id: "payroll",
    title: "Payroll Services",
    icon: CalendarDays,
    desc: "Reliable payroll processing, remittances, employee records, and compliance support.",
    features: ["Payroll runs", "CRA remittances", "T4 and ROE support"],
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: ShieldCheck,
    desc: "Audit readiness, assurance support, internal control reviews, and documentation cleanup.",
    features: ["Audit file cleanup", "Control checklists", "Assurance preparation"],
  },
  {
    id: "advisory",
    title: "Business Advisory",
    icon: BriefcaseBusiness,
    desc: "Cash-flow planning, financial dashboards, budgeting, forecasting, and decision support.",
    features: ["Budget models", "Cash-flow planning", "Management reporting"],
  },
  {
    id: "analysis",
    title: "Finance Analysis",
    icon: BarChart3,
    desc: "Make sense of your numbers with clear trend analysis, profitability reviews, and KPI reporting.",
    features: ["KPI dashboards", "Margin reviews", "Scenario planning"],
  },
] satisfies Array<{ id: string; title: string; icon: LucideIcon; desc: string; features: string[] }>;

function ServiceCatalog() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold">Complete <Highlight>Services</Highlight></p>
          <h2 className="mt-4 text-[38px] font-black leading-[1.05] md:text-[50px]">Everything Your Finance Team Needs</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Choose a single service or combine bookkeeping, tax, payroll, audit readiness, and advisory into one monthly package.</p>
        </div>
        <motion.div variants={staggerContainer} className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, icon: Icon, desc, features }) => (
            <motion.article
              id={id}
              key={id}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group rounded-[16px] border-2 border-dashed border-[#d7bdf2] bg-[#F8F3FF] p-7 shadow-[0_12px_30px_rgba(23,19,33,0.05)] transition hover:shadow-[0_22px_48px_rgba(23,19,33,0.10)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#171321] text-white">
                <Icon className="h-6 w-6 transition duration-300 group-hover:scale-110" />
              </span>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#6B6475]">{desc}</p>
              <ul className="mt-5 grid gap-3 text-sm font-semibold text-[#171321]">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#b28de2]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

const team = [
  ["Jackie Cho", "Data Analyst", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"],
  ["Avery Davis", "Senior Accountant", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85"],
  ["Rosella Amy", "Manager", "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=700&q=85"],
  ["Jacob Murphy", "Budget Analyst", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"],
  ["Evelyn Rose", "Data Analyst", "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=700&q=85"],
  ["Lorenzo", "Administration", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"],
  ["David Bou", "Data Analyst", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85"],
  ["Juliana", "Data Analyst", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85"],
];

export function TeamPage() {
  return (
    <PageFrame>
      <InnerHero title="Meet Our Professional Team" current="Team" />
      <LogoStrip />
      <TeamSection />
    </PageFrame>
  );
}

export function TeamSection({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const list = compact ? team.slice(0, 4) : team;
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold">Our <Highlight>Team</Highlight></p>
          <h2 className="mt-4 text-[38px] font-black leading-[1.05] md:text-[50px]">Meet Our Professional Team</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">A practical team of accountants, analysts, payroll specialists, and advisors.</p>
        </div>
        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map(([name, role, src]) => (
            <motion.article key={name} variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -7 }} className="group relative h-[290px] overflow-hidden rounded-[16px] bg-[#F3ECFF] shadow-[0_14px_34px_rgba(23,19,33,0.08)]">
              <Image src={src} alt={name} fill sizes="280px" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171321]/78 via-[#171321]/12 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-black">{name}</h3>
                <p className="mt-1 text-sm text-white/82">{role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

const caseStudies = [
  {
    title: "Tax Management",
    category: "Tax Planning",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=85",
    icon: WalletCards,
    metric: "18% tax exposure reduced",
    desc: "Cleaned prior-year records, mapped eligible deductions, and built a quarterly tax calendar for a growing service business.",
  },
  {
    title: "Business Plan",
    category: "Growth Strategies",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
    icon: BriefcaseBusiness,
    metric: "12-month forecast delivered",
    desc: "Prepared cash-flow scenarios, hiring budgets, and investor-ready reporting so leadership could plan expansion with confidence.",
  },
  {
    title: "Company Budget",
    category: "Book Keeping",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=85",
    icon: WalletCards,
    metric: "Monthly close cut to 5 days",
    desc: "Rebuilt the bookkeeping workflow, organized vendor categories, and gave management a clear budget-versus-actual dashboard.",
  },
  {
    title: "Consultation",
    category: "Loan Management",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    icon: MessageCircle,
    metric: "Loan package approved",
    desc: "Reviewed financial statements, prepared supporting schedules, and guided the owner through lender questions before submission.",
  },
  {
    title: "Startup Funding",
    category: "Growth Strategies",
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=85",
    icon: BarChart3,
    metric: "3 funding scenarios modeled",
    desc: "Built founder-friendly forecasts with revenue assumptions, burn-rate tracking, runway planning, and practical reporting milestones.",
  },
  {
    title: "Credible Funds",
    category: "Audit & Assurance",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
    icon: ShieldCheck,
    metric: "Audit file organized",
    desc: "Prepared reconciliations, evidence folders, and control notes so the client entered review season with clean, credible records.",
  },
] satisfies Array<{ title: string; category: string; src: string; icon: LucideIcon; metric: string; desc: string }>;

export function CaseStudyPage() {
  return (
    <PageFrame>
      <InnerHero title="Project We Have Done" current="Case Study" />
      <LogoStrip />
      <CaseStudyGrid />
      <TestimonialsSection />
    </PageFrame>
  );
}

export function CaseStudyGrid() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <motion.div variants={staggerContainer} className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map(({ title, category, src, icon: Icon, metric, desc }, index) => {
            return (
              <motion.article key={title} variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -7 }} className="group rounded-[16px] border-2 border-dashed border-[#d7bdf2] bg-[#F8F3FF] p-5 shadow-[0_12px_30px_rgba(23,19,33,0.05)]">
                <div className="relative h-44 overflow-hidden rounded-[12px]">
                  <Image src={src} alt={title} fill sizes="360px" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${index % 2 ? "bg-white text-[#171321]" : "bg-[#171321] text-white"}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-black">{title}</h3>
                      <p className="text-sm text-[#6B6475]">{category}</p>
                    </div>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d7bdf2] text-white transition group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
                <div className={`mt-5 rounded-[10px] p-5 ${index % 2 ? "bg-white text-[#6B6475]" : "bg-[#171321] text-white"}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.12em] ${index % 2 ? "text-[#9c75d1]" : "text-[#d7bdf2]"}`}>{metric}</p>
                  <p className="mt-3 text-sm leading-7">{desc}</p>
                  <a href="/contact" className={`mt-4 inline-flex items-center gap-2 text-sm font-black transition group-hover:gap-3 ${index % 2 ? "text-[#171321]" : "text-white"}`}>
                    Discuss Similar Work <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function PricingPage() {
  return (
    <PageFrame>
      <InnerHero title="Pricing Plan" current="Pricing" />
      <LogoStrip />
      <PricingSection />
      <AppointmentSection />
      <TestimonialsSection />
    </PageFrame>
  );
}

export function AppointmentSection() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold">Make <Highlight>Appointment</Highlight> Now</p>
          <h2 className="mt-4 text-[36px] font-black leading-[1.08] md:text-[48px]">Needs Professional Accountant & Tax Service? Booking Now!</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Tell us what you need and we will recommend the right accounting, tax, audit, or payroll package.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-[960px] gap-6 rounded-[16px] border-2 border-dashed border-[#d7bdf2] bg-white p-4 shadow-[0_18px_42px_rgba(23,19,33,0.08)] md:grid-cols-2">
          <div className="relative min-h-[330px] overflow-hidden rounded-[14px]">
            <Image src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=85" alt="Accountant appointment" fill sizes="480px" className="object-cover" />
          </div>
          <form className="grid gap-4 rounded-[14px] bg-[#3f334f] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Name" className="rounded-full bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45" />
              <input placeholder="Date" className="rounded-full bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45" />
            </div>
            <input placeholder="Email" className="rounded-full bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45" />
            <textarea placeholder="Request" className="min-h-28 rounded-[18px] bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/45" />
            <button type="button" className="rounded-full bg-[#d7bdf2] px-5 py-4 text-sm font-bold text-[#171321]">Booking Now</button>
          </form>
        </div>
      </Container>
    </motion.section>
  );
}

const blogPosts = [
  ["Why You Must Choose Advance Idea For Finance?", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85"],
  ["Answering Your Questions About Automating Accounts", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"],
  ["Top Money Market Rates: Discover Premier Accounts", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"],
  ["Combining Graphic Brilliance With Technical Excellence", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"],
  ["Simplify Sales Tax Compliance With Outsourcing", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85"],
  ["Budgeting Basics: Keeping Your Finances Healthy", "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85"],
];

export function BlogPage() {
  return (
    <PageFrame>
      <InnerHero title="Our Latest Blog" current="Blog" />
      <LogoStrip />
      <BlogGrid />
    </PageFrame>
  );
}

function BlogGrid() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(([title, src]) => (
            <motion.article key={title} variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -7 }} className="group overflow-hidden rounded-[14px] bg-white shadow-[0_16px_42px_rgba(23,19,33,0.10)]">
              <div className="relative h-60 overflow-hidden">
                <Image src={src} alt={title} fill sizes="380px" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-black leading-7">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B6475]">Practical accounting guidance for cleaner records, better planning, and fewer surprises.</p>
                <DarkButton>Learn more</DarkButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function FAQPage() {
  return (
    <PageFrame>
      <InnerHero title="Frequently Asked Questions" current="FAQ's" />
      <LogoStrip />
      <FAQFullSection />
      <ConsultationBanner />
      <PopularQuestions />
    </PageFrame>
  );
}

function FAQFullSection() {
  const reduceMotion = useReducedMotion();
  const questions = [
    {
      question: "How To Change My Photo From Admin Dashboard?",
      answer: "Yes. You can send updated documents securely and we will confirm what changed before updating your file.",
    },
    {
      question: "How To Change My Password Easily?",
      answer: "Use the password reset option on the client portal, or contact AAPC and we will guide you through a secure reset.",
    },
    {
      question: "How To Change My Subscription Plan Using PayPal",
      answer: "Tell us which package you want to move to and we will confirm the new monthly amount before updating your PayPal billing.",
    },
    {
      question: "What Payment Methods Are Available?",
      answer: "We support secure online payments, PayPal billing, bank transfer, and scheduled monthly payment options for active clients.",
    },
    {
      question: "Where Can I Find Market Research Reports?",
      answer: "Client reports are shared through your secure workspace after review. You can also request a fresh copy from our team.",
    },
    {
      question: "How Can You Help With Tax Preparation?",
      answer: "We review your documents, organize deductions, prepare filings, and explain the tax position before anything is submitted.",
    },
    {
      question: "How Do You Help Risk Management?",
      answer: "We highlight cash-flow, compliance, payroll, and recordkeeping risks early so your business can act before deadlines become stressful.",
    },
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div variants={staggerContainer} className="grid gap-3">
          {questions.map((item) => (
            <motion.details key={item.question} variants={fadeUp} className="rounded-[18px] border border-[#d7bdf2] bg-[#d7bdf2] px-7 py-4 text-sm font-bold">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                {item.question}
                <ChevronDown className="h-4 w-4" />
              </summary>
              <p className="mt-4 font-medium leading-7 text-[#4b3f5c]">{item.answer}</p>
            </motion.details>
          ))}
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="text-sm font-bold">Asked <Highlight>Questions</Highlight></p>
          <h2 className="mt-4 text-[42px] font-black leading-[1.05]">Frequently Asked Questions</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Clear answers about onboarding, packages, audit support, payroll, tax filings, and monthly communication.</p>
          <div className="mt-7"><DarkButton>See More</DarkButton></div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

function ConsultationBanner() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[18px] bg-[#F3ECFF] px-8 py-14 md:px-12">
          <div className="absolute inset-0 opacity-70 [clip-path:ellipse(64%_28%_at_55%_70%)] bg-white" />
          <div className="relative max-w-xl">
            <h2 className="text-[34px] font-black leading-[1.08] md:text-[42px]">Still Confused About Our Features? Get A Consultation!</h2>
            <p className="mt-5 text-sm leading-7 text-[#6B6475]">Book a short consultation and we will map the service or package that fits your records, team size, and deadlines.</p>
            <div className="mt-7"><DarkButton>Start Chat Now</DarkButton></div>
          </div>
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=90" alt="Consultant" width={270} height={390} className="absolute bottom-0 right-16 hidden h-[320px] w-auto object-contain md:block" />
        </div>
      </Container>
    </motion.section>
  );
}

function PopularQuestions() {
  const reduceMotion = useReducedMotion();
  const popularQuestions = [
    {
      question: "How To Change My Photo From Admin Dashboard?",
      answer: "Yes. You can send updated documents securely and we will confirm what changed before updating your file.",
    },
    {
      question: "How To Change My Password Easily?",
      answer: "Use the password reset option on the client portal, or contact AAPC and we will guide you through a secure reset.",
    },
    {
      question: "How To Change My Subscription Plan Using PayPal",
      answer: "Tell us which package you want to move to and we will confirm the new monthly amount before updating your PayPal billing.",
    },
    {
      question: "What Payment Methods Are Available?",
      answer: "We support secure online payments, PayPal billing, bank transfer, and scheduled monthly payment options for active clients.",
    },
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold"><Highlight>Order</Highlight> & Payment</p>
          <h2 className="mt-4 text-[42px] font-black leading-[1.05]">Most Popular Questions</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Most clients ask about package changes, payment options, tax deadlines, payroll timing, and audit preparation.</p>
        </div>
        <motion.div variants={staggerContainer} className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <h3 className="text-2xl font-black text-[#b28de2]">Need More Help?</h3>
            <p className="mt-4 text-sm leading-7 text-[#6B6475]">Reach us for package advice, document checklists, service timelines, or account updates.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["News Update", "Job Search"].map((item) => (
                <motion.div key={item} variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -5 }} className="rounded-[16px] bg-[#F8F8F8] p-8 text-center">
                  <FileText className="mx-auto h-10 w-10 rounded-lg bg-[#d7bdf2] p-2 text-white" />
                  <h4 className="mt-5 text-xl font-black">{item}</h4>
                  <p className="mt-3 text-sm text-[#6B6475]">Helpful updates for clients and growing teams.</p>
                  <div className="mt-6"><DarkButton>{item === "News Update" ? "Read Now" : "Careers"}</DarkButton></div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {popularQuestions.map((item, index) => (
              <motion.details key={item.question} variants={fadeUp} open={index === 0} className="rounded-[18px] border border-[#d7bdf2] bg-[#F3ECFF] px-7 py-4 text-sm">
                <summary className="cursor-pointer font-bold">{item.question}</summary>
                <p className="mt-5 rounded-[18px] bg-white px-6 py-5 leading-7 text-[#6B6475]">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function ContactPage() {
  return (
    <PageFrame>
      <InnerHero title="Contact Us" current="Contact" />
      <LogoStrip />
      <ContactSection />
      <AppointmentSection />
    </PageFrame>
  );
}

function ContactSection() {
  const reduceMotion = useReducedMotion();
  const contactItems = [
    { title: "Email", value: "info@aapc.co", href: "mailto:info@aapc.co", icon: Mail },
    { title: "Phone", value: "(604) 123-4567", href: "tel:+16041234567", icon: Phone },
    { title: "Office", value: "Vancouver, BC", href: "#", icon: MapPin },
    { title: "Business Hours", value: "Mon - Fri, 9:00 AM - 5:00 PM", href: "#", icon: Landmark },
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.form variants={fadeUp} className="rounded-[18px] border-2 border-dashed border-[#d7bdf2] bg-[#F8F3FF] p-6 md:p-8">
          <h2 className="text-2xl font-black">Send Us A Message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input placeholder="Full Name" className="rounded-full bg-white px-5 py-4 text-sm outline-none" />
            <input placeholder="Email Address" className="rounded-full bg-white px-5 py-4 text-sm outline-none" />
          </div>
          <input placeholder="Subject" className="mt-4 w-full rounded-full bg-white px-5 py-4 text-sm outline-none" />
          <textarea placeholder="Tell us about your accounting, tax, payroll, or audit needs" className="mt-4 min-h-36 w-full rounded-[18px] bg-white px-5 py-4 text-sm outline-none" />
          <button type="button" className="mt-5 rounded-full bg-[#171321] px-7 py-3 text-sm font-bold text-white">Send Message</button>
        </motion.form>
        <motion.div variants={staggerContainer} className="grid gap-5">
          {contactItems.map(({ title, value, href, icon: Icon }) => (
            <motion.a key={title} href={href} variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -5 }} className="flex gap-4 rounded-[16px] bg-white p-6 shadow-[0_16px_42px_rgba(23,19,33,0.08)]">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9D8FF] text-[#8c6fc2]">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-black">{title}</span>
                <span className="mt-1 block text-sm leading-6 text-[#6B6475]">{value}</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
