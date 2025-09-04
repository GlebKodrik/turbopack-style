import { useAnalytics } from '@/shared/lib/hooks/use-analytics';
import { Card } from '@/shared/ui/card';
import { Button, Heading } from '@/shared/ui/redesign';

import styles from './ChannelBanner.module.scss';

interface ChannelBannerProps {
  handleSubscribe: () => void;
  intensiveTitle: string;
  telegramBlock: any;
  id: string;
  dayStart: string;
}

export const ChannelBanner = ({
  handleSubscribe,
  id,
  intensiveTitle,
  telegramBlock = { title: '', description: '' },
  dayStart,
}: ChannelBannerProps) => {
  const { track, ref, defaultParams } = useAnalytics({
    sendAfterVisible: true,
    type: 'Intensive_Channel',
    params: {
      is_join: 'false',
      intensive_name: intensiveTitle,
      intensive_dt: dayStart,
      intensive_id: id,
    },
  });

  const handleClickSubscribe = () => {
    track('Intensive_Channel', {
      action: 'click',
      params: {
        ...defaultParams,
        intensive_name: intensiveTitle,
        intensive_dt: dayStart,
        intensive_id: id,
      },
    });

    handleSubscribe();
  };

  return (
    <Card
      size="small"
      className={styles.bannerCard}
    >
      <div ref={ref}>
        <Heading
          variant="h3"
          as="h4"
          className={styles.bannerTitle}
        >
          {telegramBlock.title}
        </Heading>
        <p dangerouslySetInnerHTML={{ __html: telegramBlock.description }} />
      </div>
      <Button
        onClick={handleClickSubscribe}
        theme="purple"
        className={styles.button}
        size="s"
      >
        Участвовать в интенсиве
      </Button>
    </Card>
  );
};
