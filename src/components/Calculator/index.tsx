import { useEffect, useState, useCallback } from 'react';

import { Form } from '../Form';
import { ResultTable } from '../Result';
import { IFormData } from '../../interfaces';
import { TICKET_PRICE, WP_TO_ROPS, WP_PRICES } from '../../data/values.json';
import {
  getWpByAmount,
  getWpByPrice,
  getRopsByAmount,
  getRopsByWp,
} from '../../utils';

import { Main } from './styles';

export function Calculator() {
  const [data, setData] = useState<IFormData>({} as IFormData);
  const [result, setResult] = useState<IFormData>({} as IFormData);
  const [error, setError] = useState('');

  const buyByRops = useCallback(() => {
    const rops = data?.rops;
    if (!rops) return;

    const minRops = WP_TO_ROPS.filter((i) => i.rops >= rops);
    const first = minRops[0];

    if (!first) return setError('Quantidade de rops abaixo do minimo.');
    else setError('');

    const maxTickets = Math.round(first.rops / TICKET_PRICE);
    const wp = first.wp;

    const money = WP_PRICES.filter((i) => i.wp >= wp);
    const price = money[0]?.price;

    setResult({
      wp,
      rops: first.rops,
      tickets: maxTickets,
      money: price,
      ...(data?.ticketZeny && { zeny: maxTickets * data.ticketZeny }),
    });
  }, [data?.rops, data?.ticketZeny]);

  function buyByWp() {}

  function buyByTickets() {}

  function buyByMoney() {}

  function buyByZeny() {}

  function clearInputs() {
    //setResult({});
    //setError('');
  }

  useEffect(() => {
    const lastModified = data?.lastModified;
    if (!lastModified || !['rops', 'ticketZeny'].includes(lastModified)) return;
    buyByRops();
  }, [data?.lastModified, data?.rops, data?.ticketZeny]);

  /*function exec(lastModified: string) {
    if (!lastModified || !data) return;

    const execute = {
      rops: buyByRops,
      wp: buyByWp,
      tickets: buyByTickets,
      money: buyByMoney,
      zeny: buyByZeny,
    }[lastModified];

    if (!execute) return;
    execute();
  }

  useEffect(() => {
    if (!data || !data?.lastModified) return;
    exec(data.lastModified);
  }, [data]);*/

  return (
    <Main>
      <Form onChangeInputs={setData} error={error} onClear={clearInputs} />
      <ResultTable result={result} lastModified={data?.lastModified} />
    </Main>
  );
}
