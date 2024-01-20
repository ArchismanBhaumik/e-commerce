import React from 'react'
import {homeCarouselData} from './homeCarouselData' 
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = homeCarouselData.map((item)=> <img className='cursor-pointer carousel-img ' role = "presentation" src={item.image} alt="" />)
     return (
        <AliceCarousel
        items={items}
        autoPlay
        disableButtonsControls
        autoPlayInterval={1000}
        infinite
        style ={{zIndex:-10}}
        
    />
  )
}

export default MainCarousel