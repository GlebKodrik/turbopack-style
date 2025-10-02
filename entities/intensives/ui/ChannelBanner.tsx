import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/redesign';

import styles from './ChannelBanner.module.scss';

export const ChannelBanner = () => {
  return (
    <Card
      size="small"
      className={styles.bannerCard}
    >
      <div className={styles.bannerTitle}>NEXT JS TOP</div>
      <Button
        onClick={() => {}}
        theme="purple"
        className={styles.button}
        size="s"
      >
        Send
      </Button>
    </Card>
  );
};
