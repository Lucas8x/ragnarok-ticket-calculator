import { useState, useEffect } from 'react';

import { IInputsData } from '../../interfaces';
import { Input } from '../Input';
import { Container } from './styles';

interface FormProps {
  onChangeInputs: (obj: IInputsData) => void;
}

export function Form({ onChangeInputs }: FormProps) {
  const [lastModified, setLastModified] = useState('');

  const [rops, setRops] = useState('');
  const [wp, setWp] = useState('');
  const [tickets, setTickets] = useState('');
  const [money, setMoney] = useState('');
  const [zeny, setZeny] = useState('');
  const [ticketZeny, setTicketZeny] = useState('');

  useEffect(() => {
    onChangeInputs({
      rops,
      wp,
      tickets,
      money,
      zeny,
      ticketZeny,
      lastModified,
    });
  }, [
    rops,
    wp,
    tickets,
    money,
    zeny,
    ticketZeny,
    lastModified,
    onChangeInputs,
  ]);

  return (
    <Container>
      <Input
        id='rops'
        type='number'
        step={'1'}
        placeholder='rops'
        label='Quantos ROPs deseja comprar?'
        onChange={(e) => {
          setLastModified('rops');
          setRops(e.target.value);
        }}
      />
      <Input
        id='wp'
        type='number'
        step={'1'}
        placeholder='wp'
        label='Quantos WP deseja comprar?'
        onChange={(e) => {
          setLastModified('wp');
          setWp(e.target.value);
        }}
      />
      <Input
        id='tickets'
        type='number'
        step={'1'}
        placeholder='tickets'
        label='Quantos tickets deseja comprar?'
        onChange={(e) => {
          setLastModified('tickets');
          setTickets(e.target.value);
        }}
      />
      <Input
        id='money'
        type='number'
        step='any'
        placeholder='R$'
        label='Quantos R$ deseja gastar?'
        onChange={(e) => {
          setLastModified('money');
          setMoney(e.target.value);
        }}
      />
      <Input
        id='zeny'
        type='number'
        step='any'
        placeholder='zeny'
        label='Quantos zenys você pretende ganhar?'
        onChange={(e) => {
          setLastModified('zeny');
          setZeny(e.target.value);
        }}
      />
      <Input
        id='ticketZeny'
        type='number'
        step='any'
        placeholder='ticket -> zeny'
        label='Quanto está valendo o ticket em zeny?'
        onChange={(e) => {
          setLastModified('ticketZeny');
          setTicketZeny(e.target.value);
        }}
      />
    </Container>
  );
}
