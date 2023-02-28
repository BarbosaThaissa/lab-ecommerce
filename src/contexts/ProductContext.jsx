import React, { createContext, Children } from "react";
import Camisa1 from "../img/camiseta1.png";
import Camisa2 from "../img/camiseta2.png";
import Camisa3 from "../img/camiseta3.png";
import Camisa4 from "../img/camiseta4.png";
import Camisa5 from "../img/camiseta5.png";
import Short1 from "../img/bermuda1.png";
import Short2 from "../img/bermuda2.png";
import Short3 from "../img/short3.png";
import Casaco1 from "../img/img9.png";
import Casaco2 from "../img/img10.png";

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const products = [
    { id: 1, image: Camisa1, category: "Camisa", title: "title", price: 20.99 },
    { id: 2, image: Camisa2, category: "Camisa", title: "title", price: 5.99 },
    { id: 3, image: Camisa3, category: "Camisa", title: "title", price: 50.89 },
    { id: 4, image: Casaco1, category: "Camisa", title: "title", price: 100.5 },
    { id: 5, image: Casaco2, category: "camisa", title: "title", price: 90.99 },
    { id: 6, image: Short1, category: "Short", title: "title", price: 25.98 },
    { id: 7, image: Camisa4, category: "Short", title: "title", price: 40.0 },
    { id: 8, image: Camisa5, category: "Short", title: "title", price: 60.84 },
    { id: 9, image: Short2, category: "Moleton", title: "title", price: 85.36 },
    {
      id: 10,
      image: Short3,
      category: "Moleton",
      title: "title",
      price: 200.5,
    },
  ];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
