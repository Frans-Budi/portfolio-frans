"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative isolate reveal">
      <div className="absolute inset-x-0 -top-8 -bottom-8 rounded-full bg-primary/12 blur-3xl" />
      <div className="relative min-h-105 px-2 py-4 sm:min-h-130 sm:px-4 sm:py-6 lg:min-h-160 lg:px-6 lg:py-8">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-0 top-3 w-[90%] sm:w-[86%] lg:w-[90%]"
        >
          <Image
            src="/media/hero-web.webp"
            alt="CPay web checkout preview"
            width={1500}
            height={1200}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
          />
        </motion.div>

        <motion.div
          animate={{ y: [6, 0, 6] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1 top-18 z-10 w-[40%] max-w-67.5 translate-y-[6%] sm:left-2 sm:w-[38%] sm:max-w-77.5 md:top-26 lg:left-0 lg:w-[37%] lg:max-w-90"
        >
          <Image
            src="/media/hero-mobile.webp"
            alt="CPay mobile order details preview"
            width={750}
            height={1626}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_30px_100px_rgba(0,0,0,0.34)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
