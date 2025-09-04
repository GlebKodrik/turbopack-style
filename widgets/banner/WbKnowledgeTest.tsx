'use client';

import { useEffect, useRef } from 'react';

import { Section } from '@/features/section';
import { UNIT_IDS } from '@/shared/lib/constants/unit-ids';
import { useIsVisibleOnce } from '@/shared/lib/hooks';
import { useAnalytics } from '@/shared/lib/hooks/use-analytics';
import { ROUTE_BUILDER } from '@/shared/lib/routing/routing';
import { getSpaces } from '@/shared/lib/typograf';
import { Button, Heading } from '@/shared/ui/redesign';

import styles from './WbKnowledgeTest.module.scss';

const LINK_TO_COURSE = ROUTE_BUILDER.COURSE_PROGRAM.with({
  unitId: UNIT_IDS.COURSE_START_UNIT_ID,
  publicationId: UNIT_IDS.COURSE_START_PUBLICATION_ID,
});

export function WbKnowledgeTest() {
  const { track } = useAnalytics();

  const ref = useRef(null);
  const isVisible = useIsVisibleOnce(ref, true);

  useEffect(() => {
    if (isVisible) track('MainPage_ToCourse', { action: 'view' });
  }, [isVisible, track]);

  const handleClick = () => {
    track('MainPage_ToCourse', { action: 'click' });
  };

  return (
    <div ref={ref}>
      <Section classes="sm:hidden max-w-sm:block static">
        <h2>
          {getSpaces('Собственный центр развития и поддержки предпринимателей')}
        </h2>
        <Button
          onClick={handleClick}
          href={LINK_TO_COURSE}
          size="l"
          className={styles.button}
        >
          Начать курс по Wildberries
        </Button>
      </Section>

      <Section classes="max-w-sm:hidden static">
        <div>
          <Heading
            variant="h1"
            className={styles.heading}
          >
            PRO Wildberries —{' '}
            <span className="text-green">
              собственный центр развития и поддержки предпринимателей
            </span>
          </Heading>
          <Button
            onClick={handleClick}
            href={LINK_TO_COURSE}
            size="l"
            className={styles.button}
          >
            Начать курс по Wildberries
          </Button>
        </div>
      </Section>
    </div>
  );
}
