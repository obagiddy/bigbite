import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import MenuItem from "../MenuItem";

function MainCourses() {
  const { mainCourses } = useContext(EcomContext);

  return (
    <div className="mb-8 container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Main Courses</h2>
      <div className="space-y-4">
        {mainCourses.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MainCourses;
