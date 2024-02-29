import React from 'react'

const Product = ({ data }) => {
    const { id, productName, price, productImage } = data;
  return (
    <div className='product'>
        <img src={productImage} alt='product' />
        <div className='description'>
            <p><b> {productName} </b></p>
            <p> ₹{price} </p>
        </div>
        <button className="addToCartBttn"> Add To Cart </button>
    </div>
  )
}

export default Product