import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import {
  SectionLoading,
  ContainerDetails,
  SectionDetails,
  DivImgDet,
  ImgDetail,
  DivTexts,
  PriceDeta,
  H1Deta,
  ButtonAdd,
} from "../GlobalStyle";

//imgs
import Camisa2 from "../img/camiseta2.png";
import Camisa3 from "../img/camiseta3.png";
import Camisa4 from "../img/camiseta4.png";
import Camisa5 from "../img/camiseta5.png";
import Short1 from "../img/bermuda1.png";
import Short2 from "../img/bermuda2.png";
import Short3 from "../img/short3.png";
import Casaco1 from "../img/img9.png";
import Casaco2 from "../img/img10.png";

const ProductDetails = () => {
  //get product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 2,
      image: Camisa2,
      category: "Camisa",
      title: "Camiseta Astronauta jogando Basquete ",
      price: 5.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 3,
      image: Camisa3,
      category: "Camisa",
      title: "Camiseta Gato na Lua lendo",
      price: 50.89,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 4,
      image: Casaco1,
      category: "Moletom",
      title: "Moletom Astronauta Cerveja ",
      price: 100.5,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 5,
      image: Casaco2,
      category: "Camisa",
      title: "Camiseta Baby Look Astronauta Espaço",
      price: 90.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 6,
      image: Short1,
      category: "Short",
      title: "Short foguete e planetas",
      price: 25.98,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 7,
      image: Camisa4,
      category: "Camisa",
      title: "Camiseta trippy astronauta",
      price: 40.0,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 8,
      image: Camisa5,
      category: "Camisa",
      title: "Camiseta Game Of Science",
      price: 60.84,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 9,
      image: Short2,
      category: "Short",
      title: "Short espaço ET ",
      price: 85.36,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
    {
      id: 10,
      image: Short3,
      category: "Short",
      title: "Short espaço Among Us",
      price: 200.5,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    },
  ];

  //get single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <SectionLoading>Loading...</SectionLoading>;
  }

  const { title, price, description, image } = product;

  return (
    <ContainerDetails>
      <SectionDetails>
        {/* image */}
        <DivImgDet>
          <ImgDetail src={image} alt="" />
        </DivImgDet>
        {/* text */}
        <DivTexts>
          <H1Deta>{title}</H1Deta>
          <PriceDeta>$ {price}</PriceDeta>
          <p>{description}</p>
          <ButtonAdd onClick={() => addToCart(product, product.id)}>
            Add to card
          </ButtonAdd>
        </DivTexts>
      </SectionDetails>
    </ContainerDetails>
  );
};

export default ProductDetails;
