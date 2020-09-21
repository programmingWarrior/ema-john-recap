import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import "./productDetail.css";
const ProductDetail = () => {
  const { productKey } = useParams();
  const exactProduct = fakeData.find((pd) => pd.key === productKey);
  console.log(exactProduct);
  return (
    <div>
        <h1>Your Product Details:</h1>
      <Product showAddToCart={false} product={exactProduct}></Product>
    </div>
  );
};

export default ProductDetail;
