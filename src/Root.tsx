import React, { useState, useEffect } from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'

const Root: React.FC = () => {

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div className={`${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='mt-20 min-h-screen bg-primary text-secondary'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root