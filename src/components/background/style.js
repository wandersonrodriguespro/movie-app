import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${(props) => props?.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundGradiente = styled.div`
background: linear-gradient(to top, #111 63%, transparent 100%)
`;
