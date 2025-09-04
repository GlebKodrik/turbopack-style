import { WbPartnerTest } from '@/widgets/banner';
import { PageLayout } from '@/widgets/layouts';

export default function Home() {
  return (
    <div className="sun">
      <PageLayout classes={{ content: 'dark-background' }}>
        <WbPartnerTest />
      </PageLayout>
    </div>
  );
}
