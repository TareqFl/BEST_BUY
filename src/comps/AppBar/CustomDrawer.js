import React from "react";
import { Box, Paper, IconButton, Badge, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { COLOR } from "@/styles/theme";
import { PersonOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CustomDrawer = () => {
  const { HandleDrawer } = useSelector((state) => state);
  return (
    <Paper
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
        zIndex: 10,
        left: HandleDrawer ? 0 : -450,
        top: 0,
        bottom: 0,
        backgroundColor: COLOR.primary,
        transition: "0.5s",
      }}
      elevation={4}
    >
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
          <IconButton size="large">
            <Badge badgeContent={24} color="error">
              <AiOutlineShoppingCart
                style={{ fontSize: "2.1875rem", color: "white" }}
              />
            </Badge>
          </IconButton>
        </Box>

        <Box
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
        </Box>
        <Typography color="white">Deals</Typography>
        <Typography color="white">What's New</Typography>
        <Typography color="white">Delivery</Typography>
      </Box>
    </Paper>
  );
};

export default CustomDrawer;
