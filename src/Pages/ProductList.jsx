import { useAppContext } from "..";
import { ProductCard } from "../Components/ProductCard";

export const ProductList = () => {
  const { products } = useAppContext();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "15px"
      }}
    >
      {products.length ? (
        <>
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} noDetails />
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
