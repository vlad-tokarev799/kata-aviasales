import React from 'react';
import { StyledTab, TabStyles } from './tab.styles';

type Props = TabStyles & {
  label: string;
  name: string;
};

export const Tab = (props: Props) => {
  const { label, ...styledProps } = props;

  return <StyledTab {...styledProps}>{label}</StyledTab>;
};
