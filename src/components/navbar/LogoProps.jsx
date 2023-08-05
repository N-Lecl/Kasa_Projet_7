import styled from 'styled-components';

const Img = styled.img`
      width: ${(props) => props.width || '130px'};
      height: ${(props) => props.height || 'auto'};
`;

export default Img;