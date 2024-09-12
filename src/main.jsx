import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




 const router = createBrowserRouter([
    {

      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },

        {
          path:'about',
          element:<About/>
        },

        {
          path:'contact',
          element:<Contact/>
        }

      ]
     
      
    }
  ])




createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
  </RouterProvider>
  
)
