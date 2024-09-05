import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import MenuItem from "../MenuItem";

function Appetizer() {
  const { appitizers } = useContext(EcomContext);

  return (
    <div className="mb-8 container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Appetizers</h2>
      <div className="space-y-4">
        {appitizers.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Appetizer;
