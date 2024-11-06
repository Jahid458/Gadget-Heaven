import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ProductCard from "../Components/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import CartList from "../Components/CartList";
import WishList from "../Components/WishList";




const routes = createBrowserRouter([
  {
    path:'/',
    element:  <MainLayout />, 
    errorElement: <p>No Data Found</p>,
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
          element: <Dashboard />,
          
          children:[
            {
              path:'/dashboard',
              element: <CartList />,
              loader:() => fetch('../products.json'),
            },
            {
              path:'/dashboard/cart',
              element: <CartList />,
              loader:() => fetch('../products.json'),
            },
            {
              path:'/dashboard/wish',
              element: <WishList />,
              loader:() => fetch('../products.json'),
            }
          ]
         
        },
        {
            path:'/product/:product_id',
            element:<ProductDetails />,
            loader:() => fetch('../products.json')
        }
        
       
    ]
  }
])


export default routes;