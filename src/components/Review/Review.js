import React from 'react';
import { useEffect,useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
        
        const cartProducts = productkeys.map(key => {
            const product = fakeData.find(pd => pd.key=== key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    const removeBtnHandler = (productKey) =>{
        console.log("remove btn clicked");
        const newCart = cart.filter(pd=> pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div>
            <h1>Cart Items:{cart.length}</h1>
           {
               cart.map(pd => <ReviewItem product={pd} removeBtn={removeBtnHandler}></ReviewItem>)
           }
        </div>
    );
};

export default Review;