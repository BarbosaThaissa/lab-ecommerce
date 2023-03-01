import React, { useContext, useEffect, useState } from "react";
import {
  HeaderActive,
  HeaderContainer,
  Logoimg,
  CartStyled,
  ItensBag,
} from "./styleds/Header";


//icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const bagCart = {
  "font-size": "1.5rem",
  "line-height": "2rem",
};

// const fixedHeader = {
//   'position': 'fixed',
//   'width': '100%',
//   'transition': 'all',
// }

// const headerAct = {
//   'background-color': 'white',
//   'padding': ' 1.5rem 0',
//   'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
// }

// const headerNot = {
//   'background-color': 'transparent',
//   'padding': '0.8rem 0'
// }

const Header = () => {
 
  // const [isActive, setIsActive] = useState(false);
   
  // const { itemAmount } = useContext(CartContext);
  
  //event listener
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  return (
    <HeaderActive>
      <HeaderContainer>
        {/* logo */}
        <Link to={"/"}>
          <div>
            <Logoimg src={Logo} alt="logo" />
          </div>
        </Link>
        {/* cart */}
        <CartStyled 
          // onClick={() => setIsOpen(!isOpen)}
        
        >
          <BsBag style={bagCart} />
          <ItensBag>
            {/* {itemAmount}  */}
          </ItensBag>
        </CartStyled>
        
      </HeaderContainer>
    </HeaderActive>
  );
};

export default Header;
