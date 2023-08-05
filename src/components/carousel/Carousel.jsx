import ArrowRight from '../../assets/arrow_right.png';
import ArrowLeft from '../../assets/arrow_left.png';
import '../styles/carousel.css';
import { useState } from 'react';

export default function Slider({ imageSlider }) {
      /* Déclaration de la valeur d'état à 0 représente l'index 
      de l'image actuellement affichée dans le slider.*/
      const [pictureIndex, setPictureIndex] = useState(0);

      // Fonction qui est appelée lors d"un click sur flèche droite
      const handleNextSlide = () => {
            // Déclaration de newIndex pour calculer le nouvel index
            let newIndex = pictureIndex + 1;
            /* Si le pictureIndex est sup ou égal à la valeur/longueur du tableau
            alors on remet l'index à zéro */
            if (newIndex >= imageSlider.length) {
                  newIndex = 0;
            }
            /* On met à jour setPictureIndex pour mettre à jour l'état avec la nouvelle valeur,
            et donc afficher le bonne élément dans le slide */
            setPictureIndex(newIndex);
      };

      const handlePrevSlide = () => {
            // Déclaration de newIndex (index actuel -1 )
            let newIndex = pictureIndex - 1;
            //Si notre newIndex et inférieur à zéro (début)
            if (newIndex < 0) {
                  /* On attribue la valeur imageSlider.length - 1 à newIndex, ce qui correspond 
                  à l'index de la dernière image dans le tableau imageSlider. */
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
