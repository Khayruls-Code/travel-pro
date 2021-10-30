import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home.css'
import { GoThreeBars } from 'react-icons/go'
import useAuht from '../../../hooks/useAuth';

const Header = () => {
  const [isHide, setIsHide] = useState(false)
  const { user, singOutUser } = useAuht()
  const handleHide = () => {
    setIsHide(!isHide)
  }
  return (
    <div className='navigation fixed top-0 w-full'>
      <div className="container">
        <div className="navbar flex items-center justify-between">
          <div className="logo">
            <h1 className='text-2xl font-semibold text-white'>Travel Pro</h1>
          </div>
          <div className="nav flex items-center">
            <div className={!isHide ? 'nav-items hide' : 'nav-items'}>
              <ul className='flex items-center'>
                <li>
                  <NavLink className='text-md text-white mx-3 font-medium inline-block px-2 py-6' to="/home">Home</NavLink>
                </li>
                {
                  user.email && <div className='flex'>
                    <li>
                      <NavLink className='text-md text-white mx-3 font-medium inline-block px-2 py-6' to="/mypackage">My Package</NavLink>
                    </li>
                    <li>
                      <NavLink className='text-md text-white mx-3 font-medium inline-block px-2 py-6' to="/manage">Manage Packages</NavLink>
                    </li>
                    <li>
                      <NavLink className='text-md text-white mx-3 font-medium inline-block px-2 py-6' to="/addpackage">Add New Package</NavLink>
                    </li>
                  </div>
                }
              </ul>
            </div>
            <ul>
              {
                user.email ? <div className='flex items-center'>
                  <button onClick={singOutUser} className='py-2.5 px-6 font-bold rounded-full text-white bg-primaryBg'>Sing Out</button>
                  <img className='ml-2 userImg' src={user.photoURL} alt="" />
                </div> :
                  <li>
                    <NavLink className='py-3 px-8 font-bold rounded-full text-white bg-primaryBg' to="/login">Login</NavLink>
                  </li>
              }
            </ul>
            <div onClick={handleHide} className="menuBar font-semibold text-3xl cursor-pointer ml-5 text-white">
              <GoThreeBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;