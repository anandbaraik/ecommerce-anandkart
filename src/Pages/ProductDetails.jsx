import { Link, useParams } from "react-router-dom";
import { useAppContext } from "..";
import { ProductCard } from "../Components/ProductCard";

export const ProductDetails = () => {
  const { productID } = useParams();
  const { products } = useAppContext();
  const product = products?.find(({ id }) => id == productID);
  return (
    <div>
      <ProductCard {...product} />
      <div style={{ margin: "1rem" }}>
        <Link to="/">See all products</Link>
      </div>
    </div>
  );
};
