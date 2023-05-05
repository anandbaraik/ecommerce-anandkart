import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../API/fakeFetch";

const AppContext = createContext({
  products: [],
  cart: [],
  wishlist: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {}
});

const AppContextProvider = ({ children }) => {
  const URL = "https://example.com/api/products";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const removeFromCart = (product) => {
    const updatedCart = cart?.filter((p) => {
      return p.id !== product.id;
    });
    setCart(updatedCart);
  };

  const decreaseProductQtyByOne = (product) => {
    const updatedCart = cart?.filter((p) => {
      if (p.id === product.id) {
        --p.quantity;
        return p.quantity > 0;
      }
      return true;
    });
    setCart(updatedCart);
  };

  const addToWishlist = (product) => {
    const isExist = wishlist?.find(({ id }) => id === product.id);
    if (!isExist) {
      setWishlist([...wishlist, { ...product }]);
    }
  };
  const removeFromWishlist = (product) => {
    const remainingWishList = wishlist?.filter(({ id }) => id !== product.id);
    setWishlist([...remainingWishList]);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        decreaseProductQtyByOne
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
