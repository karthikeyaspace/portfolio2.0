import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import LangGrid from '../components/LangGrid'
import TechGrid from '../components/TechGrid'
import Github from '../components/Github'
import { useOutletContext } from 'react-router-dom'

const Home: React.FC = () => {
  // landing
  // about
  // grid - langs
  // grid - technologies
  // github contribs
  const { theme } = useOutletContext<{theme: string}>() 
  console.log(theme, 'home')
  return (
    <div className='px-4 md:px-0 md:max-w-[80%] lg:max-w-[60%] m-auto hme'>
      <Landing theme={theme} />
      <About />
      <LangGrid />
      <TechGrid />
      <Github />

    </div>
  )
}

export default Home