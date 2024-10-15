import React, { useState } from 'react';

export default function ImageCarousel ({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex'>
      <button onClick={goToPrevious} className='text-white'>Previous</button>
      <img src={images[currentIndex]} alt='cat' className='size-full' />
      <button onClick={goToNext} className='text-white'>Next</button>
    </div>
  );
};
