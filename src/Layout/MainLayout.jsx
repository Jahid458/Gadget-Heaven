import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <Navbar />
      <div className="min-h-[calc(100vh-232px)] container mx-auto  ">
        {/* Dynamic sections */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default MainLayout;