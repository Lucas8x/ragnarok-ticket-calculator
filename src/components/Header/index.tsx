import Image from 'next/image';

import Ticket from '../../assets/ticket1.png';

import { Container, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Image src={Ticket} alt='ticket item sprite' width={30} height={20} />
      <Title>Ragnarok Ticket Calculator</Title>
    </Container>
  );
}
