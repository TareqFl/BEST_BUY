import { Box, Paper, Stack, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const LeftSide = () => {
  const { Cart } = useSelector((state) => state);

  const { purchaseNow, totalItems } = Cart;

  const { title, thumbnail, price } = purchaseNow;

  return (
    <Box sx={{ flexGrow: 2, display: "flex", flexDirection: "column", gap: 4 }}>
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
        <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          Review Item And Shipping
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 2,
            img: {
              height: "200px",
              width: "200px",
              objectFit: "contain",
            },
          }}
        >
          <img src={thumbnail} alt={title} />
          <Box id="item name" sx={{ height: "100px", width: "100px" }}>
            {title}
          </Box>
          <Box
            id="price and Quantity"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100px",
              width: "100px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              ${price}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Quantity:
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Bill Address */}

      <Paper
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
            Deliver Information
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
            autoCorrect="false"
            autoFocus="false"
            placeholder="First Name"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="false"
            autoFocus="false"
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
            autoCorrect="false"
            autoFocus="false"
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
            autoCorrect="false"
            autoFocus="false"
            placeholder="City/Town"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="false"
            autoFocus="false"
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
            autoCorrect="false"
            autoFocus="false"
            placeholder="Mobile*"
          />
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="false"
            autoFocus="false"
            placeholder="Email"
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default LeftSide;
