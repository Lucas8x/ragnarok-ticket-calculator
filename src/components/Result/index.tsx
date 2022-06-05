import { IFormData } from '../../interfaces';
import { TableItem } from '../TableItem';
import { Container, Title, LastModified, Table } from './styles';

interface ICalculatedBy {
  [key: string]: string;
}

const CalculatedBy: ICalculatedBy = {
  rops: 'ROPS',
  wp: 'WP',
  tickets: 'Número de Tickets',
  money: 'Preço do WP',
  zeny: 'Zeny',
  ticketZeny: 'Valor do Ticket',
};

interface ResultTableProps {
  result: IFormData;
  lastModified?: string;
}

const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function ResultTable({ result, lastModified }: ResultTableProps) {
  const calculatedBy = lastModified ? CalculatedBy[lastModified] : lastModified;

  const zeny =
    result?.zeny &&
    `${result.zeny}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'z';

  return (
    <Container>
      <Title>Resultados</Title>

      <LastModified>
        {calculatedBy
          ? `Calculado pelo ${calculatedBy}`
          : 'Porfavor insira algum dos dados ao lado.'}
      </LastModified>

      <Table>
        <TableItem name='ROPs' value={result?.rops} />
        <TableItem name='WP' value={result?.wp} />
        <TableItem name='Tickets' value={result?.tickets} />
        <TableItem
          name='Dinheiro'
          value={result?.money && moneyFormatter.format(result.money)}
        />
        <TableItem name='Zeny' value={zeny} />
      </Table>
    </Container>
  );
}
