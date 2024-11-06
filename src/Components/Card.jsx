/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const Card = ({product}) => {
  console.log(product)
  const {product_title,product_image,price,product_id} = product || {}
  return (
    <div>
      <div className="card glass w-56 ">
  <figure>
    <img
      src={product_image}
      className=" p-3 rounded-2xl w-fit  h-fit"
      />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price} </p>
    <div className="card-actions justify-start">
      <Link to={`/product/${product_id}`}>
      <button className="btn btn-primary btn-outline rounded-3xl">View Details</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Card;