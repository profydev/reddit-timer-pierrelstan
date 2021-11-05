import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const { worker } = require('./__mocks__/browser');
  // console.log(worker);
  worker.start();
}
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
