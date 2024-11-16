import { useNavigate } from "react-router-dom";
import bannerimg from "../assets/banner.jpg";
const Banner = () => {
  const navigate = useNavigate();
  const dashboardRoute = () => {
    navigate("/dashboard");
  };
  return (
    // relative
    <div>
      {/* //Hero */}
      <div className="shadow-xl rounded-b-md container mx-auto ">
        <div className="hero bg-[#9538E2] lg:p-36  rounded-b-md ">
          <div className="hero-content text-center mt-7">
            <div className="text-white pb-16 flex flex-col items-center ">
              <h1 className="lg:text-5xl font-bold text-xl lg:mr-3">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6 lg:w-7/12 text-center lg:mx-56">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button
                className="btn bg-white rounded-3xl"
                onClick={dashboardRoute}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:mt-[-200px] mt-[-60px]">
        <img
          src={bannerimg}
          className="border p-3 w-[70%] lg:h-[450px]  h-[300px]  mx-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
