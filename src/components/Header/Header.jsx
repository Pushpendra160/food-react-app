import React, { useEffect, useState } from 'react'
import './header.css'

import { Link, useLocation } from 'react-router-dom'


import { Modal } from "antd";


const Header = () => {
 
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0); 

  useEffect(() => {
    if (showModal) {
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(items);
      const total = items.reduce((sum, item) => sum + item.total, 0);
      setGrandTotal(total);

      const totalCount = items.reduce((sum, item) => sum + item.count, 0);
      setCartItemCount(totalCount);
    }
  }, [showModal]);
  const location = useLocation();
  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    const total = updatedItems.reduce((sum, item) => sum + item.total, 0);
    setGrandTotal(total);
  };
  const handleAddClick = (item) => {
    const updatedItems = cartItems.map(cartItem => {
      if (cartItem.name === item.name) {
        cartItem.count += 1;
        cartItem.total = cartItem.count * cartItem.price;
      }
      return cartItem;
    });
    updateCartItems(updatedItems);
  };
 
  const handleSubClick = (item) => {
    const updatedItems = cartItems.map(cartItem => {
      if (cartItem.name === item.name && cartItem.count > 0) {
        cartItem.count -= 1;
        cartItem.total = cartItem.count * cartItem.price;
      }
      return cartItem;
    }).filter(cartItem => cartItem.count > 0); // Remove items with 0 count
    updateCartItems(updatedItems);
  };

  return (
    <>
    <div className='header'>
        <div className='header-content'>
            <div className='food-logo'>
                 <img src={process.env.PUBLIC_URL+'/assets/restaurant_48px.svg'} alt="logo"  />
                 <Link to='/' ><h3>Food's Restaurant</h3></Link>
              
            </div>
            {location.pathname === '/menu' && (
            <div className='cart-cont'>
              <div className="cart-icon-container">
                <img
                  src={process.env.PUBLIC_URL+'/assets/cart.png'}
                  className='cart'
                  alt="cart"
                  onClick={() => setShowModal(true)}
                />
                {cartItemCount > 0 && (
                  <div className="cart-item-count"  onClick={() => setShowModal(true)}>{cartItemCount}</div>
                )}
                
                
              </div>
            </div>
          )}
        </div>
      

    </div>
    <Modal
        title='Order Summary'
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <div className='modal-content'>
          {cartItems.map(item => (
            <div className='cart-products' key={item.name}>
              <div className='cart-details'>
                <p>{item.name}</p>
                <p>{item.count}</p>
                <div className='cart-btn'>
                  <button type="button" style={{ backgroundColor: "rgb(63,81,181)" }} onClick={() => handleAddClick(item)}>+</button>
                  <button type="button" style={{ backgroundColor: "red" }} onClick={() => handleSubClick(item)}>-</button>
                </div>
              </div>
              <div>
                Total(INR): {item.total}
              </div>
            </div>
          ))}
          <div>
            Grand Total (INR): {grandTotal}
          </div>
          <div className='cart-action-btn'>
            <Link to='/thankyou'><button type="button" className='save' onClick={() => setShowModal(false)}>SAVE AND CHECKOUT</button></Link>
            <p onClick={() => setShowModal(false)}>CANCEL</p>
          </div>
        </div>
      </Modal>

    </>
  )
}

export default Header
