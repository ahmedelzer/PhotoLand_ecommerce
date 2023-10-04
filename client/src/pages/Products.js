import React, {useState, useEffect} from 'react';


import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
//conponent
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const {id}= useParams();
  const {data}=useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle]= useState(null);
  
  useEffect(()=>{
    if(data){
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  },[data]);
  return (<div className='mb-16 pt-40 lg:pt-0'>
    <div className=' container mx-auto'>
      <div className='flex gap-x-[30px]'>
        <CategoryNav/>
      </div>
      <main>
        {/* titl  */}
        <div className='py-3 text-xl uppercase text-center lg:text-left'>{title} cameras</div>
        {/* product  */}
        <div className='grid grid-cols-3 lg:grid-cols-3 
        xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
          {data?.map((product)=>{
            return <Product product={product} key={product.id}/>;
          })}
        </div>
      </main>
    </div>
    </div>
    );
};

export default Products;
