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
import CustomCircle from "./CustomCircle";
import { add_To_Cart, buy_now } from "@/actions";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const RightSide = ({ title, description, rating, price, stock, Product }) => {
  const dispatch = useDispatch();
  const { Cart } = useSelector((state) => state);
  const { items, totalItems } = Cart;
  const [addQuantity, setQuantity] = React.useState(1);
  const { push } = useRouter();
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
    if (items == null) {
      let cookie = JSON.parse(getCookie("token"));
      const { username } = cookie;
      return dispatch(
        add_To_Cart({
          items: [{ ...Product, quantity: addQuantity }],
          username,
          totalItems: addQuantity,
        })
      );
    }

    ///if item doesnt === null
    let fact = items.find((itm) => itm.title === title);
    if (fact) {
      let updatedItemQuantity;
      let capturedIndex;
      items.filter((item, index) => {
        if (item.title === title) {
          item.quantity = addQuantity;
          capturedIndex = index;
          return (updatedItemQuantity = item);
        }
      });
      updatedItemQuantity = items[capturedIndex];
      let newCart = { ...Cart, items };

      let old_total_arr = newCart.items.map((item) => item.quantity);
      let newTotal = 0;
      old_total_arr.forEach((nmbr) => (newTotal = newTotal + nmbr));
      newCart.totalItems = newTotal;
      return dispatch(add_To_Cart(newCart));
    }
    // if fact is false
    let cookie = JSON.parse(getCookie("token"));
    const { username } = cookie;
    let newItems = [...items, { ...Product, quantity: addQuantity }];
    let old_total_arr = newItems.map((item) => item.quantity);
    let newTotal = 0;
    old_total_arr.forEach((nmbr) => (newTotal = newTotal + nmbr));
    const newCart = {
      ...Cart,
      items: newItems,
      totalItems: newTotal,
      username,
    };
    dispatch(add_To_Cart(newCart));
  };
  const [choosenColor, setChoosenColor] = React.useState([]);
  const colorsGroup = [
    { color1: COLOR.red2, color2: COLOR.red2Light },
    { color1: COLOR.charcoal, color2: COLOR.charcoalLight },
    { color1: COLOR.lightGreen, color2: COLOR.whiteCream },
    { color1: COLOR.lightGray, color2: COLOR.whiteCream },
    { color1: COLOR.blue, color2: COLOR.lightBlue },
  ];
  return (
    <Box
      id="Right Side"
      sx={{
        // border: "1px solid red",
        width: "50%",
        // height: customHeight,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box id="title">
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </Box>
      <Box id="description">
        <Typography sx={{ color: "gray" }}>{description}</Typography>
      </Box>
      <Box id="reviews" sx={{ display: "flex" }}>
        <Star sx={{ color: COLOR.secondary }} />
        <Star sx={{ color: COLOR.secondary }} />
        <Star sx={{ color: COLOR.secondary }} />
        <Star sx={{ color: COLOR.secondary }} />
        <Star sx={{ color: COLOR.secondary }} />
        <Typography>({rating})</Typography>
      </Box>
      <Box id="Price">
        <Typography variant="h3" fontWeight="bold">
          ${price}
        </Typography>
      </Box>

      <Box
        id="Choose a color"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="h6" fontWeight="bold">
          Choose A Color
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {colorsGroup.map((c, index) => {
            return (
              <CustomCircle key={index} color1={c.color1} color2={c.color2} />
            );
          })}
        </Box>
        {/* End OF Color  */}
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
          <IconButton onClick={handleSubstraction}>
            <Remove sx={{ color: COLOR.primary }} />
          </IconButton>
          <Typography
            sx={{
              color: COLOR.primary,
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {addQuantity}
          </Typography>
          <IconButton onClick={handleAddition}>
            <Add sx={{ color: COLOR.primary }} />
          </IconButton>
        </Box>
        <Box id="Stock Information">
          <Typography>
            Only
            <strong style={{ color: COLOR.gold }}>
              {" " + stock + " "}items{" "}
            </strong>
            Left!
          </Typography>
        </Box>
      </Box>
      {/* Buy Button */}
      <Box sx={{ display: "flex", gap: 2, button: { borderRadius: 25 } }}>
        <Button
          sx={{ width: "150px" }}
          variant="contained"
          onClick={() => {
            dispatch(buy_now(Product));
            push("/purchase");
          }}
        >
          Buy Now
        </Button>
        <Button sx={{ width: "150px" }} variant="outlined" onClick={handleCart}>
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
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <LocalShipping sx={{ color: COLOR.gold }} fontSize="large" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "bold" }}>Free Delivery</Typography>
              <Typography sx={{ textDecoration: "underline", color: "gray" }}>
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
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Handshake sx={{ color: COLOR.gold }} fontSize="large" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Return Delivery gaurentee
              </Typography>
              <Typography sx={{ textDecoration: "underline", color: "gray" }}>
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
