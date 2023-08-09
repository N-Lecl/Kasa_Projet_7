import ArrowRight from '../../assets/arrow_right.png'; 
import ArrowLeft from '../../assets/arrow_left.png'; 
import '../styles/carousel.css'; 
import { useState } from 'react'; 

// Définit un composant fonctionnel Slider qui prend une propriété imageSlider
export default function Slider({ imageSlider }) {
    // Utilisation du hook useState pour suivre l'indice de l'image affichée
    const [pictureIndex, setPictureIndex] = useState(0);

    // Fonction pour passer à la prochaine diapositive
    const handleNextSlide = () => {
        let newIndex = pictureIndex + 1;
        // Si on atteint la fin du carrousel, retourne à la première diapositive
        if (newIndex >= imageSlider.length) {
            newIndex = 0;
        }
        setPictureIndex(newIndex);
    };

    // Fonction pour revenir à la diapositive précédente
    const handlePrevSlide = () => {
        let newIndex = pictureIndex - 1;
        // Si on est à la première diapositive, passe à la dernière diapositive
        if (newIndex < 0) {
            newIndex = imageSlider.length - 1;
        }
        setPictureIndex(newIndex);
    };

    return (
        // La section du carrousel avec l'image en arrière-plan basée sur l'indice de l'image affichée
        <section
            className="carousel"
            style={{
                backgroundImage: `url(${imageSlider[pictureIndex]})`,
            }}
        >
            {/* Affiche les flèches de navigation, le compteur et la pagination seulement si plus d'une image est disponible */}
            {imageSlider.length > 1 && (
                <>
                    {/* Flèche droite pour la diapositive suivante */}
                    <img
                        src={ArrowRight}
                        alt="slide"
                        onClick={handleNextSlide}
                    />
                    {/* Flèche gauche pour la diapositive précédente */}
                    <img
                        src={ArrowLeft}
                        alt="slide"
                        onClick={handlePrevSlide}
                    />

                    {/* Affiche le compteur actuel sur le nombre total d'images */}
                    <p className="counterDisplay">
                        {pictureIndex + 1} / {imageSlider.length}
                    </p>
                </>
            )}
        </section>
    );
}
