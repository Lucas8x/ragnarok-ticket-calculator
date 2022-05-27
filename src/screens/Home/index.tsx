import Head from 'next/head';

import { LeftSidebar } from '../../components/LeftSidebar';
import { RightSidebar } from '../../components/RightSidebar';
import { Header } from '../../components/Header';
import { Calculator } from '../../components/Calculator';
import { Container, Center } from './styles';

export function Home() {
  return (
    <>
      <Head>
        <title>Ragnarok Ticket Calculator</title>
      </Head>

      <Container>
        <LeftSidebar />

        <Center>
          <Header />
          <Calculator />
        </Center>

        <RightSidebar />
      </Container>
    </>
  );
}
