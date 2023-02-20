import { createContext, useState } from "react";

export const User_data = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState({
    username: null,
    HandleDrawer: false,
  });
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);
  const [allProducts, setAllProducts] = useState(false);
  const [sortProducts, setSortProducts] = useState([]);
  const [HandleDrawer, setHandleDrawer] = useState(false);
  const [buyBool, setBuyBool] = useState(false);
  const [info, setInfo] = useState(false);
  return (
    <User_data.Provider
      value={{
        user,
        setUser,
        search,
        setSearch,
        allProducts,
        setAllProducts,
        sortProducts,
        setSortProducts,
        HandleDrawer,
        setHandleDrawer,
        cart,
        setCart,
        buyBool,
        setBuyBool,
        info,
        setInfo,
      }}
    >
      {children}
    </User_data.Provider>
  );
}
