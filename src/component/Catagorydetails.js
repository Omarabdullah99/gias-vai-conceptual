import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagorydetails = () => {
    const details= useLoaderData()
    const {title,price,description,rating}=details
    return (
        <div>
            <p>{title} </p>
            <p>{price} </p>
            <p>{description} </p>
            <p>{rating.rate} </p>
        </div>
    );
};

export default Catagorydetails;