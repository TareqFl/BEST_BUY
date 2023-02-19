import { Box, IconButton } from "@mui/material";
import React from "react";
import { User_data } from "@/context";
const BurgerMenu = () => {
  const { user, setUser, HandleDrawer, setHandleDrawer } =
    React.useContext(User_data);

  return (
    <IconButton
      onClick={() => setHandleDrawer(!HandleDrawer)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: 2.5,
        gap: 0.5,
        overflow: "hidden",
        "& .top": {
          height: "2px",
          width: "24px",
          backgroundColor: "black",
          position: "absolute",
          top: HandleDrawer ? 18 : 10,
          left: 8,
          transform: HandleDrawer ? "rotate(45deg)" : "rotate(0deg)",
          transition: "0.5s",
        },
        "& .mid": {
          height: "2px",
          width: "24px",
          backgroundColor: "black",
          position: "absolute",
          bottom: 19,
          left: HandleDrawer ? -25 : 8,
          transition: "0.5s",
        },
        "& .bot": {
          height: "2px",
          width: "24px",
          backgroundColor: "black",
          position: "absolute",
          bottom: HandleDrawer ? 19 : 10,
          left: 8,
          transform: HandleDrawer ? "rotate(-45deg)" : "rotate(0deg)",
          transition: "0.5s",
        },
      }}
    >
      <Box className="top"></Box>
      <Box className="mid"></Box>
      <Box className="bot"></Box>
    </IconButton>
  );
};

export default BurgerMenu;
