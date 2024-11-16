import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Banner />
      <div className="">
        {/* Category sections */}
        <h1 className="text-center mt-5 font-bold lg:text-4xl text-xl mb-12">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="grid grid-cols-4 gap-6 lg:gap-24">
     
          <div className=" col-span-1 -mx-10"> 
            <Categories categories={categories} />
          </div>
          <div className="col-span-3">

          <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
