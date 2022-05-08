import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (inCart(item)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copiarItem = { ...cartItem };
          copiarItem.cant += cant;
          return copiarItem;
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
    quantityInCart();
  };

  const removeToCart = (item) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((newCart) => {
      return newCart.id !== item.id;
    });
    setCart(cartFilter);
    quantityInCart();
  };

  const clearCart = () => {
    const newCart = [];
    setCart(newCart);
    quantityInCart();
  };

  const inCart = (item) => {
    let inArray = false;
    if (cart.find((cart) => cart.id === item.id)) {
      inArray = true;
    }
    return inArray;
  };

  const quantityInCart = () => {
    let quantity=0;
    for (let i = 0; i < cart.length; i++) {
      quantity += cart[i].cant;
    }
    return quantity;
  };


  return <Provider value={{ cart, addToCart, removeToCart, clearCart, quantityInCart }}>{children}</Provider>;
}

export default useCartContext;
