import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ProductCard from "../Components/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import CartList from "../Components/CartList";
import WishList from "../Components/WishList";
import About from "../Components/About";
import ErroPage from "../Components/ErrorPage";
import ErrorPage from "../Components/ErrorPage";




const routes = createBrowserRouter([
  {
    path:'/',
    element:  <MainLayout />, 
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:()=> fetch('/categories.json'),
        children:[
          {
            path:'/',
            element:<ProductCard />,
            loader:() => fetch('/products.json')
          },
          {
            path:'/category/:category',
            element:<ProductCard />,
            loader:() => fetch('/products.json')
          },
          {
            path:'/category/All',
            element:<ProductCard />,
            loader:() => fetch('/products.json')
          },
          {
            path:'/category/Proccesor',
            element:<ErroPage />
          }

        ]
      },
      {
           path:'/about',
          element:<About />

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