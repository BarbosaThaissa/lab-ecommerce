import React, { useContext } from "react";
import { Link } from "react-router-dom";
//styled
import {
  CartItemContainer,
  CartItemSubContainer,
  CartItemPriDiv,
  CartItemTitle,
  CartItemPrices,
  CartItemQuanty,
  CartItemPlusMenos,
  CartItemAmount,
  CartItemPricePro,
  CartItemTotal,
} from "./styleds/Cartitem";

//icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (
    <CartItemContainer>
      <CartItemSubContainer>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <CartItemPriDiv>
          {/* title and icon*/}
          <CartItemTitle>
            <Link to={`/product/${id}`}>{title}</Link>

            <div onClick={() => removeFromCart(id)}>
              <IoMdClose />
            </div>
          </CartItemTitle>
          <CartItemPrices>
            {/* quant */}
            <CartItemQuanty>
              <CartItemPlusMenos onClick={() => decreaseAmount(id)}>
                <IoMdRemove />
              </CartItemPlusMenos>
              <CartItemAmount>{amount}</CartItemAmount>

              <CartItemPlusMenos onClick={() => increaseAmount(id)}>
                <IoMdAdd />
              </CartItemPlusMenos>
            </CartItemQuanty>
            {/* item price */}
            <CartItemPricePro>R$ {price}</CartItemPricePro>
            {/* final price */}
            <CartItemTotal>{`R$ ${parseFloat(price * amount).toFixed(
              2
            )}`}</CartItemTotal>
          </CartItemPrices>
        </CartItemPriDiv>
      </CartItemSubContainer>
    </CartItemContainer>
  );
};

export default CartItem;
