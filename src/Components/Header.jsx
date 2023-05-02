import { NavLink } from "react-router-dom";
import { useAppContext } from "..";

export const Header = () => {
  const { cart } = useAppContext();
  const totalQuantity = cart?.reduce((acc, { quantity }) => acc + quantity, 0);
  const getStyle = ({ isActive }) => {
    return isActive ? "link link-active" : "link";
  };
  return (
    <div>
      <h1>AnandKart</h1>
      <nav>
        <NavLink className={getStyle} to="/">
          Home
        </NavLink>{" "}
        ||
        <NavLink className={getStyle} to="/cart">
          Cart {totalQuantity > 0 ? ` - ${totalQuantity}` : ""}
        </NavLink>{" "}
        ||
        <NavLink className={getStyle} to="/wishlist">
          Wishlist
        </NavLink>
      </nav>
    </div>
  );
};
