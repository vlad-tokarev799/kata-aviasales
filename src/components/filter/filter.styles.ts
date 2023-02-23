import styled from 'styled-components';

import check from './check.svg';

export type FilterStyles = {
  active?: boolean;
};

export const StyledFilter = styled.label<FilterStyles>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  user-select: none;

  &:hover {
    background: #f1fcff;
  }

  input {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #9abbce;
    border-radius: 2px;
    appearance: none;
    margin: 0;

    &:checked {
      background-image: url(${check});
      background-repeat: no-repeat;
      background-position: center center;
      border-color: rgba(33, 150, 243, 1);
    }
  }
`;
