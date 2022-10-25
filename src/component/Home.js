import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const productsCatagory=useLoaderData();
    console.log(productsCatagory)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>All Products category {productsCatagory.length}</h1>
            <div className='grid grid-cols-3 '>
            {
                productsCatagory.map(category => <div  className='  bg-orange-300 mx-10 p-10 w-64 rounded' key={category.name}>
                    <p className='text-white text-xl font-bold'>{category.name}</p>
                    <Link to={`/category/${category.name}`}><button className='btn-primary px-2 py-3 rounded mt-5'>Checking Now!</button></Link>
                    </div>)
                    
            }
            </div>
        </div>
    );
};

export default Home;