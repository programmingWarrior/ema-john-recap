import React from 'react';
import {Button} from 'react-bootstrap';

const ReviewItem = (props) => {

    console.log(props);
    const {img,name,key}= props.product;

    return (
        <div style={{border: '1px solid purple', marginTop:'30px'}}>
            <h1>This is review Item details</h1>
            <h6>{name}</h6>
            <img src={img} alt=""/>
            <br/>
            <Button onClick= {()=>props.removeBtn(key)} className="btn warning">Remove</Button>
        </div>
    );
};

export default ReviewItem;