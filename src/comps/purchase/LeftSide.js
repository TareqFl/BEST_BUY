import { User_data } from "@/context";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CartDetails from "./CartDetails";

const LeftSide = ({ cart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        // overflow: "hidden",
        width: { md: "30%" },
        justifySelf: "end",
      }}
    >
      <Paper
        id="displayitems"
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "375px",
          width: "100%",
          padding: "16px",
          gap: 2,
          overflow: "auto",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.5rem" } }}
        >
          Review Item And Shipping
        </Typography>
        <Stack
          display="flex"
          direction="column"
          spacing={2}
          sx={{
            overflowY: "auto",
            height: "100%",
            width: "100%",
          }}
        >
          {cart?.map((item, index) => (
            <CartDetails
              key={index}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              thumbnail={item.thumbnail}
              index={index}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default LeftSide;
