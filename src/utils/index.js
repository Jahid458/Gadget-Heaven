
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
    console.log(id, 'already exits');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr)
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
    console.log(id, 'already exits');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr)
  }
}


export {addToCartList,addToWishList,getStoreCartList,getStoreWishList}
