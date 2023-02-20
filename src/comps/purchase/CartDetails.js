import { User_data } from "@/context";
import { COLOR } from "@/styles/theme";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Fab, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { setCookie } from "cookies-next";
import React from "react";
import _ from "lodash";
const CartDetails = ({ thumbnail, title, price, quantity, index }) => {
  const { cart, setCart } = React.useContext(User_data);

  function handleAddition() {
    let all_products = cart;
    let captured_product = all_products[index];
    captured_product.quantity = captured_product.quantity + 1;
    setCookie("cart", { items: cart }, { maxAge: 604800 });
    return setCart([...all_products]);
  }
  function handleMinus() {
    let all_products = cart;
    let captured_product = all_products[index];
    if (captured_product.quantity === 1) {
      return;
    }
    captured_product.quantity = captured_product.quantity - 1;
    setCookie("cart", { items: cart }, { maxAge: 604800 });
    return setCart([...all_products]);
  }

  function handleRemove() {
    let all_products = _.remove(cart, (item, i) => {
      return i !== index;
    });
    setCookie("cart", { items: all_products }, { maxAge: 604800 });
    return setCart([...all_products]);
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
        position: "relative",
        backgroundColor: COLOR.whiteCream,
        height: "150px",
      }}
    >
      <Fab
        size="small"
        sx={{ position: "absolute", top: "4px", right: "8px" }}
        onClick={handleRemove}
      >
        <Delete fontSize="small" sx={{ color: COLOR.red }} />
      </Fab>
      {/* Left SIde */}
      <Box
        sx={{
          height: { xs: "100px", md: "200px" },
          width: { xs: "100px", md: "200px" },
        }}
      >
        <img src={thumbnail} alt={title} height="100%" width="100%" />
      </Box>

      {/* Right Side */}
      <Box
        id="ITEM DETAILS"
        sx={{
          height: "100px",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          Price: ${price}
        </Typography>
        {/* <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          Quantity: {quantity}
        </Typography> */}
        <Stack display="flex" direction="row" alignItems="center">
          <IconButton onClick={handleMinus}>
            <Remove />
          </IconButton>
          {quantity}
          <IconButton onClick={handleAddition}>
            <Add />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartDetails;
