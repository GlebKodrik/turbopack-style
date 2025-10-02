import { IntensivesContainer } from '@/widgets/intensives';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Intensives({ params }: Params) {
  const { id } = await params;

  return (
    <>
      <IntensivesContainer uid={id} />
    </>
  );
}
