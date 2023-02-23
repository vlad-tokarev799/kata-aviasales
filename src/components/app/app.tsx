import React from 'react';
import { Styles, StyledApp } from './app.styles';

import { Header } from '../header/header';
import { Content } from '../content/content';

type Props = Styles;

const App = (props: Props) => {
  return (
    <StyledApp {...props}>
      <Header />
      <Content />
    </StyledApp>
  );
};

export default App;
