import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import MenuItem from "../MenuItem";

function Desserts() {
  const { desserts } = useContext(EcomContext);

  return (
    <div className="mb-8 container mx-auto p-6">
      <h2 className="text-[25px] font-semibold mb-4">Desserts</h2>
      <div className="space-y-4">
        {desserts.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Desserts;
