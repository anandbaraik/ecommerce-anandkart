import { Link } from "react-router-dom";
import { useAppContext } from "..";

export function ProductCard(product) {
  const {
    cart,
    addToCart,
    decreaseProductQtyByOne,
    addToWishlist,
    wishlist,
    removeFromWishlist
  } = useAppContext();
  const {
    id,
    name,
    description,
    price,
    quantity,
    category,
    brand,
    noDetails
  } = product;
  const getStyle = (noDetails) => {
    return (
      noDetails && { border: "1px solid grey", margin: "3px", width: "400px" }
    );
  };

  const isProductInWishList = (productId) => {
    if (!wishlist?.length) return false;
    return wishlist?.find(({ id }) => id === productId);
  };

  const isProductAddedInCart = (productId) => {
    if (!cart?.length) return false;
    return cart?.find(({ id }) => id === productId);
  };

  const productQtyInCard = (product) => {
    return cart?.find(({ id }) => id === product.id)?.quantity;
  };

  return (
    <div style={getStyle(noDetails)}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price : {price}</p>
      {noDetails ? (
        <>
          <Link to={`/product/${id}`} style={{ marginRight: "0.5rem" }}>
            Visit Item{" "}
          </Link>
        </>
      ) : (
        <>
          <p>Quantity : {quantity}</p>
          <p>Category : {category}</p>
          <p>Brand : {brand}</p>
        </>
      )}
      {!isProductAddedInCart(id) ? (
        <>
          <button
            disabled={isProductAddedInCart(id)}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <button onClick={() => decreaseProductQtyByOne(product)}>
            -
          </button>{" "}
          {productQtyInCard(product)}{" "}
          <button onClick={() => addToCart(product)}>+</button>{" "}
        </>
      )}
      {isProductInWishList(id) ? (
        <>
          <button onClick={() => removeFromWishlist(product)}>
            Remove from wishlist
          </button>{" "}
        </>
      ) : (
        <>
          <button onClick={() => addToWishlist(product)}>
            Add to wishlist
          </button>{" "}
        </>
      )}
    </div>
  );
}
