/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";

const WishDetails = ({ wish }) => {
  return (
    <>
 
      <div>
        <div className="flex justify-between  p-5 border shadow-lg border-gray-300 rounded-md mt-7">
          <div className="flex gap-5">
            <img
              className="rounded-full  w-[150px] h-[145px]"
              src={wish.product_image}
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl mt-4 font-bold">{wish.product_title}</h1>
              <p className="text-xl text-gray-400">{wish.description}</p>
              <p className="text-xl text-black">Price:$ {wish.price}</p>
                 
                <div>
                  <button className="btn bg-[#9538E2] rounded-3xl text-white">Add To Cart</button>
                </div>
            </div>
          </div>
          <div>
            <TiDeleteOutline className=" text-red-600  font-bold text-5xl mt-10" />
          </div>


        </div>
     
      </div>
    </>
  );
};

export default WishDetails;
