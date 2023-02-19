import Loader from "@/comps/loader/Loader";
import LeftSide from "@/comps/purchase/LeftSide";
import RightSide from "@/comps/purchase/RightSide";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Purchase = () => {
  const { BuyBool } = useSelector((state) => state);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5%",
        gap: 2,
        position: "relative",
      }}
    >
      {BuyBool && <Loader />}
      <Box sx={{ display: "flex" }}>BreadCrumbs</Box>
      <Box
        id="Main Container"
        sx={{ display: "flex", flexDirection: "row", gap: 8 }}
      >
        <LeftSide />
        {/* <RightSide /> */}
      </Box>
    </Box>
  );
};

export default Purchase;
