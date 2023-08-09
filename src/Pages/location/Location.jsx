import React from 'react';
// Importation de nos composants
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import LocationRender from './LocationRender';

// Définit un composant fonctionnel Home
export default function Home() {
    return (
        <div>
            {/* Inclut le composant Header pour l'en-tête de la page */}
            <Header />
            {/* Inclut le composant LocationRender pour afficher des emplacements */}
            <LocationRender />
            {/* Inclut le composant Footer pour le pied de page */}
            <Footer />
        </div>
    );
}
