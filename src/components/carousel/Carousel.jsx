import ArrowRight from '../../assets/arrow_right.png';
import ArrowLeft from '../../assets/arrow_left.png';
import '../styles/carousel.css';
import { useState } from 'react';

export default function Slider({ imageSlider }) {
      const [pictureIndex, setPictureIndex] = useState(0);

      const handleNextSlide = () => {
            let newIndex = pictureIndex + 1;
            if (newIndex >= imageSlider.length) {
                  newIndex = 0;
            }
            setPictureIndex(newIndex);
      };

      const handlePrevSlide = () => {
            let newIndex = pictureIndex - 1;
            if (newIndex < 0) {
                  newIndex = imageSlider.length - 1;
            }
            setPictureIndex(newIndex);
      };

      return (
            <section
                  className="carousel"
                  style={{
                        backgroundImage: `url(${imageSlider[pictureIndex]})`,
                  }}
            >
                  {imageSlider.length > 1 && (
                        <>
                              <img
                                    src={ArrowRight}
                                    alt="slide"
                                    onClick={handleNextSlide}
                              />
                              <img
                                    src={ArrowLeft}
                                    alt="slide"
                                    onClick={handlePrevSlide}
                              />

                              <p className="counterDisplay">
                                    {pictureIndex + 1} / {imageSlider.length}
                              </p>
                        </>
                  )}
            </section>
      );
}