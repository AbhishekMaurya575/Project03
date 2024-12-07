import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Github" element={<Github/>}/>
      
    

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={Router}/>
  </StrictMode>,
)
