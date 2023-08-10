import React from 'react';
import logo from '../../assets/logo_footer.png';
import styled from 'styled-components';

// Crée un composant StyledBanner en utilisant styled-components, ce composant est un footer stylisé
const StyledBanner = styled.footer`
    display: flex;
    background-color: black;
    width: 100%;
    height: 169px;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

// Crée un composant StyledBannerImg en utilisant styled-components, ce composant est une image stylisée
const StyledBannerImg = styled.img`
    width: 122px;
    height: 40px;
`;

// Crée un composant StyledBannerH2 en utilisant styled-components, ce composant est un titre stylisé
const StyledBannerH2 = styled.h2`
    color: white;
    font-size: 12px;
`;

// Définit un composant fonctionnel Footer
function Footer() {
    return (
        // Utilise le composant StyledBanner pour rendre le footer
        <StyledBanner>
            {/* Utilise le composant StyledBannerImg pour afficher le logo */}
            <StyledBannerImg src={logo} alt="footer" />
            {/* Utilise le composant StyledBannerH2 pour afficher le texte de droits d'auteur */}
            <StyledBannerH2>
                © 2020 Kasa. Tous droits réservés
            </StyledBannerH2>
        </StyledBanner>
    );
}

export default Footer;
