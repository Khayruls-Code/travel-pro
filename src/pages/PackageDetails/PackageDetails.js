import React from 'react';

const PackageDetails = (props) => {
  const { order: { img, packagename, date, _id }, handleDelete } = props
  return (
    <div className='flex'>
      <div className='flex-1'>
        <img className='h-full w-full' src={img} alt="" />
      </div>
      <div className='flex-1 bg-primaryBg'>
        <h1 className='px-3 mt-6 text-lg sm:text-xl md:text-2xl text-white'>{packagename}</h1>
        <p className='text-white px-3 my-2 md:my-3'>Booking Date: {date}</p>
        <button onClick={() => handleDelete(_id)} className='px-3 py-2 bg-secondary text-white font-semibold rounded-md ml-3 mb-3'>Remove</button>
      </div>
    </div>
  );
};

export default PackageDetails;