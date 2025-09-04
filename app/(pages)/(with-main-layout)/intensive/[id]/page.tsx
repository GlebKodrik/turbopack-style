import { IntensivesContainer } from '@/widgets/intensives';
import { PageLayout } from '@/widgets/layouts';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Intensives({ params }: Params) {
  const { id } = await params;

  return (
    <PageLayout
      theme="light"
      resetPadding={{ content: { allWithoutDesktop: true } }}
    >
      <IntensivesContainer uid={id} />
    </PageLayout>
  );
}
