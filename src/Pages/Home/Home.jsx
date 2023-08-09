import React from 'react';
// Importation de nos composants
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

// Définit un composant fonctionnel Home
function Home() {
    return (
        <div>
            {/* Inclut le composant Navbar pour l'en-tête de la page */}
            <Navbar />
            {/* Inclut le composant Banner pour la bannière */}
            <Banner />
            {/* Inclut le composant Gallery pour la galerie */}
            <Gallery />
            {/* Inclut le composant Footer pour le pied de page */}
            <Footer />
        </div>
    );
}

export default Home;
