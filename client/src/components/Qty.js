import React, { useContext } from 'react';
//context
import { CartContext } from '../context/CartContext';
const Qty = ({item}) => {
  const {hadleInput,hadleSelector} = useContext(CartContext)
  return (<div className='flex gap-x-6 items-center text-primary'>
    {
      item.amount >10 ? 
      (<select onChange={(e)=> hadleSelector(e, item.id)} 
        className='p-2 rounded-lg w-[100px] h-12 outline-none text-primary'
      value={item.amount}
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        </select>) 
        : 
        (<input type='text' 
        onBlur={(e)=>hadleInput(e,item.id)}
      placeholder={`${item.amount}`}
      className=' text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px]
          outline-accent'
      />)
    }
    </div>);
};

export default Qty;
