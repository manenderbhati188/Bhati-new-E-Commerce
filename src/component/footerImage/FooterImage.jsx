import React from 'react'
import image from '../../assests/footerimage/footimage.jpg'
import './footerimage.css'
const FooterImage = () => {
  return (
    <div className='footer_image'>
        <img src={image}></img>
    </div>
  )
}

export default FooterImage