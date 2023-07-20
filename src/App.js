import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home/Home';
import Pagenotfound from './Components/Pagenotfound/Pagenotfound';
import Login from './Components/Login/Login';


let routes = createBrowserRouter([

      { index: true, element: <Home />},
      { path: 'login', element: <Login /> },
      { path: '*', element: <Pagenotfound /> }

   
])

export default function App() {




  return <RouterProvider router={routes}></RouterProvider>
  


}
