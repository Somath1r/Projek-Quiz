"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type MeteorsProps = {
  number?: number;
  className?: string;
};

export function Meteors({
  number = 15,
  className,
}: MeteorsProps) {
  const meteors = Array.from(
    { length: number },
    (_, index) => index
  );

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {meteors.map((meteor) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;

        return (
          <span
            key={meteor}
            className={cn(
              "meteor-particle",
              className
            )}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
}