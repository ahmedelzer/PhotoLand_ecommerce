import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//icon
import {IoClose} from 'react-icons/io5'

import Qty from '../components/Qty'
import { CartContext } from '../context/CartContext';
const CartItem = ({item}) => {
  const {removeFromCart} =useContext(CartContext)
  return (<div className='flex gap-x-8'>
    <Link to={`product/${item.id}`}
    className='w-[70px] h-[70px]'>
    <img src={`${item.attributes.image.data.attributes.url}`} alt=''></img>
    </Link>
    <div className='flex-1'>
      {/* yy */}
      <div className='flex gap-x-4 mb-3'>
        <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div onClick={() => removeFromCart(item.id)} className=' cursor-pointer text-[24px] hover:text-accent 
            transition-all'>
            <IoClose/>
          </div>
        </div>
        <div className=' items-center flex gap-x-12'>
          {/* lsslsl */}
        <div className='flex gap-x-4 mb-2'>
          <Qty item={item}/>
          </div>
          <div className='text-accent text-xl'>
            $ {item.attributes.price * item.amount}
          </div>
      </div>
      <div>
          <span className='text-accent '>
          $ {item.attributes.price} per price
          </span>
          </div>
    </div>
        </div>

  );
};

export default CartItem;
