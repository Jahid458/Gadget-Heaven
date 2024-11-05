/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-5 px-7 shadow-2xl py-8 ml-20">
      {categories.map((category) => (
        <NavLink
          // /category/:category bg-[#9538E2]
          to={`/category/${category.category}`}
          key={category.category}
          
          className={({isActive})=>`btn rounded-full text-xl font-bold py-2 ${isActive ? 'hover:bg-[#9538E2] hover:text-white':''}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
