import React from 'react'
import MainCarousel from '../homeCarousel/MainCarousel';

export const Homepage = () => {
  return (
    <div>
        <div className='maincarousel'>
        <MainCarousel />
        </div>
        
        <div>
            other section
        </div>
    </div>
  )
}
export default Homepage;
