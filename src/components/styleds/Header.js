import styled from "styled-components";

export const HeaderActive = styled.header`
  background-color: ${(props) =>
    props.ativo === true ? "transparent" : "white"};
  padding: ${(props) => (props.ativo === true ? "1rem 0" : "0.8rem 0")};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  width: 100%;
  transition: all;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 5rem;
`;

export const Logoimg = styled.img`
  width: 15%;
`;
export const CartStyled = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const ItensBag = styled.div`
  color: white;
  font-size: 0.8rem;
  background-color: #e63946;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
`;
