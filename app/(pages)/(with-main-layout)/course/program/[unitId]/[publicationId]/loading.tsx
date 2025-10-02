import { CourseProgramPageSkeleton } from '@/widgets/course-program';

import styles from './page.module.scss';

export default function Loading() {
  return (
    <>
      <CourseProgramPageSkeleton className={styles.payload} />
    </>
  );
}
