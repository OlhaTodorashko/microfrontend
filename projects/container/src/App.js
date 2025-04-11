import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Progress from "./components/Progress";
import Header from "./components/Header";

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const history = createBrowserHistory(); // get access to browser history for manipulation

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      history.push('/dashboard');
    }
  }, [isSignIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignIn={isSignIn}
            onSignOut={() => { setIsSignIn(false)} }
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={() => {setIsSignIn(true)}}/>
              </Route>
              <Route path="/dashboard">
                {!isSignIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/">
                <MarketingAppLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
};
