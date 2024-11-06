import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
         <div className="bg-[#9538E2] p-16 mb-5 flex flex-col justify-center items-center ">
        <h1 className="text-center text-3xl text-white">Dashborad</h1>
        <p className="w-3/5  mt-5 text-center text-md text-white">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="flex gap-4 justify-center items-center mt-8">
          <NavLink to='/dashboard/cart' className="btn btn-[#9538E2] rounded-full px-10 text-xl text-[#9538E2]">Cart</NavLink>
          <NavLink to='/dashboard/wish' className="btn btn-outline rounded-full px-10 text-xl text-white">WishList</NavLink>
        </div>
      </div>

   
        <Outlet />
    </div>
  );
};

export default Dashboard;