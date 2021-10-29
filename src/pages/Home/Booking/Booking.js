import React from 'react';
import '../Home.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Booking = (props) => {
  const { packageItem: { title, img, price, desc, discount, _id } } = props
  return (
    <div className='booking'>
      <div className='image overflow-hidden rounded relative'>
        <img className='w-full' src={img} alt="" />
        <p className='absolute discount'>-{discount}%</p>
      </div>
      <div className="info bg-white">
        <h1 className='text-2xl font-semibold text-text_secondary'>{title}</h1>
        <p className='text-md font-medium text-text_gray italic my-2'>{desc.slice(0, 110)}</p>
        <div className='flex items-center justify-between'>
          <p className='text-2xl text-semibold text-secondary'>${price}<small className='text-sm text-text_primary'>/person</small></p>
          <Link to={`/order/${_id}`}>
            <button className='bookingBtn flex items-center justify-center'><AiOutlineArrowRight /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;