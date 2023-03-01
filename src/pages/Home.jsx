import React from "react";
import { HomeSection, DivHome, GridHome } from "../GlobalStyle";

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

//components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const products = [
    {
      id: 2,
      image: Camisa2,
      category: "Camisa",
      title: "Camiseta Astronauta jogando Basquete ",
      price: 5.99,
    },
    {
      id: 3,
      image: Camisa3,
      category: "Camisa",
      title: "Camiseta Gato na Lua lendo",
      price: 50.89,
    },
    {
      id: 4,
      image: Casaco1,
      category: "Moletom",
      title: "Moletom Astronauta Cerveja ",
      price: 100.5,
    },
    {
      id: 5,
      image: Casaco2,
      category: "Camisa",
      title: "Camiseta Baby Look Astronauta Espaço",
      price: 90.99,
    },
    {
      id: 6,
      image: Short1,
      category: "Short",
      title: "Short foguete e planetas",
      price: 25.98,
    },
    {
      id: 7,
      image: Camisa4,
      category: "Camisa",
      title: "Camiseta trippy astronauta",
      price: 40.0,
    },
    {
      id: 8,
      image: Camisa5,
      category: "Camisa",
      title: "Camiseta Game Of Science",
      price: 60.84,
    },
    {
      id: 9,
      image: Short2,
      category: "Short",
      title: "Short espaço ET ",
      price: 85.36,
    },
    {
      id: 10,
      image: Short3,
      category: "Short",
      title: "Short espaço Among Us",
      price: 200.5,
    },
  ];

  return (
    <div>
      <Hero />
      <HomeSection>
        <DivHome>
          <GridHome>
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </GridHome>
        </DivHome>
      </HomeSection>
    </div>
  );
};

export default Home;
