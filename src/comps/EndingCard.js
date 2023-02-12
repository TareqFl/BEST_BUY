import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { COLOR } from "@/styles/theme";

const EndingCard = ({ Text, Source, Alt, BgColor }) => {
  return (
    <Paper
      sx={{
        height: 400,
        flexGrow: 0.5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        id="Top"
        sx={{ height: "50%", width: "100%", backgroundColor: COLOR.whiteCream }}
      >
        <Typography variant="h6" fontWeight="bold">
          {Text}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          backgroundColor: BgColor,
          img: { height: "100%", width: "100%" },
        }}
      >
        <Image src={Source} alt={"photoname"} />
      </Box>
    </Paper>
  );
};

export default EndingCard;
