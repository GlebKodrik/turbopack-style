import React from 'react';

import { ChannelBanner } from '@/entities/intensives/ui/ChannelBanner';

type WhoItSuitableForProps = {
  handleSubscribe: () => void;
  id: string;
  intensiveTitle: string;
  dayStart: string;
  telegramBlock?: any;
};

export const WhoItSuitableFor = ({
  handleSubscribe,
  id,
  intensiveTitle,
  dayStart,
  telegramBlock,
}: WhoItSuitableForProps) => {
  return (
    <ChannelBanner
      intensiveTitle={intensiveTitle}
      telegramBlock={telegramBlock}
      id={id}
      dayStart={dayStart}
      handleSubscribe={handleSubscribe}
    />
  );
};
