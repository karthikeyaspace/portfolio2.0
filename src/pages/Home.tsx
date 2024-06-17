import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import LangGrid from '../components/LangGrid'
import TechGrid from '../components/TechGrid'
import Github from '../components/Github'
import { useOutletContext } from 'react-router-dom'
import Projects2 from '../components/Projects2'
import MailMe from '../components/MailMe'

const Home: React.FC = () => {
  const { theme } = useOutletContext<{theme: string}>() 
  return (
    <div className='px-8 pb-20 md:px-0 md:max-w-[80%] lg:max-w-[50%] m-auto'>
      <Landing theme={theme} />
      <About />
      <LangGrid />
      <TechGrid />
      <Projects2 />
      <Github theme={theme}/>
      <MailMe />
    </div>
  )
}

export default Home