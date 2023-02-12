import { COLOR } from "@/styles/theme";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const AppBarComponents = ({ children }) => {
  const { HandleDrawer } = useSelector((state) => state);

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
