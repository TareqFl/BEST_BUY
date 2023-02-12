import { Star, FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Grid,
  IconButton,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { COLOR } from "@/styles/theme";
import Beats from "../assets/beats2.png";

const GridCard = ({ value, Product }) => {
  const { HandleDrawer } = useSelector((state) => state);

  const [reviews, setReviews] = React.useState(0);

  useEffect(() => {
    setReviews(Math.floor(Math.random() * 100));
  }, []);

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = Product;

  const [sub, setSub] = React.useState(50);
  const [read, setRead] = React.useState("Read more");
  const [expand, setExpand] = React.useState(false);
  function handleSub() {
    if (sub === 50) {
      setSub(200);
      setExpand(!expand);
      return setRead("Read less");
    }

    setSub(50);
    setExpand(false);
    return setRead("Read more");
  }

  return (
    <Box
      item="true"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: { xs: 175, md: 275 },
        height: expand ? "auto" : 375,
        minHeight: 375,
        backgroundColor: HandleDrawer ? COLOR.lightPink : COLOR.grey,
        transition: " width 1s",
        flexWrap: "wrap",
        overflow: "hidden",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderRadius: 4,
      }}
    >
      <Box
        id="image container"
        sx={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLOR.whiteCream,
          borderBottomRightRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      >
        <Paper
          elevation={HandleDrawer ? 0 : 4}
          sx={{
            borderRadius: 4,
            position: "relative",
            height: "98%",
            width: "98%",
            img: {
              width: "100%",
              height: "200px",
              objectFit: "cover",
              display: "block",
            },
            transition: "1s",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: 0,
              right: 5,
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            <IconButton>
              <Favorite sx={{ color: "#df0c62" }} />
            </IconButton>
          </Paper>
          <Slide in={value} direction="up" timeout={1000}>
            <img src={thumbnail} alt="Beats" />
          </Slide>
        </Paper>
      </Box>

      {/* Title And Price */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 8px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{`${title.substring(
          0,
          16
        )}`}</Typography>
        <Typography sx={{ fontWeight: "bold" }}>{`$${price}`}</Typography>
      </Box>

      {/* Details Section */}
      <Typography sx={{ color: "gray", padding: "0 8px", fontSize: "0.8rem" }}>
        {description.substring(0, sub)}...
        <strong
          style={{ cursor: "pointer", color: COLOR.textColor }}
          onClick={handleSub}
        >
          {read}
        </strong>
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", padding: "0 8px" }}>
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        />
        <Star
          sx={{
            color: COLOR.secondary,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        />
        <Typography
          sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
        >{`(${reviews} reviews)`}</Typography>
      </Box>
      <ButtonBase
        sx={{
          alignSelf: "start",
          padding: 1,
          border: `1px solid ${COLOR.primary}`,
          borderRadius: 8,
          width: 150,
          margin: "0 8px 8px",
          "&:hover": {
            backgroundColor: COLOR.primary,
            color: COLOR.whiteCream,
          },
          "&:focus": {
            backgroundColor: COLOR.primary,
            color: COLOR.whiteCream,
          },
        }}
      >
        Add to cart
      </ButtonBase>
    </Box>
  );
};

export default GridCard;
