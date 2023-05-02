import { Link } from "react-router-dom";
import { useAppContext } from "..";

export function ProductCard(product) {
  const { addToCart } = useAppContext();
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
      noDetails && { border: "1px solid grey", margin: "3px", width: "350px" }
    );
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
      <button onClick={() => addToCart(product)}>Add to cart</button>{" "}
      <button>Add to wishlist</button>
    </div>
  );
}
