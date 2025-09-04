'use client';

import { EmptyListNotification } from '@/shared/ui/empty-notification';
import { PageLayout } from '@/widgets/layouts';

import styles from './page.module.scss';

export default function Error() {
  return (
    <PageLayout theme="light">
      <EmptyListNotification
        className={styles.payload}
        title="ewdwedwedwe"
        description="2d23d23d23d23dew"
      />
    </PageLayout>
  );
}
