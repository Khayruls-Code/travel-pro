import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import loader from '../../../images/loader.gif'

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://travel-pro-agency.herokuapp.com/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  if (reviews.length === 0) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  return (
    <div className='review py-12'>
      <div className="container">
        <h1 className='text-center text-white text-3xl font-extrabold uppercase'>Customer Reviews</h1>
        {
          reviews.map(review => <ReviewDetails
            key={review._id}
            review={review}
          />)
        }
      </div>
    </div>
  );
};

export default Review;