import styled from 'styled-components';

// Crée un composant Img en utilisant styled-components, ce composant est une image stylisée
const Img = styled.img`
      width: ${(props) => props.width || '130px'};
      height: ${(props) => props.height || 'auto'};
`;

export default Img;