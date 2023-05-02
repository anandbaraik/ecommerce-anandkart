import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../API/fakeFetch";

const AppContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: (id) => {},
  addToWishlist: (id) => {},
  removeFromWishlist: (id) => {}
});

const AppContextProvider = ({ children }) => {
  const URL = "https://example.com/api/products";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const {
        status,
        data: { products: productList }
      } = await fakeFetch(URL);
      if (status === 200) setProducts(productList);
    } catch ({ status, message }) {
      console.error(`${status} : ${message}`);
    }
  };

  const addToCart = (product) => {
    const isExist = cart?.find(({ id }) => id === product.id);
    if (isExist) {
      const updatedCart = cart?.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        addToCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
export default AppContextProvider;
