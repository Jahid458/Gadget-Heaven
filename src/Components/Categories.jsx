/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-5 px-7 shadow-2xl py-8">
      {categories.map((category) => (
        <NavLink
          // /category/:category
          to={`/category/${category.category}`}
          key={category.category}
          className="btn rounded-full text-xl font-bold py-2"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
