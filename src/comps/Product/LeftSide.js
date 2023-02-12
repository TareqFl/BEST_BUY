import { COLOR } from "@/styles/theme";
import { Box, ButtonBase } from "@mui/material";
import React from "react";

const LeftSide = ({ images, Product }) => {
  const [buttonImage, setButtonImage] = React.useState(0);

  const customHeight = "725px";
  return (
    <Box
      id="Left Side"
      sx={{
        // border: "1px solid green",
        width: "50%",
        height: customHeight,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        id="Main Display"
        sx={{
          height: "600px",
          width: "100%",
          backgroundColor: COLOR.whiteCream,
          borderRadius: 4,
          overflow: "hidden",
          img: {
            objectFit: "fill",
          },
        }}
      >
        <img src={images[buttonImage]} width="100%" height="100%" />
      </Box>
      <Box
        id="Secondary Displays"
        sx={{
          display: "flex",
          width: "100%",
          height: "125px",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "auto",
          gap: 2,
        }}
      >
        {Product?.images.map((img, index) => {
          return (
            <ButtonBase
              onClick={() => setButtonImage(index)}
              key={index}
              sx={{
                "&:hover": { transform: "scale(1.1)" },
                height: "100px",
                width: "100px",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <img src={img} height="100%" width="100%" />
            </ButtonBase>
          );
        })}
      </Box>
      {/* END OF LEFT SIDE */}
    </Box>
  );
};

export default LeftSide;
