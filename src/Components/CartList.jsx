import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCartList } from "../utils";
import CartDetails from "./CartDetails";



const CartList = () => {                            
  const allProducts = useLoaderData();
  
  const [cartList,setCartList] = useState([]);

 
  useEffect(()=>{
    const storedCartList = getStoreCartList();
    const storedCartInt = storedCartList.map(id => parseInt(id))

    const  getStoreList = allProducts.filter(product => storedCartInt.includes(product.product_id))
    setCartList(getStoreList)

  },[])


  return (
    <div className="mt-5">
          {/* Cart Button Here */}
      <div className="flex justify-between "> 
        <div></div>
        <div className="flex gap-4">
          <h1 className="mt-2 text-2xl font-bold">Total Cost:0$</h1>
          <button className="btn bg-[#9538E2] rounded-full text-white text-md">Sort By Price</button>
          <button className="btn bg-[#9538E2] rounded-full text-white text-md">Purchase</button>
        </div>
      </div>
           {/* Cart List here */}
       <h1 className="text-2xl ml-5 mt-2">Cart List</h1>
      {
        cartList.map(cart => <CartDetails key={cart.product_id} cart={cart}></CartDetails>)
      }

      
    </div>
  );
}

export default CartList;