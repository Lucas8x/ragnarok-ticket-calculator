import { useEffect, useState, useCallback } from 'react';

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

  const buyByRops = useCallback(() => {
    const rops = data?.rops;
    if (!rops) return;

    const possibleRops = getRopsByAmount(rops);
    const minRops = possibleRops[0];

    if (!minRops) {
      rops > WP_TO_ROPS[WP_TO_ROPS.length - 1].rops &&
        setError('Quantidade de ROPS acima do permitido');
      return;
    } else setError('');

    const maxTickets = Math.floor(minRops.rops / TICKET_PRICE);
    const wp = minRops.wp;

    const possibleMoney = getWpByAmount(wp);
    const minPrice = possibleMoney[0]?.price;

    setResult({
      rops: minRops.rops,
      wp,
      tickets: maxTickets,
      money: minPrice,
      ...(data?.ticketZeny && { zeny: maxTickets * data.ticketZeny }),
    });
  }, [data?.rops, data?.ticketZeny]);

  const buyByWp = useCallback(() => {
    const wp = data?.wp;
    if (!wp) return;

    const possibleWp = getWpByAmount(wp);
    const minWp = possibleWp[0];

    if (!minWp) return;
    else setError('');

    const possibleRops = getRopsByWp(wp);
    const minRops = possibleRops[0];
    const rops = minRops.rops;

    const maxTickets = Math.floor(rops / TICKET_PRICE);

    setResult({
      rops,
      wp: minWp.wp,
      tickets: maxTickets,
      money: minWp.price,
      ...(data?.ticketZeny && { zeny: maxTickets * data.ticketZeny }),
    });
  }, [data?.wp, data?.ticketZeny]);

  const buyByTickets = useCallback(() => {
    const tickets = data?.tickets;
    if (!tickets || tickets <= 0) return;

    const requiredRops = tickets * TICKET_PRICE;
    const possibleRops = getRopsByAmount(requiredRops);
    const minRops = possibleRops[0];
    if (!minRops) return;

    const possibleMoney = getWpByAmount(minRops.wp);
    const minPrice = possibleMoney[0]?.price;

    const maxTickets = Math.floor(minRops.rops / TICKET_PRICE);

    setResult({
      rops: minRops.rops,
      wp: minRops.wp,
      tickets: maxTickets,
      money: minPrice,
      ...(data?.ticketZeny && { zeny: maxTickets * data.ticketZeny }),
    });
  }, [data?.tickets, data?.ticketZeny]);

  const buyByMoney = useCallback(() => {
    const money = data?.money;
    if (!money) return;

    const possibleMoney = getWpByPrice(money);
    if (!possibleMoney) return;

    const minMoney = possibleMoney[possibleMoney.length - 1];
    if (!minMoney) return;
    const { price, wp } = minMoney;

    const possibleRops = getRopsByWp(wp);
    const { rops } = possibleRops[0];

    const maxTickets = Math.floor(rops / TICKET_PRICE);

    setResult({
      rops,
      wp,
      tickets: maxTickets,
      money: price,
      ...(data?.ticketZeny && { zeny: maxTickets * data.ticketZeny }),
    });
  }, [data?.money, data?.ticketZeny]);

  const buyByZeny = useCallback(() => {
    const zeny = data?.zeny;
    const ticketZeny = data?.ticketZeny;
    if (!zeny || !ticketZeny) return;

    const tickets = Math.ceil(zeny / ticketZeny);
    const requiredRops = tickets * TICKET_PRICE;

    const possibleRops = getRopsByAmount(requiredRops);
    const minRops = possibleRops[0];
    if (!minRops) return;
    const { rops, wp } = minRops;

    const possibleMoney = getWpByAmount(wp);
    const minPrice = possibleMoney[0]?.price;

    setResult({
      rops: minRops.rops,
      wp: minRops.wp,
      tickets,
      money: minPrice,
      ...(data?.ticketZeny && { zeny: tickets * data.ticketZeny }),
    });
  }, [data?.zeny, data?.ticketZeny]);

  function clearInputs() {
    //setResult({});
    //setError('');
  }

  useEffect(() => {
    const lastModified = data?.lastModified;
    switch (lastModified) {
      case 'rops':
        buyByRops();
        break;
      case 'wp':
        buyByWp();
        break;
      case 'tickets':
        buyByTickets();
        break;
      case 'money':
        buyByMoney();
        break;
      case 'zeny':
        buyByZeny();
        break;
      default:
        break;
    }
  }, [data, buyByMoney, buyByRops, buyByTickets, buyByWp, buyByZeny]);

  return (
    <Main>
      <Form onChangeInputs={setData} error={error} onClear={clearInputs} />
      <ResultTable result={result} lastModified={data?.lastModified} />
    </Main>
  );
}
