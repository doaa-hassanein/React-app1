import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createHashRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';



function App() {

  const myRouter = createHashRouter([

    
     { path: "/", element: <Project />},

        { path: "/portfolio", element: <Portfolio /> },  // each obj is a route ( path , element )

        { path: "/about", element: <About /> },

        { path: "/contact", element: <Contact /> }
      
    

  ])

  return (
    <>
     
      <RouterProvider router={myRouter} />

    </>
  )
}

export default App
