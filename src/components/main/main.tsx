import React, { ReactNode } from 'react';
import { StyledMain, StyledShowMoreButton } from './main.styles';
import { Tabs } from '../tabs/tabs';
import { TicketType } from '../../types/tickets';
import { Ticket } from '../ticket/ticket';

export const Main = () => {
  const tickets: TicketType[] = [
    {
      price: 92650,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-05-24T17:55:58.877Z',
          duration: 1086,
          stops: ['DEL', 'HKG'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2024-02-27T08:37:08.952Z',
          duration: 727,
          stops: [],
        },
      ],
    },
    {
      price: 46060,
      carrier: 'W6',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T21:28:56.317Z',
          duration: 1333,
          stops: ['IST', 'DEL', 'JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-11-14T08:30:05.082Z',
          duration: 1423,
          stops: ['IST', 'JNB', 'JNB'],
        },
      ],
    },
    {
      price: 52760,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-01-16T05:44:21.073Z',
          duration: 1322,
          stops: ['JNB', 'IST', 'HKG'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-06-16T02:45:10.483Z',
          duration: 671,
          stops: [],
        },
      ],
    },
    {
      price: 19080,
      carrier: 'FV',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2024-01-05T23:49:26.120Z',
          duration: 755,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2024-12-03T09:07:03.322Z',
          duration: 992,
          stops: ['HKG'],
        },
      ],
    },
    {
      price: 39890,
      carrier: 'DP',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-06-18T07:20:08.428Z',
          duration: 1065,
          stops: ['DOH', 'DXB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2024-03-13T21:20:43.271Z',
          duration: 1098,
          stops: ['IST', 'DXB'],
        },
      ],
    },
  ];
  const ticketsElems: ReactNode = tickets.map((el, i) => <Ticket key={`${el.carrier}_${i}`} {...el} />);

  return (
    <StyledMain>
      <Tabs />
      <div>{ticketsElems}</div>
      <StyledShowMoreButton>Показать еще 5 билетов!</StyledShowMoreButton>
    </StyledMain>
  );
};
