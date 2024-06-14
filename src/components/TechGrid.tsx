import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const TechGrid: React.FC = () => {

  const technologies = [
    {
      name: 'VS Code',
      icon: VscVscode,
      color: 'text-blue-500'
    },
    {
      name: 'GCP',
      icon: DiGoogleCloudPlatform,
      color: 'text-yellow-500'
    },
    {
      name: 'Canva',
      icon: SiCanva,
      color: 'text-blue-600'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      color: 'text-blue-500'
    },
    {
      name: 'Vercel',
      icon: IoLogoVercel,
      color: 'text-black'
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: 'text-orange-600'
    },
    {
      name: "Github",
      icon: SiGithub,
      color: "text-black"
    }
  ]

  return (
    <div className='mt-16 w-full'>
      <div className='flex flex-row items-end flex-wrap mb-4 gap-1' >
          <h1 className='text-3xl md:text-4xl'>Tech Stack</h1>
          <div className='w-full h-[1px] bg-secondary'></div>
      </div>
      <div className='mt-8 flex flex-row flex-wrap gap-4 items-center justify-center md:justify-start'>
        {
          technologies.map((tech, index) => {
            return (
              <div key={index} className='group relative px-11 py-3 bg-blue-100 rounded-md flex flex-col items-center justify-center transition-all duration-300 '>
                <tech.icon size={50} className={`text-5xl ${tech.color} transition-opacity duration-300 group-hover:opacity-0`}/>
                <p className='absolute opacity-0 text-black text-lg transition-opacity duration-300 group-hover:opacity-100'>{tech.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TechGrid