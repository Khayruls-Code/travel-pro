import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://travel-pro-agency.herokuapp.com/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
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