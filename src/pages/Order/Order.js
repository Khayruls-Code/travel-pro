import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Header from '../Home/Header/Header';
import './Order.css'
import useAuht from '../../hooks/useAuth';

const Order = () => {
  const { id } = useParams()
  const [packageItem, setPackageItem] = useState({})
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuht()

  //getting single package
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then(res => res.json())
      .then(data => setPackageItem(data))
  }, [])

  //place order functionality
  const onSubmit = data => {
    data.status = 'pending'
    data.img = packageItem.img
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert('Successfully booked this package')
          reset()
        }
      })
  }

  const { title, img, desc, price } = packageItem
  return (
    <div>
      <Header />
      <div className="container">
        <div className="md:flex mt-28 mb-8 gap-8">
          <div className="package-info flex-1">
            <img className='w-full' src={img} alt="" />
            <h1 className='text-4xl text-secondary font-semibold my-3'>{title}</h1>
            <p className='text-lg text-normal text-text_secondary'>{desc}</p>
            <p className='text-2xl text-primaryBg my-3'>Trip Cost for single person <span className='text-3xl'>${price}</span></p>
            <p className='text-lg text-secondary'>Purchase now and get upto 30% discount !!</p>
          </div>
          <div className="order-form flex-1">
            <h1 className='text-3xl text-text_primary mb-3 mt-12 md:mt-0'>Confirm Your Booking</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input value={user.displayName || ''} className='block px-3 py-3 outline-none border-0 w-full my-4' {...register("name", { required: true, maxLength: 20 })} />
              <input value={user.email || ""} className='block px-3 py-3 outline-none border-0 w-full my-4' {...register("email", { required: true, })} />
              <input className='block px-3 py-3 outline-none border-0 w-full my-4' placeholder='Your City' {...register("city", { required: true, })} />
              <input className='block px-3 py-3 outline-none border-0 w-full my-4' placeholder='Road no.' {...register("road", { required: true, })} />
              <input className='block px-3 py-3 outline-none border-0 w-full my-4' type='date'  {...register("date", { required: true, })} />
              <input value={title || ''} className='block px-3 py-3 outline-none border-0 w-full my-4' {...register("packagename", { required: true, })} />
              <input className='px-6 text-white py-2.5 cursor-pointer block mx-3 rounded-lg' type="submit" value='Book Now' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;