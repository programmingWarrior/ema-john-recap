import React, { useState } from "react";
import fakeData from "../../../fakeData";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import './shop.css';
import {addToDatabaseCart} from '../../../utilities/databaseManager';
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart,setCart] = useState([]);

  const handleProducts = (product) =>{
    
    const newCart = [...cart,product];
    const sameProduct = newCart.filter(pd=> pd.key === product.key);
    const count = sameProduct.length;
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
      <h2>{products.length}</h2>
      <ul>
        {products.map((product) => (
          <Product product={product} handleProducts={handleProducts}
          showAddToCart = {true}
          key={product.key}></Product>
        ))}
      </ul>

      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
          
      </div>
     
    </div>
  );
};

export default Shop;
