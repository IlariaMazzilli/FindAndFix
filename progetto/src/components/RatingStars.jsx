import React, {useState, useEffect} from 'react'
import {Rating} from 'daisyui'

function RatingStars({ value, onChange, ...args}) {
    const [rating, setRating] = useState(value);

    useEffect(() => {
        setRating(value);
      }, [value]);

  return (
    // For Storybook to update the value with the controls
 
  <Rating value={rating} onChange={setRating} {...args}>
      <Rating name="rating-9" className="mask mask-star" />
      <Rating name="rating-9" className="mask mask-star" />
      <Rating name="rating-9" className="mask mask-star" />
      <Rating name="rating-9" className="mask mask-star" />
      <Rating name="rating-9" className="mask mask-star" />
    </Rating>
  )
}

export default RatingStars