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
import { useDispatch } from "react-redux";
import { buy_boolean } from "../../actions";
const CustomStack = ({ text }) => (
  <Stack
    display="flex"
    direction="row"
    justifyContent="start"
    alignItems="center"
  >
    <Radio />
    <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
      {text}
    </Typography>
  </Stack>
);

const RightSide = () => {
  const dispatch = useDispatch();

  return (
    <Paper
      elevation={2}
      sx={{
        flexGrow: 0.5,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "16px",
        input: {
          padding: 2,
          outline: "none",
          border: `1px solid ${COLOR.primary}`,
        },
      }}
    >
      <Box id="title">
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Order Summary
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
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

      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Sub Total</Typography>
        <Typography fontWeight="bold">$0</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Tax(10%)</Typography>
        <Typography fontWeight="bold">$0</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Coupon Discount</Typography>
        <Typography fontWeight="bold">$0</Typography>
      </Stack>
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Shipping cost</Typography>
        <Typography fontWeight="bold">$0</Typography>
      </Stack>
      <Divider />
      <Stack display={"flex"} direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">Shipping cost</Typography>
        <Typography fontWeight="bold">$0</Typography>
      </Stack>

      <Button
        variant="contained"
        sx={{ borderRadius: 24, padding: 2 }}
        onClick={() => dispatch(buy_boolean(true))}
      >
        Pay $12154
      </Button>
    </Paper>
  );
};

export default RightSide;
