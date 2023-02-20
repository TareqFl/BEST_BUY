import React from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { FaAmazon, FaCcVisa, FaPaypal, FaCcMastercard } from "react-icons/fa";
import { COLOR } from "@/styles/theme";
import { ClickAwayListener } from "@mui/base";
import { User_data } from "@/context";
const CustomStack = ({ text }) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <ClickAwayListener onClickAway={() => setClicked(false)}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
        <Radio checked={clicked} onChange={() => setClicked(true)} />
        <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
          {text}
        </Typography>
      </Stack>
    </ClickAwayListener>
  );
};

const RightSide = ({ cart }) => {
  const { buyBool, setBuyBool } = React.useContext(User_data);

  const [amount, setAmount] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  React.useEffect(() => {
    setAmount(0);
    cart.forEach((item) => {
      setAmount((prevValue) => prevValue + item.quantity * item.price);
    });
    setShipping(Math.floor(Math.random() * 10));
    setDiscount(Math.floor(Math.random() * 600));
    setTotalAmount();
  }, [cart]);

  return (
    <Paper
      elevation={2}
      sx={{
        width: { md: "30%" },
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "16px",
        input: {
          padding: 2,
          outline: "none",
          border: `1px solid ${COLOR.primary}`,
          width: "100%",
        },
      }}
    >
      <Typography id="payment" sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Payment Details
      </Typography>

      <Stack display="flex" direction="column">
        <CustomStack text="Cash on Delivery" />
        <CustomStack text="Shopcard Card" />
        <CustomStack text="Paypal" />
        <CustomStack text="Credit or Debit Card" />
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <FaAmazon size={48} style={{ fill: COLOR.gold }} />
        <FaCcMastercard size={48} style={{ fill: COLOR.red }} />
        <Box
          sx={{
            backgroundColor: "blue",
            padding: 0,
            svg: { display: "block", padding: 0, margin: 0 },
          }}
        >
          <FaCcVisa size={48} fill="white" />
        </Box>
        <FaPaypal size={48} style={{ fill: "blue" }} />
      </Stack>

      <Typography sx={{ fontSize: "1.5rem", fontSize: "bold" }}>
        Email
      </Typography>

      <input placeholder="Email" />
      <Typography sx={{ fontSize: "1.5rem", fontSize: "bold" }}>
        Card Holder Name
      </Typography>

      <input placeholder="Card Holder Name" />
      <Typography sx={{ fontSize: "1.5rem", fontSize: "bold" }}>
        Card Number
      </Typography>

      <input placeholder="111122223334444" />

      <Stack
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <input placeholder="Expiry Date" />
        <input placeholder="CVC" />
      </Stack>

      <Box id="title">
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Order Summary
        </Typography>
      </Box>

      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Total</Typography>
        <Typography fontWeight="bold">${amount}</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Tax(10%)</Typography>
        <Typography fontWeight="bold">${Math.floor(amount * 0.1)}</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Coupon Discount</Typography>
        <Typography fontWeight="bold">${discount}</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Shipping cost</Typography>
        <Typography fontWeight="bold">${shipping}</Typography>
      </Stack>

      <Divider />
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Net Total</Typography>
        <Typography fontWeight="bold">
          ${amount + Math.floor(amount * 0.1) + shipping - discount}
        </Typography>
      </Stack>

      <Button
        variant="contained"
        sx={{ borderRadius: 24, padding: 2 }}
        onClick={() => {
          setBuyBool(true);
          let element = document.getElementById("payment");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        Pay
      </Button>
    </Paper>
  );
};

export default RightSide;
