import { Home, Meta } from '@/layouts';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Home />
    </Main>
  );
};

export default Index;
