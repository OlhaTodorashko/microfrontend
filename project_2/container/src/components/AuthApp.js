import React, { useRef, useEffect } from 'react';
import { mount as mountAuthApp } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const containerHistory = useHistory();

  // on mount phase
  useEffect(() => {
    const { onParentNavigate } = mountAuthApp(ref.current, {
      initialPath: containerHistory.location.pathname,
      // onNavigate: ({ pathname: nextPathname }) => { <- object destruction with property `pathname` rename to `nextPathname`
      onNavigate: (authAppLocation) => {
        const { pathname} = containerHistory.location;

        if (pathname !== authAppLocation.pathname) { // avoid infinite update
          containerHistory.push(authAppLocation.pathname);
        }
      }
    });

    containerHistory.listen(onParentNavigate);
  }, []);

  return (
    <div ref={ref}/>
  )
};