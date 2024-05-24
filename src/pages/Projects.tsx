import React from 'react'
import data from '../assets/Projectdata'
import { FaGithub } from 'react-icons/fa'

const Projects: React.FC = () => {
  console.log(data)
  return (
    <div className="w-full transition-all duration-300 mt-20 px-6 flex flex-row flex-wrap justify-center gap-4">
      {
        data.projects.map((project, index) => (
          <div className="max-w-96 mb-12 rounded-lg overflow-hidden border-[1px] border-secondary bg-primary text-secondary" key={index}>
            <div className='px-6 py-4'>
              <div className='flex flex-row justify-between  mb-2'>
                <h3 className='font-bold text-xl mb-2'>{project.name}</h3>
                <div className='flex flex-row justify-center gap-2'>
                  <a href={project.github}> <FaGithub size={32} /> </a>
                  {project.tryout &&
                    <a href={project.tryout}> <p className='font-bold text-lg'>Tryout</p></a>
                  }
                </div>
              </div>
              <p className='text-base'>{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {
                project.techStack.map((tech, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                ))
              }
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Projects