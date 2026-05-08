import { useEffect, useState } from "react";
import "./App.css";
import Computer from "./components/Computer";
import Contador from "./components/Contador";
import { db } from "./data/db";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [data] = useState(db);

  const initialCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const existComputer = cart.findIndex((computer) => computer.id === item.id);
    if (existComputer >= 0) {
      const updateCart = [...cart];
      updateCart[existComputer].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
    console.log(item);
  }

  function removeFromCart(item) {
    setCart((prevCart) =>
      prevCart.filter((computer) => computer.id !== item.id),
    );
    // console.log(item);
  }

  function increaseQuantity(id) {
    const updateQuantity = cart.map((computer) => {
      if (computer.id === id) {
        computer.quantity++;
        return computer;
      } else {
        return computer;
      }
    });
    setCart(updateQuantity);
    console.log("el valor encontrado es", cart);
  }
  function decreaseQuantity(id) {
    const updateQuantity = cart
      .map((computer) => {
        if (computer.id === id) {
          computer.quantity--;
          return computer;
        } else {
          return computer;
        }
      })
      .filter((computer) => computer.quantity > 0);
    setCart(updateQuantity);
    console.log("el valor encontrado es", cart);
  }
  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      {/* <Contador /> */}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((computer) => (
            <Computer
              key={computer.id}
              computer={computer}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
