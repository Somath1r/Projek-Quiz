import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

type BeamOptions = { x: number; duration: number; delay: number; repeatDelay: number; height: number };
const BEAMS: BeamOptions[] = [
  { x: 8, duration: 7, delay: 1, repeatDelay: 2, height: 130 },
  { x: 22, duration: 5, delay: 3, repeatDelay: 4, height: 90 },
  { x: 39, duration: 8, delay: 0, repeatDelay: 3, height: 150 },
  { x: 56, duration: 4.5, delay: 2, repeatDelay: 5, height: 115 },
  { x: 72, duration: 6, delay: 4, repeatDelay: 2, height: 170 },
  { x: 88, duration: 5.5, delay: 1, repeatDelay: 4, height: 105 },
];

export function BackgroundBeamsWithCollision({ className }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const [bursts, setBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    const floor = floorRef.current;
    if (!scene || !floor) return;
    const observers: Array<() => void> = [];
    const nodes = Array.from(scene.querySelectorAll<HTMLElement>('[data-beam]'));
    nodes.forEach((node, index) => {
      let fired = false;
      const check = () => {
        if (fired) return;
        const beam = node.getBoundingClientRect();
        const floorBox = floor.getBoundingClientRect();
        if (beam.bottom >= floorBox.top && beam.top < floorBox.bottom + 3) {
          fired = true;
          const bounds = scene.getBoundingClientRect();
          const id = Date.now() + index + Math.random();
          setBursts((prev) => [...prev, { id, x: beam.left - bounds.left, y: floorBox.top - bounds.top }]);
          window.setTimeout(() => setBursts((prev) => prev.filter((item) => item.id !== id)), 1100);
          window.setTimeout(() => { fired = false; }, (BEAMS[index].duration + BEAMS[index].repeatDelay) * 1000);
        }
      };
      const timer = window.setInterval(check, 45);
      observers.push(() => window.clearInterval(timer));
    });
    return () => observers.forEach((stop) => stop());
  }, []);

  return (
    <div ref={sceneRef} className={cn('beam-scene', className)} aria-hidden="true">
      {BEAMS.map((beam, index) => (
        <motion.div
          key={index}
          data-beam
          className="beam"
          style={{ left: `${beam.x}%`, height: beam.height }}
          initial={{ y: -220, opacity: 0 }}
          animate={{ y: 'calc(100vh + 260px)', opacity: [0, 1, 1, 0.85] }}
          transition={{ duration: beam.duration, delay: beam.delay, repeat: Infinity, repeatType: 'loop', repeatDelay: beam.repeatDelay, ease: 'linear' }}
        />
      ))}
      <div ref={floorRef} className="beam-floor" />
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div key={burst.id} className="absolute" style={{ left: burst.x, top: burst.y }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
            {Array.from({ length: 14 }, (_, i) => {
              const angle = (Math.PI * 2 * i) / 14;
              const distance = 22 + (i % 4) * 10;
              return <motion.span key={i} className="beam-particle" initial={{ x: 0, y: 0, scale: 1 }} animate={{ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance - 12, scale: 0, opacity: 0 }} transition={{ duration: 0.7 + (i % 3) * 0.1, ease: 'easeOut' }} />;
            })}
            <motion.div className="absolute -left-12 -top-1 h-2 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" initial={{ opacity: 1, scaleX: 0.3 }} animate={{ opacity: 0, scaleX: 1.5 }} transition={{ duration: 0.7 }} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
