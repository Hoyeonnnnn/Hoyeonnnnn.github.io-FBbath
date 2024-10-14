// ImageSliderModal.js
import React, { useState } from "react";
import "./ImageSliderModal.css"; // CSS 스타일링을 위한 파일 추가

const ImageSliderModal = ({ images, currentIndex, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(currentIndex);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleOverlayClick = (event) => {
    // 클릭한 부분이 모달 내용이 아니라 오버레이라면 모달을 닫음
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={images[currentSlide].image}
          alt={`Slide ${currentSlide}`}
          className="modal-image"
        />
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSliderModal;