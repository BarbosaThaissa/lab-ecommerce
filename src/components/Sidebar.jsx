import React, { useContext } from "react";
//link, icons
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//components
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

//styleds
import {
  SidebarContainer,
  SidebarClose,
  CloseText,
  CloseIcon,
  SidebarItens,
  SidebarTextContainer,
  SidebarSubContainer,
  SidebarTotal,
  SidebarTrash,
} from "./styleds/Sidebar";

//tag a
const viewCard = {
  display: "flex",
  width: "100%",
  "align-items": "center",
  "justify-content": "center",
  "background-color": "rgb(229, 231, 235)",
  padding: "1rem",
  "font-weight": "500",
  color: "rgb(34, 34, 34)",
};

const checkout = {
  display: "flex",
  width: "100%",
  "align-items": "center",
  "justify-content": "center",
  "background-color": "rgb(34, 34, 34)",
  padding: "1rem",
  "font-weight": "500",
  color: "white",
};

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <SidebarContainer open={isOpen}>
      <SidebarClose>
        <CloseText>Shopping Bag ({itemAmount})</CloseText>
        {/* icons */}
        <CloseIcon onClick={handleClose}>
          <IoMdArrowForward />
        </CloseIcon>
      </SidebarClose>
      <SidebarItens>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </SidebarItens>
      <SidebarTextContainer>
        <SidebarSubContainer>
          {/* total */}
          <SidebarTotal>
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </SidebarTotal>
          {/* limpar cart icon */}
          <SidebarTrash onClick={clearCart}>
            <FiTrash2 />
          </SidebarTrash>
        </SidebarSubContainer>
        <Link to={"/"} style={viewCard}>
          View cart
        </Link>
        <Link to={"/"} style={checkout}>
          Checkout
        </Link>
      </SidebarTextContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
