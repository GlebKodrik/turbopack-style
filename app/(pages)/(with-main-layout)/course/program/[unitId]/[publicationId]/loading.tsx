import { CourseProgramPageSkeleton } from '@/widgets/course-program';
import { PageLayout } from '@/widgets/layouts';

import styles from './page.module.scss';

export default function Loading() {
  return (
    <PageLayout theme="light">
      <CourseProgramPageSkeleton className={styles.payload} />
    </PageLayout>
  );
}
