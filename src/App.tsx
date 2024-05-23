import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Root'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

const App: React.FC = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/resume',
          element: <Resume />
        }
      ]
    },
  ])


  return (
    <RouterProvider router={routes} />
  )
}

export default App