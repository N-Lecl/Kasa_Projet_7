import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Img from './LogoProps';
import Logo from '../../assets/logo.png';

const StyledHeader = styled.nav`
      display: flex;
      width: 90%;
      margin: 30px auto;
      align-items: center;
      justify-content: space-between;
`;
const StyledLink = styled(Link)`
      padding: 5px;
      color: #ff6060;
      text-decoration: none;
      font-size: 16px;
`;

const StyledUl = styled.ul`
      list-style-type: none;
      padding 5px
`;

export default function Navbar() {
      return (
            <header>
                  <StyledHeader>
                        <Img src={Logo} alt="Location d'appartement" />
                        {/* <Link></Link> se comporte comme une ancre | Importer depuis react-router-dom */}
                        <StyledUl>
                              <li>
                                    <StyledLink to="/">Accueil</StyledLink>
                                    <StyledLink to="/about">
                                          À propos
                                    </StyledLink>
                              </li>
                        </StyledUl>
                  </StyledHeader>
            </header>
      );
}
