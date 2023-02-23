import styled from 'styled-components';

export type TabStyles = {
  active: boolean;
};

export const StyledTab = styled.button<TabStyles>`
  padding: 15px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #dfe5ec;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #4a4a4a;

  &:hover {
    background: #f1fcff;
  }

  ${({ active }) =>
    active &&
    `
    background: #2196F3;
    border-color: transparent;
    color: #fff;

    &:hover {
      background: #2196F3;
      border-color: transparent;
      color: #fff;
    }
  `}

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;
