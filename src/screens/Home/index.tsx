import Head from 'next/head';
import { useState } from 'react';

import { LeftSidebar } from '../../components/LeftSidebar';
import { RightSidebar } from '../../components/RightSidebar';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { ResultTable } from '../../components/Result';
import { Container, Center, Main } from './styles';
import { IInputsData } from '../../interfaces';

export function Home() {
  const [data, setData] = useState<IInputsData>();

  return (
    <>
      <Head>
        <title>Ragnarok Ticket Calculator</title>
      </Head>

      <Container>
        <LeftSidebar />

        <Center>
          <Header />
          <Main>
            <Form onChangeInputs={setData} />
            <ResultTable data={data} />
          </Main>
        </Center>

        <RightSidebar />
      </Container>
    </>
  );
}
