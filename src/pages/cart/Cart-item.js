import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = ({data}) => {
    const { id, productName, price, productImage } = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} alt="product" />
        <div className="description">
            <p><b>{[productName]}</b></p>
            <p> ₹{price} </p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(ev) => updateCartItemCount(Number(ev.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem