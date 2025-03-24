import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
  ReactDOM.render(
    <h1>Marketing up and run in isolation</h1>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root-isolation-only');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }; // for container, not in isolation mode