import React from 'react';

const Search = () => {
  return (
    <div className='container'>
      <div className="search-box py-12 px-5 lg:px-8 gap-2 lg:gap-4 mx-auto mt-12 bg-secondary w-full lg:w-4/5 md:flex items-center justify-evenly rounded-md">
        <input className='block w-full mt-3 md:mt-0 flex-1 py-3 px-3 rounded-md outline-none' type="text" placeholder='Where to' />
        <input className='block w-full mt-3 md:mt-0 flex-1 py-3 px-3 rounded-md outline-none' type="date" />
        <select className='block w-full mt-3 md:mt-0 flex-1 py-3 px-3 rounded-md outline-none' name="Travel Type" id="traveltype">
          <option value="">Travel Type</option>
          <option value="">City Tour</option>
          <option value="">Vacation Tour</option>
          <option value="">Couple Tour</option>
          <option value="">Adventure Tour</option>
          <option value="">Group Toue</option>
        </select>
        <button className='py-3 px-8 mt-3 md:mt-0 bg-primaryBg rounded-md text-white'>Search</button>
      </div>
    </div>
  );
};

export default Search;