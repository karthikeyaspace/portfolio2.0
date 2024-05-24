import React from 'react'
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const LangGrid: React.FC = () => {

  const languages = [
    {
      name: "C++",
      icon: SiCplusplus ,
      color: "text-blue-500",
    },
    {
      name: 'Python',
      icon: FaPython,
      color: "text-yellow-500",
    },
    {
      name: 'HTML',
      icon: FaHtml5,
      color: "text-red-500",
    },
    {
      name: 'CSS',
      icon: FaCss3Alt ,
      color: "text-blue-500",
    },
    {
      name: 'React',
      icon: FaReact ,
      color: "text-blue-500",
    },
    {
      name: 'Git',
      icon: FaGitAlt ,
      color: "text-red-500",
    },
    {
      name: 'SQL',
      icon: TbSql ,
      color: "text-blue-500",
    },
    {
      name: 'JavaScript',
      icon: IoLogoJavascript ,
      color: "text-yellow-500",
    },
    {
      name: 'Node.js',
      icon: FaNodeJs ,
      color: "text-green-500",
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: "text-blue-500",
    },
    {
      name: 'Tailwind CSS',
      icon: RiTailwindCssFill ,
      color: "text-blue-500",
    },
    {
      name: 'MongoDB',
      icon: DiMongodb ,
      color: "text-green-500",
    }

  ]

  return (
    <div className='mt-16 w-full'>
      <div className='flex flex-row items-end flex-wrap mb-4 gap-1' >
          <h1 className='text-3xl md:text-4xl'>Lang Stack</h1>
          <div className='w-full h-[1px] bg-secondary'></div>
      </div>
      <div className='flex flex-row flex-wrap gap-4 items-center'>
        {
          languages.map((lang, index) => {
            return (
              <div key={index} className='px-10 py-3 bg-blue-100 rounded-md '>
                <lang.icon size={60} className={`text-5xl ${lang.color}`}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LangGrid