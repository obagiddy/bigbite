import { createContext, useState, useEffect, useCallback } from "react";
import useAlert from "../hooks/useAlert";

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);
  const [appitizers, setAppitizers] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // Add user state
  const { alertInfo, showAndHide } = useAlert();

  useEffect(() => {
    fetchProduct();
    fetchRestaurants();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/BigBite");
    const data = await res.json();
    if (data) {
      setProduct(data);
      const Menus = data.flatMap((restaurant) => restaurant.menu);
      setTopSelling(Menus.filter((item) => item.TopSelling === true));
      setBestDeals(Menus.filter((item) => item.BestDeals === true));
      setAppitizers(Menus.filter((item) => item.Appitizers === true));
      setMainCourses(Menus.filter((item) => item.MainCourses === true));
      setDesserts(Menus.filter((item) => item.Desserts === true));
    } else {
      console.error("Data is undefined");
    }
  };

  const fetchRestaurants = async () => {
    const res = await fetch("http://localhost:3000/BigBite");
    const data = await res.json();
    if (data) {
      setRestaurants(data);
    } else {
      console.error("Data is undefined");
    }
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredResults = [
    ...product.flatMap((restaurant) =>
      restaurant.menu.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ),
    ...restaurants.filter((item) =>
      item.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  ];

  const addToCart = (prod) => {
    const existingItem = cartItems.findIndex((item) => item.id === prod.id);

    if (existingItem !== -1) {
      const updatedCart = [...cartItems];
      const itemToUpdate = updatedCart[existingItem];
      itemToUpdate.quantity += prod.quantity
      itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity;
      showAndHide("error", "item already exists");
    } else {
      setCartItems([
        ...cartItems,
        { ...prod, amount: prod.price * prod.quantity },
      ]);
      showAndHide("success", "item added to cart");
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const existingItem = cartItems.findIndex((item) => item.id === id);
    const updatedCart = [...cartItems];
    const itemToUpdate = updatedCart[existingItem];
    itemToUpdate.quantity = newQuantity;
    itemToUpdate.amount = (parseFloat(itemToUpdate.price.replace(",", "")) * newQuantity).toFixed(2);
    itemToUpdate.amount = parseFloat(itemToUpdate.amount).toLocaleString('en-US', { minimumFractionDigits: 2 });
    setCartItems(updatedCart);
  };

  const subTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const amount = typeof item.amount === 'string' ? parseFloat(item.amount.replace(",", "")) : item.amount;
      return total + amount;
    }, 0);
    return subtotal.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    showAndHide("success", "item removed from cart");
  };

  const login = (userData) => {
    // Here you would typically perform authentication with a backend
    setUser(userData);
    showAndHide("success", "Logged in successfully");
  };

  const logout = () => {
    setUser(null);
    showAndHide("success", "Logged out successfully");
  };

  return (
    <EcomContext.Provider
      value={{
        product,
        topSelling,
        bestDeals,
        appitizers,
        mainCourses,
        desserts,
        searchQuery,
        handleSearch,
        filteredResults,
        restaurants,
        addToCart,
        cartItems,
        alertInfo,
        showAndHide,
        updateQuantity,
        removeItem,
        subTotal,
        user,
        login,
        logout
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;