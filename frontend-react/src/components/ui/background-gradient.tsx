
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type BackgroundGradientProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  const gradient =
    'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0%,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0%,#1ca0fb,#141316)]';

  const variants = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
  };

  return (
    <div className={cn('relative group p-[4px]', containerClassName)}>
      <motion.div
        className={cn(
          'absolute inset-0 rounded-3xl blur-xl opacity-60',
          gradient
        )}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ backgroundSize: animate ? '400% 400%' : undefined }}
      />
      <motion.div
        className={cn('absolute inset-0 rounded-3xl', gradient)}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ backgroundSize: animate ? '400% 400%' : undefined }}
      />
      <div className={cn('relative z-10', className)}>
        {children}
      </div>
    </div>
  );
}

export function BackgroundGradientBorder() {
  const gradient =
    'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0%,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0%,#1ca0fb,#141316)]';

  return (
    <div className="aceternity-gradient-border">
      <motion.div
        className={cn(
          'aceternity-gradient-layer',
          gradient
        )}
        animate={{
          backgroundPosition: [
            '0% 50%',
            '100% 50%',
            '0% 50%',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ backgroundSize: '400% 400%' }}
      />

      <div className="aceternity-gradient-inner" />
    </div>
  );
}