import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Info from './components/Info'
import NavBar from './components/NavBar'

function App() {

  const Router = createBrowserRouter([
   {
    path:'/',
    element:<NavBar/>
   },
    {
      path:'/home',
      element:<Home/> 
    },
    {
      path:'/info',
      element:<Info/> 
    },
  ])


  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
