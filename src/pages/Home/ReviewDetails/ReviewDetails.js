import React from 'react';

const ReviewDetails = (props) => {
  const { review: { name, email, review, img } } = props
  return (
    <div className='flex items-center gap-12 lg:w-5/6 mx-auto reviewBox my-4'>
      <div className="reviewImg">
        <img src={img} alt="" />
      </div>
      <div className="reviewInfo p-4 rounded-lg">
        <h1 className='text-xl text-white'>{name}</h1>
        <p className='text-md text-white'>{email}</p>
        <p className='text-sm text-white'>{review}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;