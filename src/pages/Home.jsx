import React, { useState } from "react";
import { HomeSection, DivHome, GridHome, DivOrderna, DivFiltros, InputFilter } from "../GlobalStyle";

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
  // "asc" para ordenação crescente, "desc" para ordenação decrescente
  const [sortOrder, setSortOrder] = useState("asc");
  const [nameFilter, setNameFilter] = useState("");
  const [minimumValue, setMinimumValue] = useState(2);
  const [maximumValue, setMaximumValue] = useState(3000);

  //produtos
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

  //filtrando os produtos
  const filterItems = () => {
    return sortedItems.filter((item) => {
      return (
        item.price >= minimumValue &&
        item.price <= maximumValue &&
        item.title.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
  };

  const sortedItems = products.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  //funcões changes
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <Hero />
      <HomeSection>
        <DivHome>
          {/* filtros */}
          <div>
            <DivFiltros>
              <label>
                Valor mínimo:
                <InputFilter
                  type="number"
                  value={minimumValue}
                  onChange={(e) => setMinimumValue(e.target.value)}
                  placeholder="20"
                />
              </label>
              <label>
                Valor máximo:
                <InputFilter
                  type="number"
                  value={maximumValue}
                  onChange={(e) => setMaximumValue(e.target.value)}
                  placeholder="200"
                />
              </label>

              <label htmlFor="buscar">
                Buscar:
                <input
                  type="text"
                  value={nameFilter}
                  placeholder="Camiseta, short..."
                  onChange={(e) => setNameFilter(e.target.value)}
                />
              </label>
            </DivFiltros>
            <DivOrderna>
              <label>
                Ordenar por preço:
                <select value={sortOrder} onChange={handleSortOrderChange}>
                  <option value="asc">Crescente</option>
                  <option value="desc">Decrescente</option>
                </select>
              </label>
            </DivOrderna>
          </div>
          <GridHome>
            {filterItems().map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </GridHome>
        </DivHome>
      </HomeSection>
    </div>
  );
};

export default Home;
