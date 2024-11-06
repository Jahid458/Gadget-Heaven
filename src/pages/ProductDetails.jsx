import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { addToCartList, addToWishList } from "../utils";



const ProductDetails = () => {
  const { product_id } = useParams();
  console.log(product_id);
  const allProductData = useLoaderData();
  console.log(allProductData);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const oneData = allProductData.find(
      (product) => product.product_id === parseInt(product_id)
    );
    setProduct(oneData);
  }, [allProductData, product_id]);

  const {product_title,product_image,price,description,specification,rating} = product;

  const handleAddCart = (id) =>{
      addToCartList(id)
  }

  const handleWishList = (id) =>{
    addToWishList(id)
  }

  

  return (
    <div>
      <div className="bg-[#9538E2] p-16 mb-5 ">
        <h1 className="text-center text-3xl text-white">Product Details</h1>
        <p className="w-3/5 ml-44 mt-5 text-center text-md text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
        
      <div className="p-36 relative -top-48">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={product_image}
              className="w-[500px]"
              alt="Album"
            />
          </figure>
          <div className="flex flex-col items-start gap-3 mt-5">
            <h2 className="card-title">{product_title}</h2>
            <p className="font-bold text-xl">Price: ${price}</p>
            <span className="outline rounded-full text-lg font-medium bg-green-300 px-3 text-green-500">In Stock</span>
            {description}
            <h1 className="font-bold text-xl">Specification:</h1>
            <ul className="text-xl ml-6">
              {
                specification && 
                  specification.map((item, i)=>(
                    <li className="list-decimal" key={i}>
                      {item}
                    </li>
                  ))
              }
            </ul>

            <h1 className="text-xl font-bold">Rating</h1>
            <div className="flex gap-2">
              <div className="flex gap-1 text-2xl">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500"/>
                  <FaStar className="text-yellow-500"/>
                  <FaStar className="text-yellow-500" />
                  <CiStar />
              </div>
              <div>
               <button className="text-2xl -mt-1">{rating}</button>
              </div>
            </div>
            
           
            <div className="card-actions justify-start mb-10">

              
          
                 <button onClick={()=>handleAddCart(product_id)} className="btn rounded-full bg-[#9538E2] hover:bg-[#9538E2] text-white text-lg">Add to Cart <CiShoppingCart className="text-4xl "/></button>

            
              <button onClick={()=>handleWishList(product_id)}><CiHeart className="bg-white border   text-black rounded-full mt-2 text-4xl" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
