import { Page } from '@/components/pages/shared/Page';
import { PageWithHeader } from '@/components/ui/layouts/PageWithHeader';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Page>
      <PageWithHeader>top page</PageWithHeader>
    </Page>
  );
};

export default Home;
