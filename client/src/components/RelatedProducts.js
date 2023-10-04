import React from 'react';
//usefetch
import useFetch from '../hooks/useFetch';
//componnrnt
import ProductSlider from '../components/ProductSlider'
const RelatedProducts = ({categoryTitle}) => {
  const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);
  
  return (<div className=' mb-16'>
    <div className=' container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>RelatedProducts</h2>
      <ProductSlider data={data}/>
    </div>
    </div>
  );
};

export default RelatedProducts;
