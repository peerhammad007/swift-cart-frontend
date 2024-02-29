import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CartItem = ({data}) => {
    const { id, productName, price, productImage } = data;
    const {cartItems} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} alt="product" />
        <div className="description">
            <p><b>{[productName]}</b></p>
            <p> ₹{price} </p>
            <div className="countHandler">
                <button> - </button>
                <input value={cartItems[id]} />
                <button> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem