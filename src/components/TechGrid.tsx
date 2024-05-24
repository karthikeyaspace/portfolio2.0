import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";

const TechGrid: React.FC = () => {

  const technologies = [
    {
      name: 'VS Code',
      icon: VscVscode,
      color: 'text-blue-500'
    },
    {
      name: 'Google Cloud Platform',
      icon: DiGoogleCloudPlatform,
      color: 'text-yellow-500'
    },
    {
      name: 'Canva',
      icon: SiCanva,
      color: 'text-red-500'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      color: 'text-blue-500'
    },
    {
      name: 'Vercel',
      icon: IoLogoVercel,
      color: 'text-blue-500'
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: 'text-yellow-500'
    }
  ]

  return (
    <div className='mt-16 w-full'>
      <div className='flex flex-row items-end flex-wrap mb-4 gap-1' >
          <h1 className='text-3xl md:text-4xl'>Tech Stack</h1>
          <div className='w-full h-[1px] bg-secondary'></div>
      </div>
      <div className='flex flex-row flex-wrap gap-4 items-center'>
        {
          technologies.map((tech, index) => {
            return (
              <div key={index} className='px-10 py-3 bg-blue-100 rounded-md '>
                <tech.icon size={60} className={`text-5xl ${tech.color}`}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TechGrid