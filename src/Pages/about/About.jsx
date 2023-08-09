import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

// Définit un composant fonctionnel "about"
function about() {
    return (
        <div>
            {/* Inclut le composant Navbar pour l'en-tête de la page */}
            <Navbar />
            {/* Inclut le composant Banner pour la bannière */}
            <Banner />
            {/* Inclut le composant About pour la section À propos */}
            <About />
            {/* Inclut le composant Footer pour le pied de page */}
            <Footer />
        </div>
    );
}

export default about;
