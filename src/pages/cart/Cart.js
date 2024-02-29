import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products';
import CartItem from './Cart-item';
import { useNavigate } from 'react-router-dom';

import './cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      
      <div><h1>Your Cart Items</h1></div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ?
        <div className="checkout">
        <p>Subtotal: ₹{totalAmount} </p>
        <button onClick={() => navigate('/')} >Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h1>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart