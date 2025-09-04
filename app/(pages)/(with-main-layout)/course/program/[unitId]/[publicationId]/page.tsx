import { CourseProgramContainer } from '@/widgets/course-program';
import { PageLayout } from '@/widgets/layouts';

export default async function CourseProgram() {
  return (
    <PageLayout theme="light">
      <CourseProgramContainer />
    </PageLayout>
  );
}
