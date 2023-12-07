import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About';
import Contact from './components/Contact';
import Error from "./components/Error"
import { createBrowserRouter , Outlet, RouterProvider  } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu"

// * not using key gives error of not giving key to same childs (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice) //s
// 


const Footer = ()=> { 
  <div className='footer'>
    <h2>footer</h2>
  </div>
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet />
      
    </div>
  );
};
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [ 
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error/>,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)