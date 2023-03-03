import styled from "styled-components";

export const ContainerProduct = styled.div`
  margin-bottom: 1rem;
  height: 300px;
  border: 2px solid #e4e4e4;
  position: relative;
`;

export const DivImgProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DivImg = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const ImgProduct = styled.img`
  max-height: 160px;
`;

export const DivButtons = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
  padding: 0.5rem;
`;

export const ButtonPlus = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e63946;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: pink;
  }
`;

export const Category = styled.div`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;
  color: rgb(107, 114, 128);
`;

export const H2Product = styled.h2`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: black;
  font-size: inherit;
`;

export const PriceProduct = styled.div`
  font-weight: 600;
`;

//className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
