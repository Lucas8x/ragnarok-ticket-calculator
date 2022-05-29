import { useEffect } from 'react';
import { IFormData } from '../../interfaces';
import { TableItem } from '../TableItem';
import { Container, Title, LastModified, Table } from './styles';

//const CalculatedBy = {};

interface ResultTableProps {
  result?: any;
  lastModified?: string;
}

const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function ResultTable({ result, lastModified }: ResultTableProps) {
  const zeny =
    result?.zeny &&
    `${result.zeny}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'z';

  return (
    <Container>
      <Title>Resultados</Title>

      <LastModified>
        {lastModified
          ? `Calculando por ${lastModified}`
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
