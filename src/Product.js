import React from 'react'
import guitar from '../src/images/download.jpg'
import './Product.css'
function Product() {
  return (
    <div className='product'>
<div className='product_info'>
    <p>Smart Watch to watch you</p>
<p className="product_price">
    <small>$</small>
    <strong>22.78</strong>
</p>
<div className="product_rating">
    <p>⭐</p>

    
</div>

</div>
<img src={guitar} alt="" />
<button>Add to basket</button>
    </div>
  )
}

export default Product