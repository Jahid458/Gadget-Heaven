import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
   const categories = useLoaderData()
   console.log(categories)
  return (

    <div>
      <Banner />
      <div className="">
      {/* Category sections */}
      <h1 className="text-center mt-5 font-bold text-4xl mb-12">Explore Cutting-Edge Gadgets</h1>
  

       <div className="grid grid-cols-4">
        <div className="grid grid-cols-1">
            <Categories categories={categories}/>
        </div>
        <div className=" grid-cols-3 ">
            <Outlet />
        </div>

       </div>
    
           
       </div>
      {/* Outlet Dynamic nested component */}

   
    </div>
    
  );
};

export default Home;