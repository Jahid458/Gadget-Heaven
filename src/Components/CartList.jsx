/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { getStoreCartList, removeCart } from "../utils";
import CartDetails from "./CartDetails";






const CartList = () => {                            
  const allProducts = useLoaderData();
  
  const [cartList,setCartList] = useState([]);
  const [price,setPrice]= useState(0)


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
    setCartList(cartItems)

    const Addprice = cartItems.reduce((pre,curr) => pre + curr.price, 0)
    setPrice(Addprice)


    if(cartList.length > 0){
      document.getElementById('Purchase_Modal').showModal()
    }
   
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
          <button id="purchase" onClick={handleSort } className="btn bg-[#9538E2] rounded-full text-white text-md"> 
            
            Sort By Price </button>
          <button onClick={()=>handleRemove(cartList.product_id)}  className="btn bg-[#9538E2] rounded-full text-white text-md">Purchase</button>
        </div>
      </div>
           {/* Cart List here */}
       <h1 className="text-2xl ml-5 mt-2">Cart List</h1>
      {
        cartList.map(cart => <CartDetails   key={cart.product_id} cart={cart}></CartDetails>)
      }


              

      <dialog id="Purchase_Modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mx-32">Congratulations!</h3>
          <p className="py-4 font-bold text-xl mx-32">Payment SuccesdFully</p>
          <p>Thanks For Purchasing</p>
            <p>Total: ${price}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-full px-20 ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      

      
    </div>



  );
}

export default CartList;