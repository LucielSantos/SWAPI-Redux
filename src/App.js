import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './styles/global';
import Content from './components/Content';

function App() {
  return (
    <Provider store = { store }>
      <Content />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
