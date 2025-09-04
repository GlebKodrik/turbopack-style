import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { AnimatedBlock } from '@/shared/ui/animated-block';

export const Section = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) => {
  return (
    <AnimatedBlock>
      <section
        className={clsx(
          'flex flex-col gap-sm-6-vw overflow-visible py-sm-5-vw sm:gap-10 sm:py-15',
          classes,
        )}
      >
        {children}
      </section>
    </AnimatedBlock>
  );
};
