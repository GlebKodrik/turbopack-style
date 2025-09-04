'use client';

import { CourseCard } from '@/shared/ui/course-card';
import { Button, ButtonGroup } from '@/shared/ui/redesign';

import styles from './WbPartnerTest.module.scss';

export function WbPartnerTest() {
  return (
    <CourseCard
      mode="dark"
      classCard="relative sm:px-10 sm:py-8 sm:pb-10 p-sm-4-vw"
      classBody="sm:w-[61%] sm:gap-6 gap-sm-4-vw"
      bottom={
        <ButtonGroup>
          <Button
            data-name="WidgetWbPartners"
            size="l"
            onClick={() => {}}
            className={styles.button}
          >
            Test
          </Button>
        </ButtonGroup>
      }
    >
      Descr
    </CourseCard>
  );
}
