import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer, Header } from '@/components';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main: NextPage<IMainProps> = ({ meta, children }) => {
  return (
    <Layout>
      <Header />
      {meta}
      <Inner>{children}</Inner>
      <Footer />
    </Layout>
  );
};

export { Main };
