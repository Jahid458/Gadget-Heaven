import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreWishList } from "../utils";
import WishDetails from "./WishDetails";

const WishList = () => {
  const allProducts = useLoaderData();

  const [wishList, setWishList] = useState([])

  useEffect(()=>{
    const storedWishList = getStoreWishList();
    const storedWishInt = storedWishList.map(id => parseInt(id))


    const  getWishList = allProducts.filter(product => storedWishInt.includes(product.product_id))
    setWishList(getWishList)
  },[])
  return (
    <div>
       <h1 className="text-2xl ml-5 mt-2">Wish List</h1>
      {
        wishList.map(wish => <WishDetails key={wish.product_id} wish={wish}></WishDetails>)
     
      }
    </div>
  );
};

export default WishList;