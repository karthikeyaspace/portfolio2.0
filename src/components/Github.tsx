import React from 'react'
import GitHubCalendar from "react-github-calendar"

const Github: React.FC<{theme:string}> = ({theme}) => {

  return (
    <div className='mt-12 w-full'>
      <div className='flex flex-row items-end flex-wrap mb-4 gap-1' >
        <h1 className='text-3xl md:text-4xl'>Github Contributions</h1>
        <div className='w-full h-[1px] bg-secondary'></div>
      </div>
      <div className="flex justify-center opacity-80 pb-8 w-full ">
        <GitHubCalendar
          username="karthikeyaspace"
          blockSize={13}
          blockMargin={5}
          errorMessage="Could not load GitHub calendar of karthikeyaspace"
          colorScheme={theme === 'light' ? 'dark' : 'light'}
          fontSize={13}
          style={{ cursor: 'crosshair' }}
        />
      </div>
    </div>
  )
}

export default Github