import React, { useContext } from "react";
import {
  ContainerProduct,
  DivImgProduct,
  DivImg,
  ImgProduct,
  DivButtons,
  ButtonPlus,
  Category,
  H2Product,
  PriceProduct,
} from "./styleds/Product.js";
//link and icons
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const btnPlus = {
  "font-size": "1.5rem",
};

const linkProduct = {
  height: "3rem",
  width: "3rem",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "background-color": "#fff",
  color: "black",
  "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  //const { addToCart } = props;

  return (
    <div>
      <ContainerProduct>
        <DivImgProduct>
          {/* image */}
          <DivImg>
            <ImgProduct src={image} alt="product image" />
          </DivImg>
        </DivImgProduct>
        {/* buttons */}
        <DivButtons>
          {/*  onClick={addToCart(product, id)} */}{" "}
          <button>
            <ButtonPlus>
              <BsPlus style={btnPlus} />
            </ButtonPlus>
          </button>
          <Link to={`/product/${id}`} style={linkProduct}>
            <BsEyeFill />
          </Link>
        </DivButtons>
      </ContainerProduct>
      {/* categoria, titulo e preco */}
      <div>
        <Category>{category}</Category>
        <Link to={`/product/${id}`}>
          <H2Product>{title}</H2Product>
        </Link>
        <PriceProduct>R$ {price}</PriceProduct>
      </div>
    </div>
  );
};

export default Product;
