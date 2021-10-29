import React from 'react';
import '../Home.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="hero text-center text-white">
        <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-semibold'>Investment in travel is an</h1>
        <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-light'>Investment in yourself</h1>
        <div className="btns">
          <button className='px-6 py-2.5 bg-primaryBg mx-3 my-6 border-primaryBg rounded-full'>Book A Tour</button>
          <button className='px-6 py-2.5 bg-secondary mx-3 md:my-6 border-secondary rounded-full'>Todays Package</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;