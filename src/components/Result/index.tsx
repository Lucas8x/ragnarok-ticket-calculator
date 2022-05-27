import { IFormData } from '../../interfaces';
import { TableItem } from '../TableItem';
import { Container, Title, LastModified, Table } from './styles';

//const CalculatedBy = {};

interface ResultTableProps {
  result?: any;
}

export function ResultTable({ result }: ResultTableProps) {
  return (
    <Container>
      <Title>Resultados</Title>

      <LastModified>
        {result?.lastModified
          ? `Calculando por ${result.lastModified}`
          : 'Porfavor insira algum dos dados ao lado.'}
      </LastModified>

      <Table>
        <TableItem name='WP' value={result?.wp} />
        <TableItem name='ROPs' value={result?.rops} />
        <TableItem name='Tickets' value={result?.tickets} />
        <TableItem name='Dinheiro' value={result?.money} />
        <TableItem name='Zeny' value={result?.zeny} />
      </Table>
    </Container>
  );
}
