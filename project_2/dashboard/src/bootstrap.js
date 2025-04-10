import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const authHistory = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath] // without initial path component resolves under '/' - no visual content on page
  });

  if (onNavigate){
    authHistory.listen(onNavigate);
  }

  ReactDOM.render(<App history={authHistory} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate(containerLocation) {
      const { pathname } = authHistory.location;

      if (pathname !== containerLocation.pathname){
        authHistory.push(containerLocation.pathname);
      }
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root-isolation-only');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount }; // for container, not in isolation mode