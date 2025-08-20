import { useState } from 'react'
import './App.css'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolo from './components/Portfolo/Portfolo.jsx'
import Layout from './components/Layout/Layout.jsx'
import Notfound from './components/Notfound/Notfound.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'portfolo', element: <Portfolo /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> },
    ]
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
