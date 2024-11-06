import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const location = useLocation();
   //|| location.pathname.includes('/category')

  return (
  <div className={`container mx-auto  ${ location.pathname === '/' || location.pathname.includes('/category') ? 'bg-[#9538E2] ':'' }  px-12  `}>
   <div className="navbar   ">
    <div className="navbar-start ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
        //
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
       
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Gadget Heaven</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-5 text-xl font-bold ">
            <Link className="hover:text-[#9538E2]" to="/">Home</Link>
            <Link className="hover:text-[#9538E2]" to="/statistics">Statistics</Link>
            <Link className="hover:text-[#9538E2]" to="/dashboard">Dashboard</Link>
            <Link className="hover:text-[#9538E2]" to="/about">About</Link>
      </ul>
    </div>
    <div className="navbar-end flex gap-5 relative">
      
       <IoCartOutline className=" border w-8 h-8 text-black  rounded-full "/>         
       <span className="absolute bg-gray-600 rounded-full p-1 px-2 font-bold right-8 -top-4 text-white">0</span>
      <CiHeart className="border  w-8 h-8 text-black rounded-full" /> 
      <span className="absolute bg-gray-600 rounded-full p-1 px-2 font-bold  -top-4  text-white">0</span>

    </div>
    </div>


  
  </div>
  );
};

export default Navbar;