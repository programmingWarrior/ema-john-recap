import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice =cart.reduce ((sum,element)=>(sum+element.price),0);

   
  return (
    <div>
      
  <h5>Order Summary: {cart.length}</h5>
  <p>TotalPrice:{totalPrice}</p>
  <Link to="/review"> <button className="btn-warning">Review Order</button></Link>
    </div>
  );
};

export default Cart;
