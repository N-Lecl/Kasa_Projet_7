import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/error.css'; 

// Définit un composant fonctionnel TextZone
export default function TextZone() {
    // Obtient l'URL de base du site
    const host = window.location.origin;

    return (
        <main>
            <div className="textZone">
                <div>
                    {/* Affiche le titre d'erreur */}
                    <h1 className="title_error">404</h1>
                    {/* Affiche le message d'information */}
                    <p className="title_information">
                        Oups ! La page que vous demandez n'existe pas.
                    </p>
                </div>
                <div>
                    {/* Affiche le lien de redirection vers la page d'accueil */}
                    <p className="redirection_home">
                        {/* Utilise le composant Link pour créer un lien vers la page d'accueil en utilisant l'URL de base */}
                        <Link to={host}>Retrouvez-nous sur la page d'accueil.</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
