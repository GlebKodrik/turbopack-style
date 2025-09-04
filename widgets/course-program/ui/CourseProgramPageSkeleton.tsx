import React from 'react';

import { Card } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/redesign';

import styles from './CourseProgramPageSkeleton.module.scss';

type CourseProgramPageSkeletonProps = {
  className?: string;
};

export const CourseProgramPageSkeleton = ({
  className,
}: CourseProgramPageSkeletonProps) => {
  return (
    <div className={className}>
      <Skeleton
        width="40%"
        height={15}
        className={styles.breadcrumbs}
      />
      <Skeleton className={styles.image} />
      <div className={styles.about}>
        <Skeleton
          rootClassName={styles.about}
          height={15}
          count={2}
          width="60%"
        />
      </div>

      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          <Skeleton
            height={10}
            count={10}
          />
        </Card>
        <Card className={styles.card}>
          <Skeleton
            height={10}
            count={10}
          />
        </Card>
      </div>
    </div>
  );
};
