import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartDetails = ({ thumbnail, title, price, quantity }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
      }}
    >
      {/* Left SIde */}
      <Box
        sx={{
          height: { xs: "100px", md: "200px" },
          width: { xs: "100px", md: "200px" },
        }}
      >
        <img src={thumbnail} alt={title} height="100%" width="100%" />
      </Box>

      {/* Right Side */}
      <Box id="ITEM DETAILS" sx={{ height: "100px", width: "50%" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          Price: ${price}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.7rem", md: "0.9rem" },
          }}
        >
          Quantity: {quantity}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartDetails;
