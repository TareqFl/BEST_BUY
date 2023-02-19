import { COLOR } from "@/styles/theme";
import { Box } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import { User_data } from "@/context";

const AppBarComponents = ({ children }) => {
  const { HandleDrawer } = React.useContext(User_data);

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
