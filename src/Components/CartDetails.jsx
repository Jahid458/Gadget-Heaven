import { TiDeleteOutline } from "react-icons/ti";
const CartDetails = ({cart}) => {
  
  return (
    <div>
     
       <div  className="flex justify-between  p-5 border shadow-lg border-gray-300 rounded-md mt-5">
            <div className="flex gap-5">
            <img className="rounded-full  w-[150px] h-[145px]" src={cart.product_image} alt="" />
            <div className="flex flex-col gap-3">
            <h1 className="text-2xl mt-4 font-bold">{cart.product_title}</h1>
            <p className="text-xl text-gray-400">{cart.description}</p>
            <p className="text-xl text-black">Price:$ {cart.price}</p>
            </div>
            </div>
            <div>
            <TiDeleteOutline  className=' text-red-600  font-bold text-5xl mt-10'/>
            </div>
            </div>
           
            </div>
 
  
  );
};

export default CartDetails;