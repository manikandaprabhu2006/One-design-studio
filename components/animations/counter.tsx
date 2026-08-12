"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
