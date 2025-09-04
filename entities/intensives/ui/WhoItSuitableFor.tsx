import React from 'react';

import { ChannelBanner } from '@/entities/intensives/ui/ChannelBanner';
import { Card } from '@/shared/ui/card';
import { Heading, Paragraph } from '@/shared/ui/redesign';
import { ResponsiveImage } from '@/shared/ui/ResponsiveImage';

import styles from './WhoItSuitableFor.module.scss';

type WhoItSuitableForProps = {
  handleSubscribe: () => void;
  id: string;
  intensiveTitle: string;
  dayStart: string;
  forWhom: any;
  telegramBlock?: any;
};

export const WhoItSuitableFor = ({
  handleSubscribe,
  id,
  intensiveTitle,
  dayStart,
  forWhom,
  telegramBlock,
}: WhoItSuitableForProps) => {
  return (
    <>
      <Heading
        variant="h2"
        color="secondary"
        className={styles.title}
      >
        Ne
      </Heading>

      <div className={styles.whoCards}>
        {forWhom.elements.map((el: any) => (
          <Card
            key={el.title}
            size="small"
            className={styles.whoCard}
          >
            <Paragraph
              variant="large"
              color="secondary"
              className={styles.description}
            >
              {el.title}
            </Paragraph>
            <ResponsiveImage
              className={styles.image}
              src={el.image_absolute}
              alt="Next"
            />
          </Card>
        ))}
      </div>
      {telegramBlock && (
        <ChannelBanner
          intensiveTitle={intensiveTitle}
          telegramBlock={telegramBlock}
          id={id}
          dayStart={dayStart}
          handleSubscribe={handleSubscribe}
        />
      )}
    </>
  );
};
