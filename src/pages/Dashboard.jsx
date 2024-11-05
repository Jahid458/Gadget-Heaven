
const Dashboard = () => {
  return (
    <div>
         <div className="bg-[#9538E2] p-16 mb-5 ">
        <h1 className="text-center text-3xl text-white">Dashborad</h1>
        <p className="w-3/5 ml-52 mt-5 text-center text-md text-white">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="flex gap-4 items-center ml-96 mt-8">
          <button className="btn rounded-full px-10 text-xl text-[#9538E2]">Cart</button>
          <button className="btn rounded-full px-10 text-xl text-[#9538E2]">WishList</button>
        </div>
      </div>

      <div className="flex justify-between">
        <div><h1 className="text-2xl ml-5 mt-2">Cart</h1></div>
        <div className="flex gap-4">
          <h1 className="mt-2 text-2xl font-bold">Total Cost:00TK</h1>
          <button className="btn bg-[#9538E2] rounded-full text-white text-md">Sort By Price</button>
          <button className="btn bg-[#9538E2] rounded-full text-white text-md">Purchase</button>
        </div>

      </div>
        
    </div>
  );
};

export default Dashboard;