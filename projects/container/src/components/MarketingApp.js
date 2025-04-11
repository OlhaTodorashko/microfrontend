import React, { useRef, useEffect } from 'react';
import { mount as mountMarketingApp } from 'marketing/MarketingApp';
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const containerHistory = useHistory();

  // on mount phase
  useEffect(() => {
    const { onParentNavigate } = mountMarketingApp(ref.current, {
      initialPath: containerHistory.location.pathname,
      onNavigate: (marketingAppLocation) => {
        const { pathname} = containerHistory.location;

        // avoid infinite update
        if (pathname !== marketingAppLocation.pathname) {
          containerHistory.push(marketingAppLocation.pathname);
        }
      }
    });

    containerHistory.listen(onParentNavigate);
  }, []);

  return (
    <div ref={ref}/>
  )
};