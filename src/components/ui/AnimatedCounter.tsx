"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelAbove?: string;
  labelBelow?: string;
  labelBelowHi?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
  labelAbove,
  labelBelow,
  labelBelowHi,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || shouldReduceMotion) {
      return;
    }

    hasAnimated.current = true;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * value);

      setDisplayValue(current);

      if (now < endTime) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration, shouldReduceMotion]);

  const renderedValue = shouldReduceMotion ? value : displayValue;

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {labelAbove && (
        <p className="text-xs text-[var(--color-ink-400)] mb-2 uppercase tracking-[0.2em] font-semibold">{labelAbove}</p>
      )}
      <p className="text-4xl md:text-5xl font-semibold text-[var(--color-ink-900)]">
        {prefix}
        {renderedValue}
        {suffix}
      </p>
      {labelBelow && (
        <p className="text-[var(--color-ink-500)] text-sm mt-2">
          {labelBelow}
          {labelBelowHi && (
            <>
              <br />
              <span className="hindi" lang="hi">{labelBelowHi}</span>
            </>
          )}
        </p>
      )}
    </motion.div>
  );
}

interface StatCardProps extends AnimatedCounterProps {
  featured?: boolean;
}

export function StatCard({
  featured = false,
  ...counterProps
}: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = "bg-white rounded-2xl p-6 shadow-sm";
  const featuredClasses = featured
    ? "border-2 border-black relative overflow-hidden"
    : "border border-neutral-200";

  const content = (
    <div className={`${baseClasses} ${featuredClasses}`}>
      {featured && (
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-black"
          aria-hidden="true"
        />
      )}
      <AnimatedCounter {...counterProps} />
    </div>
  );

  if (shouldReduceMotion) {
    return content;
  }

  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)" }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  );
}
