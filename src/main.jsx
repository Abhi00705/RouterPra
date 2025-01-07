import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Header from './components/Header.jsx'
import Home1 from './components/Home1.jsx'
import Cart1 from './components/Cart1.jsx'
import Help from './components/Help.jsx'
import Footer from './components/Footer.jsx'





const Main = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/home',
                element:<Home/>,
            },
            {
                path:'/cart',
                element:<Cart1/>
            },
            {
                path:'/help',
                element:<Help/>
            },
            {
                path:'/:id',
                element:<><About/></>,
            },

        ]
    },
    {
        path:'/about11',
        element:<About/>
    },
    // {
    //     path:'/cart',
    //     element:<Cart1/>
    // },
    // {
    //     path:'/help',
    //     element:<Help/>
    // }
        
    ]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
