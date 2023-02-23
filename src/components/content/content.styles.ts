import styled from 'styled-components';

export type Styles = {
  active?: boolean;
};

export const StyledContent = styled.div<Styles>`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;
