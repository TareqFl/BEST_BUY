import { COLOR } from "@/styles/theme";
import { Box, ButtonBase } from "@mui/material";
import React from "react";

const SecondaryImages = ({ Product, MyStyle, onClick }) => (
  <Box id="Secondary Displays" sx={MyStyle}>
    {Product?.images?.map((img, index) => {
      return (
        <ButtonBase
          onClick={() => onClick(index)}
          key={index}
          sx={{
            "&:hover": { transform: "scale(1.1)" },
            height: "75px",
            width: "75px",
            borderRadius: 4,
            backgroundColor: COLOR.whiteCream,
            img: { width: "75px", height: "100%" },
          }}
        >
          <img src={img} />
        </ButtonBase>
      );
    })}
  </Box>
);

const LeftSide = ({ images, Product }) => {
  const [buttonImage, setButtonImage] = React.useState(0);

  return (
    <Box
      id="Left Side"
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { sm: 2 },
      }}
    >
      <SecondaryImages
        Product={Product}
        MyStyle={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          width: "125px",
          height: "300px",
          alignItems: "center",
          "&::-webkit-scrollbar": {
            display: "block",
            backgroundColor: "transparent",
            width: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLOR.primary,
            width: "2px",
          },

          overflowY: "scroll",
          gap: 2,
        }}
        onClick={(index) => setButtonImage(index)}
      />
      <Box
        id="Main Display"
        sx={{
          height: { xs: "175px", sm: "300px", md: "600px" },
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
      <SecondaryImages
        Product={Product}
        MyStyle={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          overflow: "scroll",
          alignItems: "center",
          width: "100%",
          height: "125px",
          gap: 2,
        }}
        onClick={(index) => setButtonImage(index)}
      />
      {/* END OF LEFT SIDE */}
    </Box>
  );
};

export default LeftSide;
