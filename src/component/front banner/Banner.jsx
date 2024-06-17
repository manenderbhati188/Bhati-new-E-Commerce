import React,{useState,useEffect} from 'react'
import './banner.css'
import banner_image from '../../assests/bannerdata'
import crazydeal from '../../assests/crazydeal/crazydeal.jpg'

const Banner = () => {
    
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const indexs=setInterval(()=>{
            setIndex((previndex)=>(previndex+1) % banner_image.length)
        },2000)
        return ()=> clearInterval(indexs);
    },[index])

  return (
    <div className='hero'>
        <img src={banner_image[index].image} className='hero_banner'></img>
         <div className='crazy_deal'>
        <img src={crazydeal}></img>
        </div>
    </div>
  )
}

export default Banner