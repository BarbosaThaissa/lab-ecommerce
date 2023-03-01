import React, { useState, useEffect } from "react";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CartItem from "../components/CartItem";


const SidebarProvider = () => {
  const [isOpen, setIsOpen] = useState(false);

  //cart and sidebar
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  });

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  //add
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //verificando se o item ja estar no cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //item do cart ja esta no cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div>
      kjkjkj
    </div>
  );
};

export default SidebarProvider;
