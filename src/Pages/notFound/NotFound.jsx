import React from 'react';
import NotFound from '../../components/notFound/Error'
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

// Définit un composant fonctionnel renderText
export default function renderText() {
    return (
        <div>
            {/* Inclut le composant Header pour l'en-tête de la page */}
            <Header />
            {/* Inclut le composant NotFound pour afficher une page introuvable */}
            <NotFound />
            {/* Inclut le composant Footer pour le pied de page */}
            <Footer />
        </div>
    );
}
