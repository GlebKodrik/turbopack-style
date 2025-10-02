'use client';

import React from 'react';

import { WhoItSuitableFor } from '@/entities/intensives';

export const IntensivesContainer = () => {
  return (
    <WhoItSuitableFor
      handleSubscribe={() => {}}
      id="test"
      dayStart="22.06.2000"
      intensiveTitle="dsffdsf"
      telegramBlock={{ title: 'Test', description: 'test' }}
    />
  );
};
