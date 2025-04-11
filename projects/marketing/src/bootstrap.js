import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const marketingHistory = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate){
    marketingHistory.listen(onNavigate);
  }

  ReactDOM.render(<App history={marketingHistory} />, el);

  return {
    onParentNavigate(containerLocation) {
      const { pathname } = marketingHistory.location;

      if (pathname !== containerLocation.pathname){
        marketingHistory.push(containerLocation.pathname);
      }
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root-isolation-only');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount }; // for container, not in isolation mode