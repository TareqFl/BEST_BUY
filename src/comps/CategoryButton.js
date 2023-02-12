import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "@/styles/theme";

const CategoryButton = ({ Text, Styling, disabled }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <Box
      sx={
        Styling
          ? {
              ...Styling,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
            }
          : {
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              backgroundColor: COLOR.grey,
            }
      }
    >
      <Typography
        sx={{
          ml: 1,
          fontWeight: "bold",
          fontSize: { md: "0.6rem", lg: "1rem" },
        }}
      >
        {Text}
      </Typography>
      <IconButton onClick={() => setClicked(!clicked)}>
        <KeyboardArrowRight
          sx={{
            transform: !disabled ? clicked && "rotate(90deg)" : "none",
            transition: "0.35s",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default CategoryButton;
