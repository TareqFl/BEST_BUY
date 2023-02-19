import { Box, Paper, Stack, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const LeftSide = () => {
  const { Cart } = useSelector((state) => state);

  const { purchaseNow, totalItems } = Cart;

  const { title, thumbnail, price } = purchaseNow;

  return (
    <Box
      sx={{
        // flexGrow: 2,
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: { xs: "100px", md: "200px" },
              width: { xs: "100px", md: "200px" },
            }}
          >
            <img src={thumbnail} alt={title} height="100%" width="100%" />
          </Box>
          <Box
            id="ITEM DETAILS"
            sx={{ height: "100px", width: "50%", backgroundColor: "red" }}
          >
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
              Price ${price}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.7rem", md: "0.9rem" },
              }}
            >
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
      </Paper>
    </Box>
  );
};

export default LeftSide;
