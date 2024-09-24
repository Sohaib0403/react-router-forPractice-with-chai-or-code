import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact Us/ContactUs'
import { Route } from 'react-router-dom'
import User from './Components/User/User'
import GitHub from './Components/GitHub/GitHub'

/*const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      }
    ]
  }
])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>

      <Route path='' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/user:userid' element = {<User/>}/>
      <Route
      loader =  {() => {
        
      }}
      path='/github' 
      element = {<GitHub/>}/>


    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
