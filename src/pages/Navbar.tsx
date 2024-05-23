import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



const Navbar: React.FC<{theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>}> = ({theme, setTheme}) => {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    const page = navelements.find((element) => element.link === path)
    document.title = `Karthikeya | ${page?.name}`
  }, [path])  

  const navelements = [
    {
      name: 'Home',
      link: '/',
      mname: 'H',
    },
    {
      name: 'Projects',
      link: '/projects',
      mname: 'P',
    },
    {
      name: 'Resume',
      link: '/resume',
      mname: 'R',
    },
  ]

  const handleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='h-20 w-screen fixed top-0 bg-primary text-secondary'>
      <nav className='w-full h-full px-12 flex flex-row flex-nowrap justify-between items-center'>

        <div className='text-3xl text-secondary'>
          <a href='/'><h1>Karthikeya🚀</h1></a>
        </div>

        <div className='hidden lg:flex  text-xl gap-4 backdrop-blur-md p-1 justify-center items-center border-2 border-secondary/40 bg-primary'>
          {
            navelements.map((element) => {
              const active = path === element.link ? 'bg-secondary/40 text-secondary' : ''
              return (
                <Link to={element.link} key={element.name} className={`w-32 p-2 text-center bg-primary text-secondary hover:bg-secondary/40 hover:text-secondary duration-150 ${active} `}>
                  {element.name}
                </Link>
              )
            })
          }
        </div>

        <div onClick={handleTheme} className="cursor-pointer">
          {theme === "dark" ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
        </div>

      </nav>
    </div>
  )
}

export default Navbar