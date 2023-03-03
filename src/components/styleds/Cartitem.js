import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 1rem;
  border: 1px solid rgb(229, 231, 235);
  border-bottom: 1rem;
  border-right: none;
  border-left: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 300;
  color: rgb(107, 114, 128);
  min-height: 150px;
`;

export const CartItemSubContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 150px;
  align-items: center;
  column-gap: 1rem;

  & > a > img {
    max-width: 80px;
  }
`;

export const CartItemPriDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  & > a {
    max-width: 240px;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgb(34, 34, 34);
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > div {
    cursor: pointer;
    font-size: 1.25rem;
  }

  & > div > svg {
    color: rgb(10, 7 114, 128);
    transition: 0.3s;
  }

  & > div > svg:hover {
    color: red;
  }
`;

export const CartItemPrices = styled.div`
  display: flex;
  height: 36px;
  column-gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const CartItemQuanty = styled.div`
  display: flex;
  height: 100%;
  max-width: 100px;
  flex: 1 1;
  align-items: center;
  font-weight: 500;
  border: 1px solid rgb(229, 231, 235);
  color: rgb(34, 34, 34);
`;

export const CartItemPlusMenos = styled.div`
  display: flex;
  height: 100%;
  flex: 1 1;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const CartItemAmount = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

export const CartItemPricePro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 1;
`;

export const CartItemTotal = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  color: rgb(34, 34, 34);
`;
