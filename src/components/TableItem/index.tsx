import { Container, Name, Value } from './styles';

interface TableItemProps {
  name: string;
  value?: number | string;
}

export function TableItem({ name, value }: TableItemProps) {
  return (
    <Container>
      <Name>{name}</Name>
      <Value>{value?.toString() || '?'}</Value>
    </Container>
  );
}
