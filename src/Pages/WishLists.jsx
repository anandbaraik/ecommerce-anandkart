import { useAppContext } from "..";
import { WishlistCard } from "../Components/WishlistCard";
export const WishLists = () => {
  const { wishlist } = useAppContext();
  return (
    <div>
      <h3>Item : {wishlist?.length}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "15px"
        }}
      >
        {wishlist?.length ? (
          <>
            {wishlist?.map((product) => (
              <WishlistCard key={product.id} {...product} />
            ))}
          </>
        ) : (
          <h1>wishlist is empty</h1>
        )}
      </div>
    </div>
  );
};
