import React, { useEffect } from 'react';
import { LayautWrapper } from "./LayautStyles";
import { useLocation } from 'react-router-dom';

const Layaut = ({children}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LayautWrapper>
        {children}
    </LayautWrapper>
  )
}

export default Layaut