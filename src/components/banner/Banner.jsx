import React, { useState, useEffect } from 'react';
import '../styles/banner.css';
import { useLocation } from 'react-router-dom';

const Banner = () => {
    // Déclaration d'un état local pour suivre si la page actuelle est la page "About"
    const [isAboutPage, setIsAboutPage] = useState(false);
    
    // Utilisation du hook useLocation pour obtenir l'objet location de la page courante
    const { pathname } = useLocation();

    // Utilisation d'un effet pour mettre à jour l'état isAboutPage en fonction du chemin d'accès actuel
    useEffect(() => {
        setIsAboutPage(pathname === '/about');
    }, [pathname]);

    return (
        // Utilisation d'une section avec une classe basée sur l'état isAboutPage
        <section className={`banner${isAboutPage ? '_about' : ''}`}>
            {/* Conditionnellement affiche un paragraphe uniquement si isAboutPage est faux */}
            {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    );
};

export default Banner;
