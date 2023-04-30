import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Cart } from "./Pages/Cart";
import { ErrorPage } from "./Pages/ErrorPage";
import { ProductDetails } from "./Pages/ProductDetails";
import { ProductList } from "./Pages/ProductList";
import { WishList } from "./Pages/WishList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
