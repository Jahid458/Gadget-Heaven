import bannerimg from '../assets/banner.jpg'
const Banner = () => {
  return (
    // relative
    <div>
      {/* //Hero */}
     <div className="shadow-xl rounded-b-md container mx-auto ">
     <div className="hero bg-[#9538E2] p-36   rounded-b-md ">
   <div className="hero-content text-center ">
     <div className="text-white pb-16"> 
       <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
       <p className="py-6 w-7/12 text-center mx-56">
       Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
       </p>
       <button className="btn bg-white rounded-3xl">Shop Now</button>
     </div>
   </div>
     </div>

    
 
     </div>
      {/* //absolute top-[200px] left-80 */}
    <div className=" mt-[-200px]">
       <img src={bannerimg} className="border p-3 w-[70%] h-[450px] mx-auto rounded-2xl" alt="" />
    </div>

   </div>
 
    
  );
};

export default Banner;
