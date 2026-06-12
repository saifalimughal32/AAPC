"use client";

import { motion } from "framer-motion";
import { fadeUp, premiumEase } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function Reveal({ children, className, delay = 0, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { duration: 0.65, ease: premiumEase, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
