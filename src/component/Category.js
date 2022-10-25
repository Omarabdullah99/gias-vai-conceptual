import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categorys=useLoaderData()
    console.log(categorys)
    return (
        <div>
          <h1 className='text-center font-bold text-5xl'>This categories has {categorys.length}</h1>

         <div className='grid grid-cols-2 w-9/12 mx-auto my-5'>
         
         {
            categorys.map(category => <CategoryCard
                key={category.id}
                category={category}
                >
                
                </CategoryCard>)
          }
         </div>  
        </div>
    );
};

export default Category;