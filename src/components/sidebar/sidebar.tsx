// @flow
import * as React from 'react';
import { Filter } from '../filter/filter';
import { StyledSidebar } from './sidebar.styles';

export const Sidebar = () => {
  const filters = [
    { name: 'Без пересадок', value: 0, active: false },
    { name: '1 пересадка', value: 1, active: true },
    { name: '2 пересадки', value: 2, active: false },
    { name: '3 пересадки', value: 3, active: true },
  ];

  const FiltersElems = filters.map((el) => <Filter id={`filters-${el.value}`} label={el.name} />);

  return (
    <StyledSidebar>
      <h3 className={'filters-title'}>Количество пересадок</h3>
      <Filter id={'filters-all'} label={'Все'} />
      {FiltersElems}
    </StyledSidebar>
  );
};
