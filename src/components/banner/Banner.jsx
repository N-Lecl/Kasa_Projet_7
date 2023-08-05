import React, { useState, useEffect } from 'react';
import '../styles/banner.css';
import { useLocation } from 'react-router-dom';

const Banner = () => {
      // Création de la variable d'état
      const [isAboutPage, setIsAboutPage] = useState(false);
      // On récupère l'emplacement actuel avec le hook useLocation
      const { pathname } = useLocation();

      // On surveille l'emplacement actuel avec le hook useEffect
      useEffect(() => {
            setIsAboutPage(pathname === '/about');
            /* On passe pathname en dépendance du hook qui se déclenchera 
            que lorsque que sa valeur change */
      }, [pathname]);

      return (
            // En fonction de la valeur de notre variable d'état, on met à jour la class
            <section className={`banner${isAboutPage ? '_about' : ''}`}>
                  {/* On affiche en fonction de l'état de isAboutPage  */}
                  {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
            </section>
      );
};

export default Banner;
