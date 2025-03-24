import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root-isolation-only');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }; // for container, not in isolation mode