import React from "react";
import { Box } from "@mui/material";
import EndingCard from "./EndingCard";
import q from "../assets/question.png";
import p from "../assets/inhand-removebg-preview.png";
import d from "../assets/delivery.png";
import { COLOR } from "@/styles/theme";
const Footer = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
      {/* <EndingCard Source={q} BgColor={COLOR.yellow} Alt="FAQ" />
      <EndingCard Source={p} BgColor={COLOR.secondary} Alt="Phone" />
      <EndingCard Source={d} BgColor={"#dfc0ab"} ALT="Delivery" /> */}
    </Box>
  );
};

export default Footer;
