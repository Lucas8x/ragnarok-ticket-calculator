import { useEffect, useState } from 'react';

import { Form } from '../Form';
import { ResultTable } from '../Result';
import { IFormData } from '../../interfaces';

import { TICKET_PRICE, WP_TO_ROPS } from '../../data/values.json';
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

  function buyByRops() {
    const { rops } = data;
    if (!rops) return;

    const minRops = WP_TO_ROPS.sort((a, b) => a.rops - b.rops)[0];

    if (minRops.rops > rops) {
      setError('Quantidade de rops abaixo do minimo.');
      return;
    } else {
      setError('');
    }

    const maxRops = getRopsByAmount(rops).sort((a, b) => a.rops - b.rops)[0];
    if (!maxRops) return;

    const maxTickets = Math.round(maxRops.rops / TICKET_PRICE);
    const wp = maxRops.wp;
    const money = getWpByAmount(wp).sort((a, b) => a.wp - b.wp)[0];

    setResult((prev) => ({
      ...prev,
      wp,
      rops: maxRops.rops,
      tickets: maxTickets,
      money: money.price,
    }));
  }

  function buyByWp() {}

  function buyByTickets() {}

  function buyByMoney() {}

  function buyByZeny() {}

  function exec(lastModified: string) {
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
  }, [data]);

  useEffect(() => {
    if (!result) return;
    console.table(result);
  }, [result]);

  /*useEffect(() => {
    if (!data) return;
    console.table(data);
  }, [data]);*/

  return (
    <Main>
      <Form onChangeInputs={setData} error={error} />
      <ResultTable result={result} />
    </Main>
  );
}
