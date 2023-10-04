import React, { useState, createContext, useEffect} from 'react';
import Cart from '../components/Cart';

//context
export const CartContext =createContext();
const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] =useState(false)
  const [cart, setcart] =useState([])
  const [itemsAmount, setitemsAmount] =useState(0)
  const [amount, setamount] =useState(0)
  const [total, settotal] =useState(0)

  //cart amount
  useEffect(()=>{
    const amount =cart.reduce((a,b)=>{
      return a +b.amount;
    }, 0);
    setitemsAmount(amount);
  }, [cart]);

  //cart total
  useEffect(()=>{
    const total =cart.reduce((a,c)=>{
      return a+c.attributes.price * c.amount;
    }, 0);
    settotal(total)
  }, [cart])
//add to cart
const addToCart=(item, id)=>{
  const itemID =parseInt(id);
  const newItem = {...item[0], amount: 1};
  setcart([...cart,newItem]);
  //check if item is already in the cart
  const cartItem= cart.find((items)=>{
    return items.id === itemID
  })
  console.log(cartItem);
  if(cartItem){
    const newCart =cart.map((item)=>{
      if(item.id===itemID){
        setamount(cartItem.amount +1);
        return {...item, amount:cartItem.amount +1}
      }else{
        return item
      }
      
    });
    setcart(newCart);
  }else{
        setcart([...cart, newItem]);
      }
    setIsOpen(true)
};

//remove
const removeFromCart= (id)=>{
  const newCart=cart.filter((item)=>{
    return item.id !== id;
  });
  setcart(newCart);
}

const hadleInput = (e, id)=>{
  const value= parseInt(e.target.value)
  //frist
  const cartItem =cart.find((item)=>{
    return item.id === id;
  })

  if(cartItem){
    const newCart =cart.map((item)=>{
      if(item.id===id){
        if(isNaN(value)){
          setamount(1);
          return {...item,amount:1};
        }else{
          setamount(value);
          return {...item,amount:value};
        }
      }else{
        return item;
      }
    })
    setcart(newCart);
  }
  setIsOpen(true);
  console.log(cartItem)
}

//clear cart
const clearCart=()=>{
  setcart([])
}
const hadleSelector = (e,id)=>{
  const value=parseInt(e.target.value)
  const cartItem =cart.find((item)=>{
    return item.id=== id;
  });
  if(cartItem){
    const newCart =[...cart].map((item)=>{
      if(item.id===id){
        setamount(value);
        return {...item, amount:value};
      } else{
        return item
      }
    });
    setcart(newCart)
  }
}
  return (
    <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount
      , hadleInput, hadleSelector,total, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
