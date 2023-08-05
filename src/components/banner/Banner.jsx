import React, { useState, useEffect } from 'react';
import '../styles/banner.css';
import { useLocation } from 'react-router-dom';

const Banner = () => {
      const [isAboutPage, setIsAboutPage] = useState(false);
      const { pathname } = useLocation();

      useEffect(() => {
            setIsAboutPage(pathname === '/about');
      }, [pathname]);

      return (
            <section className={`banner${isAboutPage ? '_about' : ''}`}>
                  {/* On affiche en fonction de l'état de isAboutPage  */}
                  {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
            </section>
      );
};

export default Banner;