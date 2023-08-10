import React from 'react';
import Collapse from '../collapse/Collapse'; 
import aboutData from '../../data/about.js'; 
import '../styles/collapse.css'; 
import '../styles/about.css'; 

export default function About() {
    const dataSelection = aboutData.map((data) => data); // Copie les données d'about dans un nouvel tableau
    
    // Extrait les valeurs spécifiques des données
    const fiability = dataSelection[0].Fiabilité;
    const respect = dataSelection[0].Respect;
    const service = dataSelection[0].Service;
    const securite = dataSelection[0].Sécurité;

    return (
        <div>
            {/* Chaque section est encapsulée dans un div avec une classe */}
            <div className="accomodation_collapse_about">
                {/* Le composant Collapse est utilisé pour créer une section pliable */}
                <Collapse title={'Fiabilité'} content={fiability} />
            </div>
            {/* Répétition similaire pour les autres sections */}
            <div className="accomodation_collapse_about">
                <Collapse title={'Respect'} content={respect} />
            </div>
            <div className="accomodation_collapse_about">
                <Collapse title={'Service'} content={service} />
            </div>
            <div className="accomodation_collapse_about">
                <Collapse title={'Sécurité'} content={securite} />
            </div>
        </div>
    );
}
