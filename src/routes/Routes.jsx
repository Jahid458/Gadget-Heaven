import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ProductCard from "../Components/ProductCard";



const routes = createBrowserRouter([
  {
    path:'/',
    element:  <MainLayout />, 
    children:[
      {
        path:'/',
        element:<Home />,
        loader:()=> fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<ProductCard />,
            loader:() => fetch('../products.json')
          },
          {
            path:'/category/:category',
            element:<ProductCard />,
            loader:() => fetch('../products.json')
          },
          {
            path:'/category/All',
            element:<ProductCard />,
            loader:() => fetch('../products.json')
          }
        ]
      },
        {
          path:'/statistics',
          element:<Statistics />
        },
        {
          path:'/dashboard',
          element: <Dashboard />
        }
    ]
  }
])


export default routes;