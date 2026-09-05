import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const target = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    const stepTime = Math.abs(Math.floor((duration * 1000) / target));
    const increment = Math.max(1, Math.ceil(target / (duration * 60)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono font-bold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}
