'use client';

import React from 'react';

import { WhoItSuitableFor, YouWillFindOut } from '@/entities/intensives';
import { AnimatedBlock } from '@/shared/ui/animated-block';

import styles from './IntensivesContainer.module.scss';

type IntensivesContainerProps = { uid: string };

export const IntensivesContainer = ({ uid }: IntensivesContainerProps) => {
  return (
    <div className={styles.wrapper}>
      <div className="main-wrapper">
        <YouWillFindOut items={[{ text: 'dsfdff', image_absolute: '' }]} />

        <AnimatedBlock className={styles.block}>
          <WhoItSuitableFor
            handleSubscribe={() => {}}
            id={uid}
            dayStart="22.06.2000"
            forWhom={{ title: 'dsads', elements: [] }}
            intensiveTitle="dsffdsf"
            telegramBlock={{ title: 'Test', description: 'test' }}
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
