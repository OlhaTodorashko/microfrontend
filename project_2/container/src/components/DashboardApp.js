import React, { useRef, useEffect } from 'react';
import { mount as mountDashboardApp } from 'dashboard/DashboardApp';

export default () => {
  const ref = useRef(null);

  // on mount phase
  useEffect(() => {
    mountDashboardApp(ref.current);
  }, []);

  return (
    <div ref={ref}/>
  )
};