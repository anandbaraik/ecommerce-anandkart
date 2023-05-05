import { useAppContext } from "..";

export function WishlistCard(product) {
  const { removeFromWishlist } = useAppContext();
  const { name, description, price, category, brand } = product;
  return (
    <div style={{ border: "1px solid grey", margin: "3px", width: "350px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price : {price}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <button onClick={() => removeFromWishlist(product)}>
        Remove from wishlist
      </button>
    </div>
  );
}
