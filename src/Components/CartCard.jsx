import { useAppContext } from "..";

export function CartCard(product) {
  const {
    decreaseProductQtyByOne,
    removeFromCart,
    cart,
    addToCart
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
      <p>Quantity : {quantity}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <button onClick={() => removeFromCart(product)}>
        Remove from cart
      </button>{" "}
      {isProductAddedInCart(id) && (
        <>
          <button onClick={() => decreaseProductQtyByOne(product)}>-</button>
          {productQtyInCard(product)}
          <button onClick={() => addToCart(product)}>+</button>
        </>
      )}
    </div>
  );
}
