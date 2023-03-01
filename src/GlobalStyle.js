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

export const SectionLoading = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDetails = styled.section`
  padding-top: 8rem;
  padding-bottm: 3rem;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
`;
export const SectionDetails = styled.div`
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0;
    flex-direction: row;
  }
`;

export const DivImgDet = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const ImgDetail = styled.img`
  max-width: 200px;

  @media (min-width: 1024px) {
    max-width: 24rem;
  }
`;

export const DivTexts = styled.div`
  flex: 1 1;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }

  & > p {
    margin-bottom: 2rem;
  }
`;

export const H1Deta = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0.5rem;
  max-width: 450px;
  font-size: 26px;
  font-weight: 500;

  @media (min-width: 1024px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const PriceDeta = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #e63946;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  background-color: rgb(34, 34, 34);
  padding: 1rem 2rem;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: #444;
  }
`;
