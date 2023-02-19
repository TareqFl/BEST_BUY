import { COLOR } from "@/styles/theme";
import { Box, ButtonBase } from "@mui/material";
import React from "react";

const CustomCircle = ({ color1, color2 }) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <ButtonBase
      onClick={() => setClicked(!clicked)}
      sx={{
        borderRadius: 50,
        overflow: "hidden",
        height: { xs: "25px", sm: "50px" },
        width: { xs: "25px", sm: "50px" },
        border: clicked ? `2px solid ${COLOR.primary}` : "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        padding: 0.5,
      }}
    >
      <Box
        sx={{
          height: "50%",
          width: "100%",
          backgroundColor: color1,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      ></Box>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          backgroundColor: color2,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      ></Box>
    </ButtonBase>
  );
};

export default CustomCircle;
