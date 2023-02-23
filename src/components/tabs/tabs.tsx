import React from 'react';
import { StyledTabs } from './tabs.styles';
import { Tab } from './tab/tab';

export const Tabs = () => {
  const sorts = [
    { label: 'Самый дешевый', name: 'cheap', active: true },
    { label: 'Самый быстрый', name: 'fast', active: false },
    { label: 'Оптимальный', name: 'optimal', active: false },
  ];

  const tabsElems = sorts.map((el) => <Tab key={`tab_${el.name}`} {...el} />);

  return <StyledTabs>{tabsElems}</StyledTabs>;
};
