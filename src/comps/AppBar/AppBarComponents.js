import { COLOR } from "@/styles/theme";
import { Box } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import { User_data } from "@/context";
import { getCookie, setCookie } from "cookies-next";

const AppBarComponents = ({ children }) => {
  const {
    HandleDrawer,
    setHandleDrawer,
    setCart,
    allProducts,
    setAllProducts,
  } = React.useContext(User_data);

  React.useEffect(() => {
    if (!allProducts) {
      fetch("http://192.168.1.16:3000/api/product")
        .then((response) => response.json())
        .then((data) => setAllProducts(data))
        .catch((err) => console.log(err));
    }

    let stored_Cart = getCookie("cart");
    let fact = stored_Cart ? JSON.parse(stored_Cart) : false;
    if (fact.items) {
      return setCart([...fact.items]);
    }
    return setCookie("cart", { items: false });

    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: {
          xs: HandleDrawer ? COLOR.lightPink : "white",
          md: "white",
        },
        transition: "0.5s",
      }}
    >
      <NavBar />
      {children}
    </Box>
  );
};

export default AppBarComponents;
