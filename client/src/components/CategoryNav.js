import React from 'react';
//usefech hook
import useFetch from '../hooks/useFetch';
//link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const {data}=useFetch('/categories');
  console.log(data)
  return (
    <aside>
   <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
    <div className='bg-accent py-4 text-primary uppercase font-semibold 
    items-center justify-center'>
      Browse Categories
      </div>
    <div className='flex flex-col gap-y-6 p-6'>
      {data?.map((category)=>{
        return <Link className=' cursor-pointer uppercase' to={`/products/${category.id}`} 
        key={category.id}>{category.attributes.title}</Link>
      })}
    </div>
   </div>
  </aside>
  );
};

export default CategoryNav;
