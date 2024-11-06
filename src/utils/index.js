import toast from "react-hot-toast";


const getStoreCartList = ()=>{
  // cart list
   const storedListStr = localStorage.getItem('cart-list');
   if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return []

   }

}

const addToCartList = (id)=>{
  const storedList = getStoreCartList();
  if(storedList.includes(id)){
    return toast.error('Products Already Exists !');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr)
    toast.success('Cart Successfully Added!')
  }
}


const getStoreWishList = ()=>{
  // cart list
   const storedListStr = localStorage.getItem('wish-list');
   if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return []

   }

}

const addToWishList = (id)=>{
  const storedList = getStoreWishList();
  if(storedList.includes(id)){
    return toast.error('WishList Already Exists !');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr)
    toast.success('WistList Successfully Added!')
  }
}

// remove cart List 
const removeCart=(id)=>{

  const storedList = getStoreCartList();
  const deleteList = storedList.filter(product => product.product_id !== id);
  localStorage.setItem('cart-list', JSON.stringify(deleteList))
  toast.success('Successfully Purched!')

}


export {addToCartList,addToWishList,getStoreCartList,getStoreWishList,removeCart}
