import { NavLink } from "react-router-dom";

export const Header = () => {
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
          Cart
        </NavLink>{" "}
        ||
        <NavLink className={getStyle} to="/wishlist">
          Wishlist
        </NavLink>
      </nav>
    </div>
  );
};
