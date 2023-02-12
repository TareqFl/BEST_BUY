import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { LocalPhoneOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { COLOR } from "@/styles/theme";
import IconButton from "@mui/material/IconButton";
const TopBar = () => {
  return (
    <Paper
      sx={{
        backgroundColor: COLOR.primary,
        borderRadius: 0,
        pt: 1,
        pb: 1,
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Box id="left Side" sx={{ display: "flex", alignItems: "center" }}>
          <LocalPhoneOutlined color="whiteCream" />
          <Typography color="white">+90 000 123 45 67</Typography>
        </Box>

        <Box
          id="middle section"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            flexGrow: 1,
          }}
        >
          <Typography color="white">Get 50% off on selected items</Typography>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ backgroundColor: "white" }}
          />
          <Typography color="white">Shop Now</Typography>
        </Box>

        <Box
          id="right side"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Typography color="white">Eng</Typography>
            <IconButton>
              <KeyboardArrowDown color="whiteCream" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white">Location</Typography>
            <IconButton>
              <KeyboardArrowDown color="whiteCream" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default TopBar;
