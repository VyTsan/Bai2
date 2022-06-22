import React from 'react'
import './index.css'

const Product = ({product}) => {
  console.log(product.image);
  return (
    <div className='row m-md-5 m-2 g-5'>
      <div className='col-md-2 col-12 offset-md-2'>
        <img src={product.image} alt={product.title} className='img-fluid'/>
        {/* <div className='image' style={{ 
          backgroundImage: `url("${product.image}")` 
        }}></div> */}
      </div>
      <div className='col-md-6 col-12 d-flex flex-column justify-content-center'>
        <div><b>Name:</b> {product.title}</div>
        <div><b>Category:</b> {product.category}</div>
        <div><b>Description:</b> {product.description}</div>
        <div><b>Price:</b> {product.price}</div>
      </div>
      
    </div>
  )
}

export default Product