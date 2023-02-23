import React from 'react';
import { StyledFilter } from './filter.styles';

type Props = {
  id: string;
  label: string;
};

export const Filter = (props: Props) => {
  const { id, label } = props;

  return (
    <StyledFilter>
      <input type="checkbox" id={id} />
      <span>{label}</span>
    </StyledFilter>
  );
};
