import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { CourseProgramCard } from '@/entities/course-program-card';
import InsightsBackgroundMobile from '@/public/static/image/insights/banner-bg-full.png';
import ImageDesktop from '@/public/static/image/insights/banner-desktop.png';
import HandsHoldingIpadHalf from '@/public/static/image/insights/hands-holding.png';
import { ROUTE_BUILDER } from '@/shared/lib/routing/routing';
import { BadgeGroupsItem } from '@/shared/ui/badge';

import { COURSE_TYPE, STATUSES } from '../lib/constants';
import styles from './CourseProgramLessonCard.module.scss';

type CourseProgramLessonCardProps = {
  courseNumber: number;
  status?: string;
  elementSource: string;
  time?: string;
  lesson: any;
  publicationId: string;
  isLast: boolean;
};

export const CourseProgramLessonCard = ({
  courseNumber,
  status,
  elementSource,
  time,
  lesson,
  publicationId,
  isLast,
}: CourseProgramLessonCardProps) => {
  const { uid, title, description } = lesson;
  const isComplete = status === STATUSES.COMPLETED;
  const isCourse = !COURSE_TYPE.TEST.includes(elementSource);
  const linkCourse = ROUTE_BUILDER.LESSON.with({
    unitId: uid,
    publicationId,
  });

  const getBadgeItems = () => {
    const badges: Array<BadgeGroupsItem> = [];

    if (isCourse) {
      badges.push({
        label: `${courseNumber} урок`,
        color: 'secondary',
        variant: isComplete ? 'complete' : 'default',
      });
    }

    if (time) {
      badges.push({ label: time, color: 'secondary' });
    }

    return badges;
  };

  const renderRight = () => {
    if (!isLast) {
      return null;
    }

    return (
      <>
        <div className={styles.desktopImageContainer}>
          <img
            className={styles.desktopImage}
            src={ImageDesktop.src}
            alt="Изображение курса"
          />
        </div>
        <div className={styles.mobileImageContainer}>
          <img
            src={InsightsBackgroundMobile.src}
            className={styles.mobileBg}
          />
          <Image
            className={styles.mobileImage}
            src={HandsHoldingIpadHalf.src}
            alt="Hands holding ipad"
            height={360}
            width={180}
          />
        </div>
      </>
    );
  };

  return (
    <CourseProgramCard
      className={clsx(styles.card, { [styles.info]: isLast })}
      items={getBadgeItems()}
      description={description}
      title={title}
      href={linkCourse}
      renderRight={renderRight}
    />
  );
};
