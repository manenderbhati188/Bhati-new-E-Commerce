import React from 'react';
import './productdisplay.css';
import star_icon from '../../assests/Star/star_icon.png';
import star_icon_dull from '../../assests/Star/star_dull_icon.png'
import { useState } from 'react';
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='Main Product' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_icon_dull} alt='Star' />
          <p>(145)</p>
        </div>
        <div className='productdisplay-rightprice'>
          <div className="productdisplay-right-price-old">₹{product.old_price}</div>
          <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="product_discription">
          A classic cotton T-shirt is a wardrobe staple known for its softness and breathability,
          making it perfect for casual, everyday wear.
          Its simple, versatile design can be dressed up or down, providing comfort and ease of movement.
          Paired with jeans or layered under a jacket, it offers a timeless, effortless style
        </div>
        <div className='Select-Size'>
          <h1>Select Size</h1>
          <div className='Product-size-short'>
            <div className="size-option">
              <input type="radio" id="sizeS" name="size" value="s" />
              <label htmlFor="sizeS">S</label>
            </div>
            <div className="size-option">
              <input type="radio" id="sizeM" name="size" value="m" />
              <label htmlFor="sizeM">M</label>
            </div>
            <div className="size-option">
              <input type="radio" id="sizeL" name="size" value="l" />
              <label htmlFor="sizeL">L</label>
            </div>
            <div className="size-option">
              <input type="radio" id="sizeXL" name="size" value="xl" />
              <label htmlFor="sizeXL">XL</label>
            </div>
            <div className="size-option">
              <input type="radio" id="sizeXXL" name="size" value="xxl" />
              <label htmlFor="sizeXXL">XXL</label>
            </div>
          </div>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
