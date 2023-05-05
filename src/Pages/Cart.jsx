import { useAppContext } from "..";
import { CartCard } from "../Components/CartCard";

export const Cart = () => {
  const { cart } = useAppContext();
  const total = cart?.reduce((acc, { quantity }) => acc + quantity, 0);
  const totalAmount = cart?.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  return (
    <div>
      <h3>Item : {cart?.length}</h3>
      <h3>Total quantity: {total}</h3>
      <h3>Total Amount: {totalAmount}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "15px"
        }}
      >
        {cart.length ? (
          <>
            {cart?.map((product) => (
              <CartCard key={product.id} {...product} noDetails />
            ))}
          </>
        ) : (
          <h1>Cart is empty</h1>
        )}
      </div>
    </div>
  );
};
