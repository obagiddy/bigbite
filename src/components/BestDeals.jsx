import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import ProductItems from "./ProductItems";

function BestDeals() {
  const { bestDeals } = useContext(EcomContext);

  return (
    <div className="mx-[1%]">
      <h1 className="font-extrabold py-[8px] text-[25px]">Best Deals</h1>
      <div className="grid grid-cols-4">
        {bestDeals.map((item) => (
          <ProductItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
