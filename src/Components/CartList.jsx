/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCartList, removeCart } from "../utils";
import CartDetails from "./CartDetails";
import toast from "react-hot-toast";



const CartList = () => {                            
  const allProducts = useLoaderData();
  
  const [cartList,setCartList] = useState([]);
  const [price,setPrice]= useState(0)

  // const [sort,setSort] = useState(allProducts);

  const handleSort = () =>{
    
      const sortedPrice = [...cartList].sort((a,b)=> b.price - a.price);
      setCartList(sortedPrice)

  }

  const handleRemove =(id)=>{
    removeCart(id);
    const storedCartList = getStoreCartList();
    // const storedCartInt = storedCartList.map(id => parseInt(id))

    const cartItems = [];
    for(const item of storedCartList ){
      const onlyData = allProducts.find(product => product.product_id == item)
      cartItems.push(onlyData)
    }

    // const  getStoreList = allProducts.filter(product => storedCartInt.includes(product.product_id))
    setCartList(cartItems)

    const Addprice = cartItems.reduce((pre,curr) => pre + curr.price, 0)
    setPrice(Addprice)
  }

 
  useEffect(()=>{
    const storedCartList = getStoreCartList();
    // const storedCartInt = storedCartList.map(id => parseInt(id))

    const cartItems = [];
    for(const item of storedCartList ){
      const onlyData = allProducts.find(product => product.product_id == item)
      cartItems.push(onlyData)
    }

    // const  getStoreList = allProducts.filter(product => storedCartInt.includes(product.product_id))
    setCartList(cartItems)

    const Addprice = cartItems.reduce((pre,curr) => pre + curr.price, 0)
    setPrice(Addprice)

  },[allProducts])



 
 

  return (
    <div className="mt-5">
          {/* Cart Button Here */}
      <div className="flex justify-between "> 
        <div></div>
        <div className="flex gap-4">
          <h1 className="mt-2 text-2xl font-bold">Total Cost:${price}</h1>
          <button onClick={handleSort} className="btn bg-[#9538E2] rounded-full text-white text-md"> Sort By Price </button>
          <button onClick={()=>handleRemove(cartList.product_id)}  className="btn bg-[#9538E2] rounded-full text-white text-md">Purchase</button>
        </div>
      </div>
           {/* Cart List here */}
       <h1 className="text-2xl ml-5 mt-2">Cart List</h1>
      {
        cartList.map(cart => <CartDetails   key={cart.product_id} cart={cart}></CartDetails>)
      }



      
    </div>



  );
}

export default CartList;