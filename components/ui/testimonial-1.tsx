"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { premiumEase } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  logo: string;
  isIncrease: boolean;
}

const stats: StatItem[] = [
  {
    value: 80,
    suffix: "%",
    label: "less manual record work",
    isIncrease: false,
    logo: "CRA",
  },
  {
    value: 30,
    suffix: "%",
    label: "faster monthly close",
    isIncrease: false,
    logo: "Xero",
  },
  {
    value: 25,
    suffix: "%",
    label: "cleaner reconciliations",
    isIncrease: false,
    logo: "QB",
  },
  {
    value: 100,
    prefix: "$",
    suffix: "K",
    label: "planned annual savings",
    isIncrease: true,
    logo: "AAPC",
  },
];

export default function Testimonial1() {
  const reduceMotion = useReducedMotion();
  const textReveal = reduceMotion ? false : { opacity: 0, y: 20 };
  const textVisible = { opacity: 1, y: 0 };
  const imageReveal = reduceMotion ? false : { opacity: 0, scale: 0.9 };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#f8f3ff_0%,#ffffff_50%,#eef7ff_100%)] px-5 py-14 text-[#171321] md:px-8 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/80 bg-white/86 px-4 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#6B6475] shadow-[0_10px_24px_rgba(23,19,33,0.06)]">
            Our Community
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl text-center text-[#171321]">
          <h2 className="text-[30px] font-black leading-tight md:text-4xl lg:text-5xl">
            <span className="inline-block align-middle">
              <motion.span className="inline-block" initial={textReveal} animate={textVisible} transition={{ duration: 0.65, ease: premiumEase }}>
                We make it easy for
              </motion.span>
            </span>
            <TooltipPrimitive.Provider delayDuration={120}>
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                  <span className="relative mx-2 inline-block align-middle">
                    <motion.span initial={imageReveal} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: premiumEase }} className="block h-12 w-12 overflow-hidden rounded-full border-2 border-white transition-all duration-300 md:h-16 md:w-16 md:hover:w-36">
                      <Image
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=220&q=85"
                        alt="Small business client"
                        width={144}
                        height={64}
                        sizes="(max-width: 768px) 48px, 144px"
                        className="h-full w-full object-cover"
                      />
                    </motion.span>
                  </span>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                  side="bottom"
                  sideOffset={10}
                  className="z-50 max-w-xs rounded-lg bg-white p-4 text-left text-[#171321] shadow-[0_18px_44px_rgba(23,19,33,0.16)]"
                >
                  <p className="mb-2 text-sm leading-6 text-[#6B6475]">
                    AAPC gave us clean reports, fewer surprises, and a practical tax plan before deadlines got close.
                  </p>
                  <p className="text-sm font-black">Daniel Brooks</p>
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Root>
            </TooltipPrimitive.Provider>
            <span className="inline-block align-middle">
              <motion.span className="inline-block" initial={textReveal} animate={textVisible} transition={{ duration: 0.65, delay: 0.08, ease: premiumEase }}>
                small businesses
              </motion.span>
            </span>
          </h2>

          <h2 className="mt-2 text-[30px] font-black leading-tight md:text-4xl lg:text-5xl">
            <span className="inline-block align-middle">
              <motion.span className="inline-block" initial={textReveal} animate={textVisible} transition={{ duration: 0.65, delay: 0.12, ease: premiumEase }}>
                and their
              </motion.span>
            </span>
            <TooltipPrimitive.Provider delayDuration={120}>
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                  <span className="relative mx-2 inline-block align-middle">
                    <motion.span initial={imageReveal} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.1, ease: premiumEase }} className="block h-14 w-14 overflow-hidden rounded-full border-2 border-white transition-all duration-300 md:h-16 md:w-16 md:hover:w-36">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=220&q=85"
                        alt="Business owner"
                        width={144}
                        height={64}
                        sizes="(max-width: 768px) 56px, 144px"
                        className="h-full w-full object-cover"
                      />
                    </motion.span>
                  </span>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                  side="bottom"
                  sideOffset={10}
                  className="z-50 max-w-xs rounded-lg bg-white p-4 text-left text-[#171321] shadow-[0_18px_44px_rgba(23,19,33,0.16)]"
                >
                  <p className="mb-2 text-sm leading-6 text-[#6B6475]">
                    Payroll and remittances are finally predictable. The team keeps everything tidy and easy to review.
                  </p>
                  <p className="text-sm font-black">Amanda Monroe</p>
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Root>
            </TooltipPrimitive.Provider>
            <span className="inline-block align-middle">
              <motion.span className="inline-block" initial={textReveal} animate={textVisible} transition={{ duration: 0.65, delay: 0.18, ease: premiumEase }}>
                teams manage
              </motion.span>
            </span>
          </h2>
          <h2 className="mt-2 text-[30px] font-black leading-tight text-[#251f30] md:text-4xl lg:text-5xl">
            <motion.span className="block" initial={textReveal} animate={textVisible} transition={{ duration: 0.65, delay: 0.24, ease: premiumEase }}>
              accounting with confidence
            </motion.span>
          </h2>
        </div>

        <div className="mx-auto mt-9 grid w-full gap-4 rounded-[14px] border border-white/80 bg-white/82 p-5 shadow-[0_18px_54px_rgba(23,19,33,0.09)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.09, ease: premiumEase }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative flex min-h-[108px] items-center justify-center overflow-hidden rounded-[12px] bg-[linear-gradient(145deg,#F8F3FF_0%,#EEF7FF_100%)] px-4 py-5 lg:bg-transparent"
            >
              {index !== 0 ? <div className="absolute left-0 hidden h-12 border-l border-dashed border-[#D8C8EF] lg:block" /> : null}
              <div className="flex h-full w-full items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-12 group-hover:opacity-0">
                <span className="text-2xl font-black tracking-[-0.04em] text-[#6B6475]">{stat.logo}</span>
              </div>
              <div className="absolute inset-0 flex translate-y-10 flex-col items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-center gap-2">
                  {stat.isIncrease ? (
                    <ArrowUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <ArrowDown className="h-5 w-5 text-[#171321]" />
                  )}
                  <span className="text-3xl font-black text-[#171321]"><AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /></span>
                </div>
                <p className="mt-1 max-w-[150px] text-center text-xs font-semibold capitalize leading-5 text-[#6B6475]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
