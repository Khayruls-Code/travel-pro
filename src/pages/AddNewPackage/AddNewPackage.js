import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './AddNewPackage.css'

const AddNewPackage = () => {
  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [desc, setDesc] = useState('')


  const addNewPackageFn = (e) => {
    e.preventDefault()
    const newPackage = { title, desc, price, discount, img }
    fetch('http://localhost:5000/packages', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPackage)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert('Successfully Added Package')
          e.target.reset()
        }
      })
  }

  return (
    <div className='addPackage my-24'>
      <div className="container">
        <h1 className='text-2xl font-extrabold text-center text-text_primary'>Add New Package</h1>
        <form className='w-full lg:w-4/5 mx-auto p-6' onSubmit={addNewPackageFn}>
          <div className='w-full md:flex items-center justify-center gap-8'>
            <input onBlur={(e) => setTitle(e.target.value)} className='flex-1 py-3 my-2 w-full' type="text" placeholder="Package Title" required />
            <input onBlur={(e) => setPrice(e.target.value)} className='flex-1 py-3 my-2 w-full' type="number" placeholder="Package Cost" required />
          </div>
          <div className='w-full md:flex items-center justify-center gap-8'>
            <input onBlur={(e) => setDiscount(e.target.value)} className='flex-1 py-3 my-2 w-full' type="text" placeholder="Discount Amount" required />
            <div className='flex-1 py-3 my-2'><FileBase64
              multiple={false}
              onDone={({ base64 }) => setImg(base64)} /></div>
          </div>
          <textarea onBlur={(e) => setDesc(e.target.value)} className='w-full py-3 my-2' name="" id="" cols="30" rows="5" placeholder='Description'></textarea>
          <input className='py-3 px-6 rounded-md cursor-pointer text-white' type="submit" value='Add Package' />
        </form>
      </div>
    </div>
  );
};

export default AddNewPackage;