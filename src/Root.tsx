import React, { useState, useEffect } from 'react';
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop';
import { Analytics } from '@vercel/analytics/react';

interface OutletContextValue {
  theme: string;
}

const Root: React.FC = () => {

  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem('theme');
    const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    return storedTheme !== null ? storedTheme : sysTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  console.log(theme, 'root')

  const context: OutletContextValue = {
    theme,
  };

  return (
    <div className={`${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop />
      <div className='pt-20 min-h-screen bg-primary  text-secondary'>
        <Outlet context={context} />
      </div>
      <Analytics  />
    </div>
  )
}

export default Root