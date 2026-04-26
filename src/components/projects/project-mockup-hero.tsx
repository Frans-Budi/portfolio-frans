"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProjectMockupHeroProps = {
  leftSrc: string;
  rightSrc: string;
  altBase: string;
  priority?: boolean;
  className?: string;
};

export function ProjectMockupHero({
  leftSrc,
  rightSrc,
  altBase,
  priority = false,
  className,
}: ProjectMockupHeroProps) {
  return (
    <div className={cn("relative isolate overflow-visible", className)}>
      <div className="relative min-h-86 px-2 py-3 sm:min-h-104 sm:px-3 sm:py-4 lg:min-h-130 lg:px-4 lg:py-5">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-[12%] -top-3 w-[35%] max-w-36 sm:right-[28%] sm:w-[20%] sm:max-w-46 lg:right-[15%] lg:-top-5 lg:w-[32%] lg:max-w-55"
        >
          <Image
            src={rightSrc}
            alt={`${altBase} right mockup`}
            width={900}
            height={1800}
            priority={priority}
            className="h-auto w-full object-contain drop-shadow-[0_26px_90px_rgba(0,0,0,0.34)]"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-[12%] top-3 z-10 w-[35%] max-w-36 sm:left-[28%] sm:w-[20%] sm:max-w-46 lg:left-[15%] lg:top-5 lg:w-[32%] lg:max-w-55"
        >
          <Image
            src={leftSrc}
            alt={`${altBase} left mockup`}
            width={900}
            height={1800}
            priority={priority}
            className="h-auto w-full object-contain drop-shadow-[0_26px_90px_rgba(0,0,0,0.34)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
