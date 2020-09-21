import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = (props) => {
  console.log(props.product.key);
  const {
    img,
    key,
    name,
    price,
    priceFraction,
    seller,
    shipping,
    stock,
  } = props.product;
 
  return (
    <div className="productContainer">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div>
        <h6 className="product-name"><Link to={"/product/"+key}>{name}</Link></h6>
        <p>by {seller}</p>
        <br />
        <h3> ${price}</h3>
        <p>
          <small>Only {stock} left in stook - Order soon! </small>
        </p>
        { props.showAddToCart && <button onClick={() => props.handleProducts(props.product)} className="btn-warning product-btn">
            Add To Cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
