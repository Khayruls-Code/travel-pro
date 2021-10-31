import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import loader from '../../../images/loader.gif'

const Package = () => {
  const [packages, setPackages] = useState([])

  //gtting package data
  useEffect(() => {
    fetch('https://travel-pro-agency.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])

  ///adding pre loader
  if (packages.length === 0) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }

  return (
    <div className='py-12'>
      <div className='container'>
        <h1 className='text-center text-3xl uppercase font-extrabold text-text_primary'>Popular Places</h1>
        <p className='text-center text-md font-normal text-text_gray mt-3'>This places would be your todays selection, You will get spacial discount for this packages only</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {
            packages.map(packageItem => <Booking
              key={packageItem._id}
              packageItem={packageItem}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Package;