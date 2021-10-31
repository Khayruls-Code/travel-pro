import React from 'react';
import './Footer.css'
import { FcAdvance } from 'react-icons/fc'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="logo">
            <h1 className='text-2xl font-semibold text-white mb-3'>Travel Pro</h1>
            <p className='text-transparent_white'>Our agency working successfully from 2000.In this long time we improve our service constantly.Now travel pro is a famouse company in Bangladesh.We got best service award from the government of Bangladesh</p>
            <button className='text-white bg-secondary py-2 px-6 rounded-sm outline-none border-none mt-4'>Read More</button>
          </div>
          <div>
            <h1 className='text-2xl font-semibold text-white mb-3'>Popular Tours</h1>
            <ul>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Beautiful Cox-Bazar</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Sajek Toue, Bangladesh</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Second London, Sylhet</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Queen of beauty, Kashmir</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />WonderFull London</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Goa, India</a></li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-semibold text-white mb-3'>Our Services</h1>
            <ul>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Domestic Flights</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />International Flights</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Tours & Holidays</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Domestic Hotels</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />International Hotels</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Cruise Holidays</a></li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-semibold text-white mb-3'>Quick Links</h1>
            <ul>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Todays Offer</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Customers Review</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Contact</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Term & Service</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Privecy & Policy</a></li>
              <li><a href="/" className='text-transparent_white flex items-center gap-2 mb-2'><FcAdvance />Security</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyRight py-6 mt-8">
        <div className="container md:flex items-center justify-between">
          <p className='text-white'>&copy;CopyRight in 2021 by Colourless Khayrul</p>
          <div className="social flex items-center mt-6 md:mt-0">
            <a href='/'><FaFacebookF /></a>
            <a href='/'><FaWhatsapp /></a>
            <a href='/'><FaInstagram /></a>
            <a href='/'><FaYoutube /></a>
            <a href='/'><FaGooglePlusG /></a>
            <a href='/'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;