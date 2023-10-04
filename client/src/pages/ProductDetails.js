import React, { useContext } from 'react';
//useprams
import { useParams } from 'react-router-dom';
//usefech hook
import useFetch from '../hooks/useFetch';
//component
import RelatedProducts from '../components/RelatedProducts'
//contaest
import {CartContext} from '../context/CartContext'
const ProductDetails = () => {
  const { addToCart } = useContext(CartContext)
  
  const {id} = useParams();
  console.log(id);

  const {data} =useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if(!data){
    return <div className=' container mx-auto'>loading</div>;
  }
  //category
  const categoryTitle = data[0].attributes .categories.data[0].attributes.title;
  console.log(categoryTitle)
  return (
    <div className=' mb-16 pt-44 lg:pt[30px] xl:pt-0'>
      <div className=' container mx-auto'>
        {/* text  */}
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex 
          justify-center items-center'>
            <img src={`${data[0].attributes.image.data.attributes.url}`} 
          alt='' className=' w-full max-w-[65%]'></img></div>
        <div className=' flex-1 bg-primary p-12 xl:p-20 rounded-lg flex 
          flex-col justify-center'>
          <div className=' uppercase text-accent text-lg font-medium mb-2'>
            {data[0].attributes.categories.data[0].attributes.title} cameras
            </div>
            <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
            <p className='mb-12'>{data[0].attributes.description}</p>
            <div className=' flex items-center gap-x-8'>
            <div className=' text-3xl text-accent font-semibold'>${data[0].attributes.price}</div>
            </div>
            <button onClick={()=> addToCart(data, id)} className='btn btn-accent'>Add to cart</button>
        </div>
        </div>
        {/* r  */}
        <RelatedProducts categoryTitle={categoryTitle}/>
      </div>
    </div>
  );
};

export default ProductDetails;
