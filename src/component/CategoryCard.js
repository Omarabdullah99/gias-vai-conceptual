import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id,title,image,}=category
    return (
        <div  className='my-5 border py-10 mx-5 rounded'>
        <img src={image} alt="imagehere " />
            <h1 className='text-xl py-5'>Title {title}</h1>
            <p className='text-xl font-bold'>Category: {category.category}</p>
           <Link to={`/product/${id}`}> <button className='btn-primary py-3 px-2 rounded mt-5'>Catagori details</button></Link>
        </div>
    );
};

export default CategoryCard;