"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  logo: string;
  isIncrease: boolean;
}

const stats: StatItem[] = [
  {
    value: "80%",
    label: "less manual record work",
    isIncrease: false,
    logo: "CRA",
  },
  {
    value: "30%",
    label: "faster monthly close",
    isIncrease: false,
    logo: "Xero",
  },
  {
    value: "25%",
    label: "cleaner reconciliations",
    isIncrease: false,
    logo: "QB",
  },
  {
    value: "$100K",
    label: "planned annual savings",
    isIncrease: true,
    logo: "AAPC",
  },
];

export default function Testimonial1() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3FF] px-5 py-16 text-[#171321] md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-white px-4 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#6B6475] shadow-[0_10px_24px_rgba(23,19,33,0.06)]">
            Our Community
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl text-center text-[#171321]">
          <h2 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
            We make it easy for
            <TooltipPrimitive.Provider delayDuration={120}>
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                  <span className="relative mx-2 inline-block align-middle">
                    <span className="block h-12 w-12 overflow-hidden rounded-full border-2 border-white transition-all duration-300 md:h-16 md:w-16 md:hover:w-36">
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=220&q=85"
                        alt="Small business client"
                        className="h-full w-full object-cover"
                      />
                    </span>
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
            small businesses
          </h2>

          <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
            and their
            <TooltipPrimitive.Provider delayDuration={120}>
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                  <span className="relative mx-2 inline-block align-middle">
                    <span className="block h-14 w-14 overflow-hidden rounded-full border-2 border-white transition-all duration-300 md:h-16 md:w-16 md:hover:w-36">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=220&q=85"
                        alt="Business owner"
                        className="h-full w-full object-cover"
                      />
                    </span>
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
            teams manage
          </h2>
          <h2 className="mt-2 text-3xl font-black leading-tight text-[#251f30] md:text-4xl lg:text-5xl">
            accounting with confidence
          </h2>
        </div>

        <div className="mx-auto mt-9 grid w-full gap-4 rounded-[14px] border border-[#E8E2F2] bg-white p-5 shadow-[0_16px_42px_rgba(23,19,33,0.08)] sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group relative flex min-h-[108px] items-center justify-center overflow-hidden rounded-[12px] bg-[#F8F3FF] px-4 py-5 lg:bg-transparent">
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
                  <span className="text-3xl font-black text-[#171321]">{stat.value}</span>
                </div>
                <p className="mt-1 max-w-[150px] text-center text-xs font-semibold capitalize leading-5 text-[#6B6475]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
