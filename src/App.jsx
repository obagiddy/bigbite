import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import CreateProfile from "./components/pages/CreateProfile";
import Footer from "./components/Footer";
import { EcomProvider } from "./context/EcomContext";
import BestDeals from "./components/BestDeals";
import OverView from "./components/OverView";
import PopularRestaurants from "./components/PopularRestaurants";
import Cart from "./components/pages/Cart";
import Details from "./components/pages/Details";
import Appetizer from "./components/pages/Appetizer";
import MainCourses from "./components/pages/MainCourses";
import Desserts from "./components/pages/Desserts";
import MenuList from "./components/pages/Menu";
import RestaurantDetails from "./components/pages/RestaurantDetails";
import Restaurants from "./components/Restaurants";
import Profile from "./components/pages/Profile";

function App() {
  return (
      <EcomProvider>
        <Router>
        <Header />
        <Alert />
        <Routes>
        <Route
              path="/"
              element={
                <>
                  <OverView />
                  <BestDeals />
                  <PopularRestaurants />
                </>
              }
            />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/restaurant" element={<Restaurants />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={
            <>
             <MenuList />
              <Appetizer />
              <MainCourses />
              <Desserts />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
      </EcomProvider>
  );
}

export default App;
