import React from 'react';
import { GoLocation } from 'react-icons/go'
import { RiContactsLine } from 'react-icons/ri'
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact py-12'>
      <div className="container">
        <h1 className='text-center text-text_primary font-semibold text-4xl'>Get In Touch</h1>
        <h1 className='text-center text-text_gray'>For any type of information about our agency you can contact with us</h1>
        <div className="row md:flex gap-6 lg:gap-12 mt-12">
          <form className='flex-1 mb-8 md:mb-0'>
            <div className='w-full md:flex items-center gap-4'>
              <input className='flex-1 w-full py-3 outline-none border-0 px-3' type="text" placeholder='Your Name' />
              <input className='flex-1 w-full mt-3 py-3 outline-none border-0 px-3' type="email" placeholder='Your Email' />
            </div>
            <textarea className='py-3 mt-3 w-full outline-none border-0 px-3' name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
            <input className='py-3 px-8 rounded-md mt-3 text-white font-semibold tracking-wide' type="submit" value="SEND" />
          </form>
          <div className="aboutInfo flex-1">
            <div className='flex gap-2 lg:gap-3 mb-4 items-center'>
              <div className="icon">
                <GoLocation />
              </div>
              <div>
                <h1>XYZ Road</h1>
                <p>Dinajpur, Bangladesh</p>
              </div>
            </div>
            <div className='flex gap-2 lg:gap-3 my-4 items-center'>
              <div className="icon">
                <RiContactsLine />
              </div>
              <div>
                <h1 className='text-sm lg:text-md'>khayrulislam2525@gmail.com</h1>
                <p>+88 01763-155555</p>
              </div>
            </div>
            <div>
              <h2 className='text-secondary text-xl my-3'>Social Media Links</h2>
              <div className="social flex items-center">
                <a href='/'><FaFacebookF /></a>
                <a href='/'><FaWhatsapp /></a>
                <a href='/'><FaInstagram /></a>
                <a href='/'><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;