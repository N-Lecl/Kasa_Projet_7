import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import Img from './LogoProps'; 
import Logo from '../../assets/logo.png'; 

// Crée un composant StyledHeader en utilisant styled-components, ce composant est un en-tête stylisé
const StyledHeader = styled.nav`
    display: flex;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-between;
`;

// Crée un composant StyledLink en utilisant styled-components, ce composant est un lien stylisé
const StyledLink = styled(Link)`
    padding: 5px;
    color: #ff6060;
    text-decoration: none;
    font-size: 16px;
`;

// Crée un composant StyledUl en utilisant styled-components, ce composant est une liste stylisée
const StyledUl = styled.ul`
    list-style-type: none;
    padding: 5px; /* Ajoute le signe égale manquant */
`;

// Définit un composant fonctionnel Navbar
export default function Navbar() {
    return (
        // Le composant header contenant le menu de navigation
        <header>
            {/* Utilise le composant StyledHeader pour styliser l'en-tête */}
            <StyledHeader>
                {/* Utilise le composant Img pour afficher le logo */}
                <Img src={Logo} alt="Location d'appartement" />
                {/* Utilise le composant StyledUl pour styliser la liste */}
                <StyledUl>
                    <li>
                        {/* Utilise le composant StyledLink pour styliser le lien vers la page d'accueil */}
                        <StyledLink to="/">Accueil</StyledLink>
                        {/* Utilise le composant StyledLink pour styliser le lien vers la page À propos */}
                        <StyledLink to="/about">À propos</StyledLink>
                    </li>
                </StyledUl>
            </StyledHeader>
        </header>
    );
}
