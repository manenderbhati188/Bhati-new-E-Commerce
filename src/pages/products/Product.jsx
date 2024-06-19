import React from 'react'
import ProductDisplay from '../../component/productdisplay/ProductDisplay'
import { useParams } from 'react-router-dom';
import all_product from '../../assests/showall_data'
const Product = () => {
  const {productid}=useParams();
  const product=all_product.find((e)=>e.id===Number(productid));
  return (
    <div key={product}>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product