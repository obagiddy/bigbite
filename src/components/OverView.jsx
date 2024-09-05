import Search from "./Search";

function OverView() {
  return (
    <div className="bg-[url('/img/edward.jpg')] bg-no-repeat bg-center bg-cover h-[300px]">
      <div className="h-[300px] py-[25px] bg-black bg-opacity-50">
        <h1 className="text-[43px] font-bold text-slate-50 text-center">Welcome to Anchor's Food Ordering App</h1>
        <h2 className="text-[19px] font-medium text-white text-center mb-[5px]">Discover the best dining experiences around the world with big bite</h2>
        <Search />
      </div>
    </div>
  );
}

export default OverView;
