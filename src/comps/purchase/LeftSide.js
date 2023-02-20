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

      {/* Bill Address */}

      {/* <Paper
        elevation={2}
        sx={{
          width: "100%",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "16px",
        }}
      >
        <Box id=" title">
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Adress Information
          </Typography>
        </Box>

        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{
            input: {
              width: "100%",
              padding: 1,
              outline: "none",
            },
          }}
          gap={2}
        >
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="First Name"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="Last Name"
          />
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{ input: { width: "100%", padding: 1, outline: "none" } }}
        >
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="Address"
          />
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{
            input: {
              width: "100%",
              padding: 1,
              outline: "none",
            },
          }}
          gap={2}
        >
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="City/Town"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="Zip Code*"
          />
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          sx={{
            input: {
              width: "100%",
              padding: 1,
              outline: "none",
            },
          }}
          gap={2}
        >
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="Mobile*"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus="off"
            placeholder="Email"
          />
        </Stack>
      </Paper> */}
    </Box>
  );
};

export default LeftSide;
