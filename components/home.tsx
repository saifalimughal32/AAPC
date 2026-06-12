"use client";

import { animate, motion, type Variants, useInView, useReducedMotion, useScroll } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Newspaper,
  Phone,
  PieChart,
  Play,
  Plus,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  WalletCards,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DARK = "#171321";
const LAVENDER = "#F3ECFF";
const LAVENDER_LIGHT = "#F8F3FF";
const HIGHLIGHT = "#E9D8FF";
const MUTED = "#6B6475";

const navLinks = ["Home", "About Us", "Service", "Resources"];

const images = {
  hero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90",
  heroOffice: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=90",
  video: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
  planning: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  blogOne: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
  blogTwo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
  blogThree: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85",
  avatarOne: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=85",
  avatarTwo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=85",
  avatarThree: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=85",
};

const premiumEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: premiumEase } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: premiumEase } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: premiumEase } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const floatingCard = {
  y: [0, -6, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
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

function DarkButton({ children, href = "/contact" }: { children: React.ReactNode; href?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className="inline-flex h-10 items-center justify-center rounded-full bg-[#171321] px-6 text-sm font-bold text-white shadow-[0_12px_24px_rgba(23,19,33,0.12)] transition hover:bg-[#2b2438]"
    >
      {children}
    </motion.a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="AAPC home">
      <span className="relative h-12 w-12 shrink-0" aria-hidden="true">
        <span className={`absolute left-1 top-1 h-10 w-10 rounded-tl-[16px] border-l-[7px] border-t-[7px] ${light ? "border-[#d7bdf2]" : "border-[#b28de2]"}`} />
        <span className={`absolute bottom-2 left-3 h-5 w-2.5 rounded-t-sm ${light ? "bg-[#d7bdf2]" : "bg-[#b28de2]"}`} />
        <span className={`absolute bottom-2 left-[24px] h-7 w-3 rounded-t-sm ${light ? "bg-[#d7bdf2]" : "bg-[#b28de2]"}`} />
        <span className={`absolute bottom-1 left-1 h-8 w-11 rounded-br-[24px] border-b-[7px] border-r-[7px] ${light ? "border-white" : "border-[#171321]"} -rotate-[18deg]`} />
        <span className={`absolute right-0 top-4 h-0 w-0 border-b-[8px] border-l-[10px] border-t-[8px] border-b-transparent border-t-transparent ${light ? "border-l-white" : "border-l-[#171321]"} rotate-[-18deg]`} />
      </span>
      <span className="leading-none">
        <span className={`block text-[25px] font-black tracking-wide ${light ? "text-white" : "text-[#171321]"}`}>AAPC</span>
        <span className={`mt-1 hidden text-[10px] font-bold tracking-wide sm:block ${light ? "text-[#d7bdf2]" : "text-[#b28de2]"}`}>Your Choice For Small Business</span>
      </span>
    </a>
  );
}

const navHref = (link: string) => {
  if (link === "Home") return "/";
  if (link === "About Us") return "/about";
  if (link === "Service") return "/service";
  return "/case-study";
};

const pageLinks = [
  { label: "Team", href: "/team" },
  { label: "Case Study", href: "/case-study" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Bookkeeping", href: "/service#bookkeeping" },
  { label: "Tax Planning", href: "/service#tax-planning" },
  { label: "Payroll", href: "/service#payroll" },
  { label: "Audit & Assurance", href: "/service#audit" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => scrollY.on("change", (latest) => setScrolled(latest > 12)), [scrollY]);

  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 bg-white/95 transition ${scrolled ? "backdrop-blur-md shadow-sm shadow-black/5" : ""}`}
    >
      <Container className="py-4 md:py-5">
        <div className="mx-auto flex h-[78px] max-w-[1120px] items-center justify-between rounded-full bg-[#F4ECFF] px-7 shadow-[0_18px_46px_rgba(23,19,33,0.035)] md:px-10">
          <Logo />
          <nav className="hidden items-center gap-20 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link} className="group relative">
                <a href={navHref(link)} className="relative text-[15px] font-semibold text-[#171321] transition duration-300 hover:text-[#9c75d1]">
                  {link}
                  {link === "Resources" ? <ChevronDown className="ml-1 inline h-3.5 w-3.5" /> : null}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8c6fc2] transition-all duration-300 group-hover:w-full" />
                </a>
                {link === "Resources" ? (
                  <div className="invisible absolute left-1/2 top-8 z-20 w-48 -translate-x-1/2 rounded-[14px] border border-[#E8E2F2] bg-white p-2 opacity-0 shadow-[0_18px_44px_rgba(23,19,33,0.10)] transition duration-200 group-hover:visible group-hover:opacity-100">
                    {pageLinks.map((item) => (
                      <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-sm font-bold text-[#171321] hover:bg-[#F3ECFF] hover:text-[#8c6fc2]">
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="hidden lg:block">
            <DarkButton href="/contact">Contact Us</DarkButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8E2F2] text-[#171321] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="mx-auto mt-3 grid max-w-[1120px] gap-2 rounded-[22px] border border-[#E8E2F2] bg-white p-3 lg:hidden">
            {navLinks.map((link) => (
              <a key={link} href={navHref(link)} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-[#171321] hover:bg-[#F3ECFF]">
                {link}
              </a>
            ))}
            {pageLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-[#171321] hover:bg-[#F3ECFF]">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </motion.header>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="bg-white pb-14 pt-10 text-[#171321] md:pb-20 md:pt-14 lg:pt-16">
      <Container className="grid items-center gap-12 lg:max-w-[1280px] lg:grid-cols-[0.95fr_1.25fr] lg:gap-[70px]">
        <motion.div initial={false} animate="visible" variants={staggerContainer}>
          <motion.p variants={fadeUp} className="text-[15px] font-semibold tracking-[-0.01em] md:text-base">
            Welcome To <Highlight>AAPC</Highlight> Accounting Firm
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-7 max-w-[560px] text-[42px] font-bold leading-[1.12] tracking-[-0.03em] text-[#251f30] sm:text-[54px] md:text-[62px] lg:text-[64px]">
            We Specialize Accounting & Financial
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-[520px] text-[15px] font-medium leading-8 text-[#40364c]">
            Smart bookkeeping, tax planning, and reporting support for founders, families, and growing teams.
          </motion.p>
          <motion.div variants={fadeUp} whileHover={reduceMotion ? undefined : { y: -5 }} className="group mt-12 max-w-[410px] transition md:mt-[70px]">
            <div className="relative h-[190px] overflow-hidden rounded-[15px] bg-[#F3ECFF] shadow-[0_14px_32px_rgba(23,19,33,0.06)] transition group-hover:shadow-[0_18px_38px_rgba(23,19,33,0.10)]">
              <Image src={images.video} alt="Business planning meeting" fill sizes="410px" priority className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              <motion.button
                aria-label="Play video"
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="absolute right-6 top-6 inline-flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#251f30] p-4 text-white shadow-[0_10px_24px_rgba(23,19,33,0.18)]"
              >
                <Play className="ml-0.5 h-5 w-5 fill-white" />
              </motion.button>
            </div>
            <p className="mt-[18px] text-base font-bold leading-[1.45] text-[#251f30]">Trusted Accounting<br />Starts With Clarity</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate="visible"
          variants={slideInRight}
          className="relative mx-auto flex w-full max-w-[680px] flex-col gap-6 lg:h-[610px] lg:max-w-none lg:block"
        >
          <motion.aside
            initial={false}
            animate="visible"
            variants={staggerContainer}
            className="relative order-2 min-h-[560px] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#d4b4f1] to-[#f7f0fb] p-[30px] shadow-[0_12px_30px_rgba(23,19,33,0.045)] lg:absolute lg:right-0 lg:top-10 lg:z-[1] lg:h-[590px] lg:w-[410px]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.45),transparent_40%)] opacity-90" />
              <div className="absolute -bottom-[95px] -right-40 h-[390px] w-[390px] rounded-[45%_55%_60%_40%] border-[42px] border-[#ae87d7]/15" />
            </div>
          <motion.div
            initial={false}
            animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, ...floatingCard }}
            className="relative z-[3] ml-auto w-[210px] rounded-[16px] bg-white p-[25px] shadow-[0_25px_45px_rgba(45,33,62,0.14)]"
          >
            <div className="text-[42px] font-bold leading-none text-[#251f30]">4,9/5</div>
            <p className="mt-[22px] text-sm font-medium leading-[1.7] text-[#40364c]">Trusted by clients who value clear financial direction.</p>
            <div className="mt-[14px] flex gap-0.5 text-lg tracking-[2px] text-[#f4a328]">★★★★★</div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative z-[3] ml-auto mt-[105px] flex h-[58px] w-[205px] items-center rounded-full bg-white px-3 py-2 shadow-[0_20px_35px_rgba(45,33,62,0.15)]">
            {[images.avatarOne, images.avatarTwo, images.avatarThree].map((src, index) => (
              <Image key={src} src={src} alt="" width={42} height={42} loading="eager" className={`h-[42px] w-[42px] rounded-full border-2 border-white object-cover ${index > 0 ? "-ml-2.5" : ""}`} />
            ))}
            <span className="ml-1.5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d6b8f1] text-white">
              <Plus className="h-7 w-7" />
            </span>
          </motion.div>
          <motion.div
            initial={false}
            animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -5, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
            className="group relative z-[3] ml-20 mt-[30px] lg:ml-[145px]"
          >
            <h2 className="max-w-[250px] text-[31px] font-bold leading-[1.12] tracking-[-0.03em] text-[#251f30]">Get To Know Our Business</h2>
            <a href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#251f30]">
              Let&apos;s Get Started <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
          </motion.aside>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative order-1 h-[500px] overflow-hidden rounded-[16px] shadow-[0_24px_50px_rgba(37,31,48,0.08)] sm:h-[540px] lg:absolute lg:left-0 lg:top-[115px] lg:z-[2] lg:h-[520px] lg:w-[395px]"
          >
            <Image src={images.hero} alt="AAPC financial advisor" fill sizes="395px" priority className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export function LogoStrip() {
  const partners = [
    {
      name: "Intuit QuickBooks",
      mark: "qb",
      className: "tracking-[-0.03em]",
      render: (
        <>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/75 text-sm font-black tracking-[-0.08em]">qb</span>
          <span className="leading-[0.95]">
            <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Intuit</span>
            <span className="block text-xl font-black tracking-[-0.06em]">quickbooks</span>
          </span>
        </>
      ),
    },
    {
      name: "Xero",
      mark: "xero",
      className: "tracking-[-0.04em]",
      render: <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg font-black lowercase text-[#171321]">xero</span>,
    },
    {
      name: "Bill.com",
      mark: "bill.com",
      className: "text-3xl font-black tracking-[-0.08em]",
      render: (
        <span>
          <span className="font-black">bill</span><span className="font-medium text-white/75">.com</span>
        </span>
      ),
    },
    {
      name: "Gusto",
      mark: "GUSTO",
      className: "text-3xl font-semibold tracking-[0.16em]",
      render: <span>GUSTO</span>,
    },
    {
      name: "Hubdoc",
      mark: "Hubdoc",
      className: "text-3xl font-black tracking-[-0.05em]",
      render: (
        <span>
          Hubdoc<span className="align-super text-[10px] font-bold">TM</span>
        </span>
      ),
    },
  ];
  const marqueePartners = [...partners, ...partners];
  return (
    <section className="bg-white py-8" aria-label="Accounting software partners">
      <Container>
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-[1120px] overflow-hidden rounded-[14px] bg-[#171321] px-8 py-6 text-white shadow-[0_18px_46px_rgba(23,19,33,0.08)]"
        >
          <div className="partner-marquee flex w-max items-center gap-0">
            {marqueePartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                variants={fadeUp}
                aria-label={partner.name}
                className={`flex min-w-[190px] shrink-0 items-center justify-center gap-3 border-r border-white/24 px-8 text-white/82 transition duration-300 hover:text-white hover:opacity-100 ${partner.className}`}
              >
                {partner.render}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2.1,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="about" {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div whileHover={reduceMotion ? undefined : { y: -5 }} className="group transition">
          <div className="grid gap-4 sm:grid-cols-[1fr_0.95fr]">
            <div className="relative min-h-[220px] overflow-hidden rounded-[14px] bg-[#F3ECFF] shadow-[0_12px_28px_rgba(23,19,33,0.05)] transition group-hover:shadow-[0_20px_42px_rgba(23,19,33,0.10)]">
              <Image src={images.planning} alt="Financial planning meeting" fill sizes="400px" loading="eager" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <motion.button
                aria-label="Open planning details"
                whileHover={reduceMotion ? undefined : { x: 3 }}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#171321] text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
            <div className="relative overflow-hidden rounded-[14px] bg-[#F3ECFF] p-7">
              <div className="absolute -right-10 -top-4 h-36 w-36 rounded-full border-[30px] border-white/35" />
              <h3 className="relative text-lg font-black">Financial Planning</h3>
              <p className="relative mt-4 text-sm leading-6 text-[#6B6475]">Build a practical plan for cash flow, taxes, and business decisions.</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 rounded-[12px] bg-[#F3ECFF] py-5 text-center">
            {[
              { value: 15, suffix: "+", label: "Years Of Experience" },
              { value: 75, suffix: "+", label: "Team Member" },
              { value: 48, suffix: "K", label: "Project Complete" },
            ].map((stat, index) => {
              return (
                <div key={stat.label} className={index > 0 ? "border-l border-[#d8c8ef]" : ""}>
                  <div className="text-2xl font-black"><CountUp value={stat.value} suffix={stat.suffix} /></div>
                  <div className="mt-1 text-[11px] font-semibold text-[#6B6475]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="text-xs font-bold"><Highlight>Who</Highlight> We Are?</p>
          <h2 className="mt-4 max-w-[460px] text-[38px] font-black leading-[1.05] md:text-[44px]">Your Financial Partner For Success</h2>
          <p className="mt-5 max-w-[530px] text-sm leading-7 text-[#6B6475]">AAPC brings accounting discipline, tax awareness, and practical reporting into one clean advisory experience for small businesses.</p>
          <div className="mt-7 flex max-w-[420px] gap-4 rounded-[12px] bg-white p-4 shadow-[0_12px_34px_rgba(23,19,33,0.08)]">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E9D8FF] text-[#8c6fc2]"><WalletCards /></span>
            <div>
              <h3 className="font-black">Cost-Effective</h3>
              <p className="mt-1 text-sm leading-6 text-[#6B6475]">Clear monthly support with careful, useful financial guidance.</p>
            </div>
          </div>
          <div className="mt-6"><DarkButton href="/about">Learn More</DarkButton></div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

const serviceItems = [
  { title: "Tax Planning", icon: Calculator, desc: "Quarterly planning, filing reminders, and deduction reviews before deadlines arrive." },
  { title: "Payroll Process", icon: WalletCards, desc: "Employee payroll, remittances, and year-end slips handled with clean records." },
  { title: "Audit Services", icon: ClipboardCheck, desc: "Audit-ready schedules, reconciliations, and document packs for smoother reviews." },
  { title: "Finance Analysis", icon: BarChart3, desc: "Monthly insight on cash flow, margins, and the numbers that guide decisions." },
];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="services" {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold">We Have An Amazing <Highlight>Service</Highlight></p>
          <h2 className="mt-4 max-w-[420px] text-[38px] font-black leading-[1.05] md:text-[44px]">Real Accounting Services For You</h2>
          <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#6B6475]">Use one trusted team for recurring accounting, tax compliance, payroll, audit readiness, and advisory reporting.</p>
          <div className="mt-7"><DarkButton href="/service">See More</DarkButton></div>
        </div>
        <motion.div variants={staggerContainer} className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
          {serviceItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={fadeUp} className="group rounded-[14px] border border-[#E8E2F2] bg-white p-5 shadow-[0_12px_28px_rgba(23,19,33,0.05)] sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:p-0 sm:pb-7 sm:shadow-none">
                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E9D8FF] text-[#8c6fc2]">
                    <Icon className="h-6 w-6 transition duration-300 group-hover:scale-110" />
                  </span>
                  <div>
                    <h3 className="text-base font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#6B6475]">{item.desc}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function WorksSection() {
  const reduceMotion = useReducedMotion();
  const steps = [
    { title: "Consultation Section", icon: MessageCircle, dark: false, desc: "Share your current books, tax deadlines, and goals in a short discovery call." },
    { title: "Choose Your Package", icon: SearchCheck, dark: true, desc: "Pick monthly bookkeeping, tax, payroll, or a combined advisory plan." },
    { title: "Get Your Service", icon: FileCheck2, dark: false, desc: "Upload documents securely while AAPC keeps reports and next steps moving." },
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[16px] bg-[#F3ECFF] px-5 py-14 md:px-12">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/35" />
          <div className="absolute -right-28 -top-20 h-72 w-72 rounded-full border-[48px] border-white/35" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold">How It <Highlight dark>Works?</Highlight></p>
            <h2 className="mt-4 text-[34px] font-black leading-[1.1] md:text-[42px]">Check Out The Easy Way<br />To Get Our Services</h2>
            <p className="mt-4 text-sm leading-7 text-[#6B6475]">Start with a quick consultation, choose the support level, and let our team keep your finances clean.</p>
          </div>
          <motion.div variants={staggerContainer} className="relative mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  whileHover={reduceMotion ? undefined : { y: step.dark ? -8 : -5 }}
                  className={`group rounded-[14px] p-7 shadow-[0_14px_32px_rgba(23,19,33,0.08)] transition hover:shadow-[0_22px_46px_rgba(23,19,33,0.13)] ${step.dark ? "bg-[#171321] text-white" : "border border-dashed border-[#cab8e8] bg-white text-[#171321]"}`}
                >
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${step.dark ? "bg-white/10" : "bg-[#171321] text-white"}`}>
                    <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
                  </span>
                  <h3 className="mt-6 font-black">{step.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${step.dark ? "text-white/70" : "text-[#6B6475]"}`}>{step.desc}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export function PricingSection() {
  const reduceMotion = useReducedMotion();
  const plans = [
    ["Starter", "$306", "Monthly bookkeeping", "Quarterly reports", "Email support", "Year-end checklist"],
    ["Growth", "$406", "Payroll included", "Tax planning", "Monthly insights", "Sales tax support"],
    ["Enterprise", "$653", "Dedicated advisor", "Audit readiness", "Custom dashboards", "Priority response"],
  ];
  return (
    <motion.section id="pricing" {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-24 lg:pt-10">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <motion.div variants={staggerContainer} className="grid gap-5 lg:min-h-[850px]">
          {plans.map((plan, index) => (
            <motion.article
              key={plan[0]}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6, scale: index === 1 ? 1.01 : 1 }}
              style={{ zIndex: index + 1 }}
              className={`grid gap-5 rounded-[14px] p-7 shadow-[0_12px_26px_rgba(23,19,33,0.04)] transition hover:shadow-[0_20px_42px_rgba(23,19,33,0.10)] md:grid-cols-[0.8fr_1fr] lg:sticky lg:top-28 lg:mb-[30vh] lg:last:mb-0 ${index === 0 ? "bg-[#171321] text-white" : "bg-[#F3ECFF] text-[#171321]"}`}
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-black"><Star className="h-4 w-4" />{plan[0]}</div>
                <div className="mt-4 text-[30px] font-black">{plan[1]} <span className="text-xs font-semibold">/month</span></div>
                <motion.a href="/contact" whileHover={reduceMotion ? undefined : { y: -2 }} className={`mt-5 inline-flex rounded-full px-5 py-2 text-xs font-black ${index === 0 ? "bg-white text-[#171321]" : "bg-[#171321] text-white"}`}>Select Plan</motion.a>
              </div>
              <ul className={`grid gap-3 border-l pl-6 text-sm ${index === 0 ? "border-white/20 text-white/78" : "border-[#d8c8ef] text-[#6B6475]"}`}>
                {plan.slice(2).map((feature) => <li key={feature} className="flex gap-2"><Check className="h-4 w-4 shrink-0" />{feature}</li>)}
              </ul>
            </motion.article>
          ))}
        </motion.div>
        <div className="lg:sticky lg:top-32 lg:pt-14">
          <p className="text-xs font-bold">Funding <Highlight>Pricing</Highlight> Plan</p>
          <h2 className="mt-4 text-[38px] font-black leading-[1.05] md:text-[44px]">Choose Your Favorite Package</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Flexible packages for startups, growing teams, and companies that need deeper accounting, audit, and tax support.</p>
          <div className="mt-7"><DarkButton href="/pricing">See More</DarkButton></div>
        </div>
      </Container>
    </motion.section>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "AAPC gave us monthly clarity without adding complexity. Their team made tax season feel organized for the first time.",
      name: "Amanda Monroe",
      role: "Founder",
      avatar: images.avatarThree,
    },
    {
      quote: "Their bookkeeping support helped us understand cash flow every week. We stopped guessing and started making decisions with confidence.",
      name: "Daniel Brooks",
      role: "Operations Lead",
      avatar: images.avatarTwo,
    },
    {
      quote: "Payroll, sales tax, and reporting are finally handled on time. AAPC feels like a calm finance partner for our small team.",
      name: "Sofia Rahman",
      role: "Retail Owner",
      avatar: images.avatarOne,
    },
    {
      quote: "We needed cleaner year-end records and practical advice. The AAPC team explained every step and kept the process easy.",
      name: "Marcus Lee",
      role: "Agency Director",
      avatar: images.avatarTwo,
    },
  ];
  const testimonial = testimonials[activeTestimonial];
  const goToPreviousTestimonial = () => {
    setActiveTestimonial((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  const goToNextTestimonial = () => {
    setActiveTestimonial((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="text-xs font-bold">Client <Highlight>Testimonial</Highlight></p>
          <h2 className="mt-4 text-[36px] font-black leading-[1.08]">What They Say About Us?</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Clients rely on us for clean reporting, calm advice, and dependable accounting routines.</p>
          <div className="mt-7"><DarkButton href="/case-study">See More</DarkButton></div>
        </div>
        <motion.div variants={fadeUp} className="relative">
          <motion.article
            key={testimonial.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: premiumEase }}
            className="flex min-h-[300px] flex-col rounded-[14px] bg-white p-8 shadow-[0_16px_48px_rgba(23,19,33,0.10)] md:p-10"
          >
            <div className="text-[#F6B545]">
              {"★★★★★".split("").map((star, index) => (
                <motion.span key={index} initial={reduceMotion ? false : { opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  {star}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-[#6B6475]">{testimonial.quote}</p>
            <div className="mt-auto flex items-center gap-3 pt-8">
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }}>
                <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} loading="eager" className="h-12 w-12 rounded-full object-cover" />
              </motion.div>
              <div><div className="text-sm font-black">{testimonial.name}</div><div className="text-xs text-[#6B6475]">{testimonial.role}</div></div>
            </div>
          </motion.article>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show ${item.name} testimonial`}
                  className={`h-2.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#171321]" : "w-2.5 bg-[#E9D8FF]"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={goToPreviousTestimonial} aria-label="Previous testimonial" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9D8FF] text-[#171321] transition hover:bg-[#F3ECFF]">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={goToNextTestimonial} aria-label="Next testimonial" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171321] text-white shadow-[0_12px_24px_rgba(23,19,33,0.12)] transition hover:bg-[#2b2438]">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function FAQSection() {
  const reduceMotion = useReducedMotion();
  const faqs = [
    {
      question: "What documents do I need to get started?",
      answer: "Usually your prior-year tax return, recent bank statements, bookkeeping exports, payroll records, and any CRA notices. We send a simple checklist after the first call.",
    },
    {
      question: "Do you work with businesses outside Vancouver?",
      answer: "Yes. Most AAPC work can be handled remotely through secure document sharing, video calls, and clear monthly reporting.",
    },
    {
      question: "Can you help before tax season starts?",
      answer: "Yes. We can review your records, estimate tax exposure, organize deductions, and set up a quarterly planning rhythm before deadlines become stressful.",
    },
    {
      question: "Which accounting software do you support?",
      answer: "We work with QuickBooks, Xero, Bill.com, Gusto, Hubdoc, and clean spreadsheet exports when a client is still transitioning systems.",
    },
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={staggerContainer} className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.details key={faq.question} variants={fadeUp} open={index === 0} className="overflow-hidden rounded-[12px] border border-[#E8E2F2] bg-[#F3ECFF] px-5 py-4 text-sm transition hover:border-[#d2bdeb]">
              <summary className="cursor-pointer font-black">{faq.question}</summary>
              <p className="mt-4 leading-7 text-[#6B6475]">{faq.answer}</p>
            </motion.details>
          ))}
        </motion.div>
        <div>
          <p className="text-xs font-bold">Asked <Highlight>Questions</Highlight></p>
          <h2 className="mt-4 text-[38px] font-black leading-[1.05]">Frequently Asked Questions</h2>
          <p className="mt-5 text-sm leading-7 text-[#6B6475]">Answers to common questions about onboarding, reporting, payroll, and tax planning.</p>
          <div className="mt-7"><DarkButton href="/faq">See More</DarkButton></div>
        </div>
      </Container>
    </motion.section>
  );
}

export function BlogSection() {
  const reduceMotion = useReducedMotion();
  const posts = [
    ["Why You Must Choose Advanced Idea For Finance?", images.blogOne],
    ["Answering Your Questions About Accounting Answers", images.blogTwo],
    ["Top Money Metrics Rates Discover Premier Accounting", images.blogThree],
  ];
  return (
    <motion.section {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold">Our Latest <Highlight>Blog</Highlight></p>
          <h2 className="mt-4 text-[38px] font-black leading-[1.05]">AAPC News Update</h2>
          <p className="mt-4 text-sm leading-7 text-[#6B6475]">Fresh notes on tax planning, bookkeeping, operations, and financial clarity.</p>
        </div>
        <motion.div variants={staggerContainer} className="mt-10 grid gap-7 md:grid-cols-3">
          {posts.map(([title, src]) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group overflow-hidden rounded-[12px] bg-white shadow-[0_16px_38px_rgba(23,19,33,0.10)] transition hover:shadow-[0_24px_54px_rgba(23,19,33,0.13)]"
            >
              <div className="relative h-44 overflow-hidden"><Image src={src} alt={title} fill sizes="360px" loading="eager" className="object-cover transition duration-700 group-hover:scale-[1.05]" /></div>
              <div className="p-6">
                <h3 className="text-base font-black leading-6">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B6475]">Practical ideas for keeping your finance operations simple and useful.</p>
                <a href="/blog" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#171321] px-5 py-2 text-xs font-black text-white">
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section id="contact" {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-8 rounded-[18px] bg-[#171321] p-8 text-white md:grid-cols-[1fr_0.75fr] md:p-12">
          <div>
            <p className="text-xs font-bold text-white/60">Contact CTA</p>
            <h2 className="mt-4 max-w-xl text-[34px] font-black leading-[1.08]">Ready To Make Your Finances Clear And Stress Free?</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a href="/pricing" whileHover={reduceMotion ? undefined : { y: -3 }} className="rounded-full bg-white px-6 py-3 text-sm font-black text-[#171321]">View Packages</motion.a>
              <motion.a href="/contact" whileHover={reduceMotion ? undefined : { y: -3 }} className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white">Contact Us</motion.a>
            </div>
          </div>
          <motion.div variants={staggerContainer} className="grid gap-3">
            {["Bookkeeping", "Tax Planning", "Payroll"].map((item) => (
              <motion.div
                key={item}
                variants={slideInRight}
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[12px] bg-white/8 p-4 text-sm font-bold"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

export function Footer() {
  const reduceMotion = useReducedMotion();
  const cols: Record<string, { label: string; href: string }[]> = {
    Company: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Case Study", href: "/case-study" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    Services: serviceLinks,
    Contact: [
      { label: "info@aapc.co", href: "mailto:info@aapc.co" },
      { label: "(604) 123-4567", href: "tel:+16041234567" },
      { label: "Vancouver, BC", href: "/contact" },
    ],
  };
  return (
    <motion.footer {...revealProps(Boolean(reduceMotion))} variants={fadeUp} className="bg-white pb-12">
      <Container>
        <div className="rounded-[16px] bg-[#171321] px-8 py-10 text-white md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
            <div>
              <Logo light />
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">Clean accounting support for modern businesses that want calmer financial decisions.</p>
              <div className="mt-5 flex gap-2">
                {[Mail, Phone, MapPin].map((Icon, item) => (
                  <span key={item} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-white/80">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            </div>
            {Object.entries(cols).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-sm font-black">{title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-white/64">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="transition duration-300 hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-black">Join Us Now!</h3>
              <p className="mt-5 text-sm leading-7 text-white/64">Join our newsletter for finance clarity.</p>
              <div className="mt-4 flex rounded-full bg-white/10 p-1">
                <input aria-label="Email" placeholder="Email" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/40" />
                <motion.button whileHover={reduceMotion ? undefined : { y: -2 }} className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#171321]">Subscribe</motion.button>
              </div>
            </div>
          </div>
          <div className="mt-9 border-t border-white/10 pt-6 text-center text-xs text-white/50">© 2026 AAPC. Your Choice For Small Business.</div>
        </div>
      </Container>
    </motion.footer>
  );
}
