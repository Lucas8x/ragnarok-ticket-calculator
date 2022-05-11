import Head from 'next/head';

import { LeftSidebar } from '../../components/LeftSidebar';
import { RightSidebar } from '../../components/RightSidebar';

import { Container, Main } from './styles';

export function Home() {
  return (
    <>
      <Head>
        <title>Ragnarok Ticket Calculator</title>
      </Head>
      <Container>
        <LeftSidebar />
        <Main></Main>
        <RightSidebar />
      </Container>
    </>
  );
}
