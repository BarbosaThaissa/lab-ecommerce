import styled from "styled-components";
import img from "./bg-hero.svg"

export const Section = styled.section`
  height: 80vh;
  background-image: url(${img}); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 1.5rem;
  `;
  

export const ContainerHero = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > a {
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: inherit;
    border-bottom: 1px solid rgb(34, 34, 34);
    border-bottom-width: 2px;
    color: rgb(34, 34, 34);
    align-self: flex-start;
  }
`

export const TextHero = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const Listra = styled.div`
  background-color: #e63946;
  width: 2.5rem;
  height: 2px;
  margin-right: 0.75rem;
`

export const H1Hero = styled.h1`
  line-height: 1.1;
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;

  & > span {
    font-weight: 600;
  }
`

//self-start uppercase font-semibold border-b-2 border-primary
