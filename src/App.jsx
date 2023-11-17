import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from './Pages/Root';
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ErrorPage from './Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Projects/>, loader: async ()=> 
        {
          try
          {
            const response = await fetch("https://portfolio-web3350-default-rtdb.firebaseio.com/portfolio.json");
            return response;
          }
          catch (error)
          {
            console.log("API FETCH failed");
            console.log(error);
          }
        }
      },
      { path: "/contact", element: <Contact/>}
    ],
  },
]);

function App() 
{
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
