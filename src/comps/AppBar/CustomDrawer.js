import React from "react";
import { Box, Paper, IconButton, Badge, Typography } from "@mui/material";
import { COLOR } from "@/styles/theme";
import {
  PersonOutlined,
  KeyboardArrowDown,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { User_data } from "@/context";
import { useRouter } from "next/router";
import { ClickAwayListener } from "@mui/base";
const CustomDrawer = () => {
  const { user, HandleDrawer, cart, setHandleDrawer } =
    React.useContext(User_data);
  const router = useRouter();

  return (
    <Paper
      id="drawer"
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "100vh",
        borderRadius: 0,
        position: "fixed",
        zIndex: 15,
        left: HandleDrawer ? 0 : -450,
        top: 0,
        bottom: 0,
        backgroundColor: COLOR.primary,
        transition: "0.5s",
      }}
      elevation={4}
    >
      <IconButton
        onClick={() => setHandleDrawer(false)}
        size="small"
        sx={{
          position: "absolute",
          top: 5,
          right: 10,
          backgroundColor: COLOR.whiteCream,
          transform: HandleDrawer ? "rotate(180deg)" : "rotate(0deg)",
          transition: "1.25s",
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <Box
        sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton size="large">
            <PersonOutlined fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <IconButton size="large" onClick={() => router.push("/purchase")}>
            <Badge badgeContent={cart.length} color="error">
              <AiOutlineShoppingCart
                style={{ fontSize: "2.1875rem", color: "white" }}
              />
            </Badge>
          </IconButton>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography color="white">Categories</Typography>
          <IconButton>
            <KeyboardArrowDown sx={{ color: "white" }} />
          </IconButton>
        </Box> */}
        <Typography color="white">Deals</Typography>
        <Typography color="white">What's New</Typography>
        <Typography color="white">Delivery</Typography>
      </Box>
    </Paper>
  );
};

export default CustomDrawer;
