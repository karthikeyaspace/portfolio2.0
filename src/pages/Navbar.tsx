import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const Navbar: React.FC<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> }> = ({ theme, setTheme }) => {
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
      logo: FaHome,
    },
    {
      name: 'Projects',
      link: '/projects',
      logo: FaSuitcase,
    },
    {
      name: 'Resume',
      link: '/resume',
      logo: FaFileAlt,
    },
  ]

  const handleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className='z-20 h-full w-screen fixed top-0 text-secondary '>
      <div className='h-20 px-4 md:px-12 backdrop-blur-lg flex flex-row flex-nowrap justify-between items-center'>

        <div className='text-2xl font-bold md:text-3xl text-secondary'>
          <a href='/'><h1>Karthikeya🚀</h1></a>
        </div>

        <div className='hidden md:flex text-xl gap-4 justify-center items-center border-2 border-secondary/40 bg-primary'>
          {
            navelements.map((element) => {
              const active = path === element.link ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
              return (
                <Link to={element.link} key={element.name} className={`w-32 p-2 hover:bg-secondary hover:text-primary text-center duration-150 ${active} `}>
                  {element.name}
                </Link>
              )
            })
          }
        </div>

        <div onClick={handleTheme} className="cursor-pointer">
          {theme === "dark" ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
        </div>

      </div>

      <div className='fixed bottom-0 left-0 right-0 w-full md:hidden z-20 '>
        <div className='flex flex-row flex-nowrap justify-between border-t-2 border-secondary items-center h-full'>
          {
            navelements.map((element) => {
              const active = path === element.link ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
              return (
                <Link to={element.link} key={element.name} className={`w-1/3 h-14 p-2 flex justify-center  items-center text-center duration-150 ${active}`}>
                  <element.logo size={26} />
                </Link>
              )
            })
          }
        </div>
      </div>


    </nav>
  )
}

export default Navbar