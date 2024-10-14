import React, { useState, useEffect } from 'react';
import './App.css';
import './Slideshow.css';
import image1 from './main_banner1.png'
import image2 from './main_banner2.png'
import image3 from './main_banner3.png'
import image4 from './main_banner4.png'

const images = [ 
  image1,image2,image3,image4,
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); 
    // 컴포넌트가 언마운트될 때 인터벌을 클리어
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}



export default Slideshow;
