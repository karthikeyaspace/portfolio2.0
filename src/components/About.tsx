import React from 'react'

const About: React.FC = () => {
  return (
    <div className='w-full '>
      <div className='flex flex-row items-end flex-wrap' >
          <h1 className='text-3xl md:text-5xl'>About ME.Self</h1>
          <div className='w-full h-[1px] bg-secondary'></div>
      </div>
      <div className='mt-12'>
        <p className='text-lg md:text-2xl '>
          Hey, I am Karthikeya, a Computer Science student from Hyderabad, India. I am currently pursuing my 2nd year B-tech from VNRVJIET engineering college in hyderabad.
          I am a Full Stack Developer and a Machine Learning Enthusiast. I love to build things in public. 
          I am constantly seeking new opportunities to learn and grow and love collaborative work and team environments.
          Apart from tech stuff, I like to play basketball, read books, and watch movies. 
        </p>
        <p className='text-lg mt-2'>view my v1 <a href="https://karthikeyaveruturi.vercel.app" className='text-blue-600'>portfolio</a> </p>
      </div>
    </div>
  )
}

export default About