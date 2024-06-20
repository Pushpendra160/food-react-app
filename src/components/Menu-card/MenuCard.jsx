import React, { useEffect, useState } from 'react'

import './menucard.css'
const MenuCard = ({ name, price, image}) => {
  const [count, setCount] = useState(0);
  // const [totalprice, setTotalprice] = useState(0);
  
  const handleaddclick =()=>
  {
    setCount(count+1);
  };
  const handlesubclick =()=>
    {
      if(count>0)
      setCount(count-1);
    }
    var totalprice = count*price;


    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const itemIndex = cartItems.findIndex(item => item.name === name);
  
      if (count === 0) {
        if (itemIndex !== -1) {
          cartItems.splice(itemIndex, 1);
        }
      } else {
        const newItem = { name, price, count, total: count * price };
        if (itemIndex !== -1) {
          cartItems[itemIndex] = newItem;
        } else {
          cartItems.push(newItem);
        }
      }
  
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [count, name, price]);
  return (
    <div className='menu-card'>
       <div className='card-content'>
        <div className='product-image'>
        <img src={process.env.PUBLIC_URL + image} alt={name} />

        </div>
        <div className='product-details'>
          <h3>{name}</h3>
          <p>Price:{price}</p>
          {
            count===0? " ": <p>Total: {count}</p>
          }
          {
            count>0?<p>Cost(INR): {totalprice}</p>:''
          }

          
         
        </div>

        <div className='action-btn'>
        <button type="button" onClick = {handleaddclick} className='btn'
            style={{backgroundColor:"rgb(63,81,181)", color:"white"}}
         >+ </button>
        <button type="button" onClick={handlesubclick} className='btn' style={count>0?{ background:'red'}:{ background:'grey'}}>- </button>
        </div>
      
       </div>
    </div>
  )
}

export default MenuCard
