import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif; 
    border: none;
    text-decoration: none;
  }
`;

export const HomeSection = styled.section`
  padding: 4rem 0;
`;

export const DivHome = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export const GridHome = styled.div`
  margin: 0 auto;
  max-width: 24rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    max-width: none;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;


