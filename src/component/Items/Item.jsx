import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className='items'>
      <div>
      <Link to={`/product/${props.id}`}><img src={props.image}></img></Link>
      </div>
      
        <p className='item-name'>{props.name}</p>
        <div className='item-price'>
            <div className='item-price-new'>
            ₹{props.new_price}   
            </div>
            <div className='item-price-old'>
            ₹{props.old_price}
            </div>
            
        </div>
        
    </div>
  )
}
