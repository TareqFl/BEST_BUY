import Loader from "@/comps/loader/Loader";
import LeftSide from "@/comps/purchase/LeftSide";
import RightSide from "@/comps/purchase/RightSide";
import { User_data } from "@/context";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Purchase = () => {
  const { cart } = React.useContext(User_data);
  const router = useRouter();
  React.useEffect(() => {
    if (!cart) {
      router.push("/");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5%",
        // gap: 2,
        position: "relative",
      }}
    >
      {/* {BuyBool && <Loader />} */}
      <Box
        id="Main Container"
        sx={{ display: "flex", flexDirection: "row", gap: 0 }}
      >
        <LeftSide cart={cart} />
        <RightSide cart={cart} />
      </Box>
    </Box>
  );
};

export default Purchase;
