import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const data = useLoaderData();
  const {category} = useParams();
  const [produsts,setProducts] = useState([]);

  useEffect(()=>{
    if(category){
      const filterByCategory = [...data].filter(product=>product.category ===category)
    setProducts(filterByCategory)
    }else{
      setProducts(data.slice(0,6))
    }
  },[category,data])

  console.log(data)           
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-72 gap-y-5 ml-10">
     {
      produsts.map(product => <Card key={product.id} product={product}></Card>)
     } 
    </div>
    
    </>
  ); 
};

export default ProductCard;