import { COLOR } from "@/styles/theme";
import {
  Add,
  Handshake,
  LocalShipping,
  NetworkWifiTwoTone,
  Remove,
  Star,
} from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

import { User_data } from "@/context";
import { useContext } from "react";
import { getCookie, removeCookies, setCookie } from "cookies-next";
const RightSide = ({ title, description, rating, price, stock, Product }) => {
  const { push } = useRouter();
  const { cart, setCart } = useContext(User_data);

  const [addQuantity, setQuantity] = React.useState(1);

  const handleAddition = () => {
    if (addQuantity == stock) {
      return;
    }

    return setQuantity((prevV) => prevV + 1);
  };

  const handleSubstraction = () => {
    if (addQuantity === 1) {
      return;
    }

    return setQuantity((prevV) => prevV - 1);
  };

  const handleCart = async () => {
    let all_Products = cart && [...cart];
    let index;
    let exists = false;
    let updated_item;
    if (!cart.length) {
      return setCart([{ ...Product, quantity: addQuantity }]);
    }

    cart.forEach((item, indx) => {
      if (item.title === title) {
        index = indx;
        exists = true;
      }
    });

    if (exists) {
      updated_item = all_Products[index];
      updated_item.quantity = updated_item.quantity + addQuantity;
      return setCart([...all_Products]);
    } else {
      all_Products.push({ ...Product, quantity: addQuantity });
      return setCart([...all_Products]);
    }
  };

  function handleBuy() {
    let all_Products = cart && [...cart];
    let index;
    let exists = false;
    let updated_item;
    if (!cart.length) {
      setCart([{ ...Product, quantity: addQuantity }]);
      return push("/purchase");
    }
    cart.forEach((item, indx) => {
      if (item.title === title) {
        index = indx;
        exists = true;
      }
    });

    if (!exists) {
      all_Products.push({ ...Product, quantity: addQuantity });
      setCart([...all_Products]);
      return push("/purchase");
    }

    return push("/purchase");
  }

  React.useEffect(() => {
    setCookie("cart", { items: cart }, { maxAge: 604800 });
  }, [cart]);
  return (
    <Box
      id="Right Side"
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 4 },
      }}
    >
      <Box id="title">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box id="description">
        <Typography
          sx={{
            color: "gray",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box id="reviews" sx={{ display: "flex" }}>
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        />
        <Typography>({rating})</Typography>
      </Box>
      <Box id="Price">
        <Typography
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.5rem", sm: "3rem" } }}
        >
          ${price}
        </Typography>
      </Box>

      {/* Buy Point */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          id="ADD MINUS BUTTONs"
          sx={{
            backgroundColor: COLOR.whiteCream,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
            width: "150px",
            borderRadius: 12,
          }}
        >
          <IconButton
            onClick={handleSubstraction}
            // sx={{ height: 36, width: 36 }}
          >
            <Remove
              sx={{
                color: COLOR.primary,
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
              }}
            />
          </IconButton>
          <Typography
            sx={{
              color: COLOR.primary,
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.5rem" },
            }}
          >
            {addQuantity}
          </Typography>
          <IconButton onClick={handleAddition}>
            <Add
              sx={{
                color: COLOR.primary,
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
              }}
            />
          </IconButton>
        </Box>
        <Box id="Stock Information">
          <Typography sx={{ fontSize: "0.7rem" }}>
            Only
            <strong style={{ color: COLOR.gold }}>
              {" " + stock + " "}items{" "}
            </strong>
            Left!
          </Typography>
        </Box>
      </Box>
      {/* Buy Button */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          sx={{ width: "50%", fontSize: { xs: "0.6rem", sm: "1rem" } }}
          variant="contained"
          onClick={handleBuy}
        >
          Buy Now
        </Button>
        <Button
          sx={{ width: "50%", fontSize: { xs: "0.55rem", sm: "1rem" } }}
          variant="outlined"
          onClick={handleCart}
        >
          Add to cart
        </Button>
      </Box>
      {/* End Of Buy POint */}

      {/* Delivery Notice and Facts */}
      <Box
        id="Deliver Notice"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Paper
          id="inner row"
          elevation={2}
          sx={{
            height: "75px",
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            padding: "8px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <LocalShipping sx={{ color: COLOR.gold }} fontSize="large" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6rem", sm: "0.8rem" },
                }}
              >
                Free Delivery
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "gray",
                  fontSize: { xs: "0.6rem", sm: "0.8rem" },
                }}
              >
                Enter your Postal code for Delivery Availability
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          id="inner row"
          elevation={2}
          sx={{
            height: "75px",
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            padding: "8px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Handshake sx={{ color: COLOR.gold }} fontSize="large" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6rem", sm: "0.8rem" },
                }}
              >
                Return Delivery gaurentee
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "gray",
                  fontSize: { xs: "0.6rem", sm: "0.8rem" },
                }}
              >
                Free 30Days delivery returns.
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* End OF Deliver Notice */}
      </Box>

      {/* End OF RIGHT SIDE */}
    </Box>
  );
};

export default RightSide;
