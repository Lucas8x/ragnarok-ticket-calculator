import { useState, useEffect } from 'react';

import { IFormData } from '../../interfaces';
import { Input } from '../Input';
import { Container, Group, Top, Error, XIcon, ClearButton } from './styles';

interface FormProps {
  onChangeInputs: (data: IFormData) => void;
  error: string;
  onClear: () => void;
}

export function Form({ onChangeInputs, error, onClear }: FormProps) {
  const [lastModified, setLastModified] = useState('');

  const [rops, setRops] = useState('');
  const [wp, setWp] = useState('');
  const [tickets, setTickets] = useState('');
  const [money, setMoney] = useState('');
  const [zeny, setZeny] = useState('');
  const [ticketZeny, setTicketZeny] = useState('');

  function clearInputs() {
    console.log('limpando');
    setRops('');
    setWp('');
    setTickets('');
    setMoney('');
    setZeny('');
    setTicketZeny('');
    onClear();
  }

  useEffect(() => {
    const data = {
      rops: Number(rops) || 0,
      wp: Number(wp) || 0,
      tickets: Number(tickets) || 0,
      money: Number(money) || 0,
      zeny: Number(zeny) || 0,
      ticketZeny: Number(ticketZeny) || 0,
      lastModified,
    };
    onChangeInputs(data);
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
      <Top>
        {error && <Error>{`> ! ${error} ! <`}</Error>}
        {/* <ClearButton onClick={clearInputs}>
          <XIcon />
          Limpar
        </ClearButton> */}
      </Top>
      <Input
        id='rops'
        type='number'
        step={'1000'}
        min={'0'}
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
        step={'1000'}
        min={'0'}
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
        min={'0'}
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
        min={'0'}
        placeholder='R$'
        label='Quantos R$ deseja gastar?'
        onChange={(e) => {
          setLastModified('money');
          setMoney(e.target.value);
        }}
      />
      <Group>
        <Input
          id='zeny'
          type='number'
          step='any'
          min={'0'}
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
          step='1'
          min={'0'}
          placeholder='ticket -> zeny'
          label='Quanto está valendo o ticket em zeny?'
          onChange={(e) => {
            setLastModified('ticketZeny');
            setTicketZeny(e.target.value);
          }}
        />
      </Group>
    </Container>
  );
}
