import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Info from './components/Info'
import NavBar from './components/NavBar'

function App() {

  const [count, setCount] = useState(0);


  const Router = createBrowserRouter([
    {
      path:'/',
      element:<app/>
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
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div> 
     
    <NavBar/>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
