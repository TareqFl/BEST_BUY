import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, ButtonBase, IconButton, Paper, Typography } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import React from "react";
import { COLOR } from "@/styles/theme";
import { User_data } from "@/context";
import Loader from "./custom/Loader";
import _ from "lodash";
const CategoryButton = ({
  Text,
  Styling,
  disabled,
  filter,
  dynamicHandler,
}) => {
  const { setSortProducts, allProducts } = React.useContext(User_data);

  const [clicked, setClicked] = React.useState(false);

  const category = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const loader = setTimeout(() => {
      if (clicked) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    }, 350);

    return () => clearTimeout(loader);
  }, [clicked]);

  // Sorted List
  function FilteredComponent({ value }) {
    if (value === "category") {
      return category.map((cat, index) => {
        return (
          <ButtonBase
            key={index}
            sx={{ width: "100%" }}
            onClick={() => handleFilteration(cat)}
          >
            {cat}
          </ButtonBase>
        );
      });
    }

    let brands = _.uniq(allProducts?.map((item) => item.brand));
    return brands.map((brnd, index) => {
      return (
        <ButtonBase
          key={index}
          sx={{ width: "100%" }}
          onClick={() => handleFilteration(brnd)}
        >
          {brnd}
        </ButtonBase>
      );
    });
  }
  //List Item Click
  function handleFilteration(value) {
    const filteredCategories = allProducts.filter(
      (prod) => prod.category === value
    );
    const filteredBrands = allProducts.filter((prod) => prod.brand === value);
    filter === "category"
      ? setSortProducts(filteredCategories)
      : setSortProducts(filteredBrands);
  }

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (clicked) {
          setClicked(false);
        }
      }}
    >
      <Box
        sx={
          Styling
            ? {
                ...Styling,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
              }
            : {
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                backgroundColor: COLOR.grey,
                position: "relative",
              }
        }
      >
        <Paper
          sx={{
            borderRadius: 4,
            position: "absolute",
            backgroundColor: COLOR.whiteCream,
            width: { xs: clicked ? "100px" : 0, sm: clicked ? "200px" : 0 },
            height: clicked ? "150px" : 0,
            top: { xs: 0, sm: "40px" },
            left: { xs: "120px", sm: "65px" },
            zIndex: 2,
            display: clicked ? "flex" : "none",
            flexDirection: "column",
            justifyContent: loading ? "center" : "start",
            alignItems: "center",
            overflow: "auto",
            gap: 2,
            padding: "8px",
          }}
        >
          {loading ? <Loader /> : <FilteredComponent value={filter} />}
        </Paper>

        <Typography
          sx={{
            ml: 1,
            fontWeight: "bold",
            // fontSize: { xs: "0.7rem", sm: "1rem" },
          }}
        >
          {Text}
        </Typography>
        <IconButton
          onClick={() => {
            if (!disabled) {
              if (filter === "all") {
                return setSortProducts(allProducts);
              }
              return setClicked(!clicked);
            }
            return;
          }}
          sx={{
            height: { xs: 28, sm: 38 },
            width: { xs: 28, sm: 38 },
          }}
        >
          <KeyboardArrowRight
            sx={{
              // fontSize: { xs: "1.3rem", sm: "1.5rem" },
              transform: !disabled ? clicked && "rotate(90deg)" : "none",
              transition: "0.35s",
            }}
          />
        </IconButton>
      </Box>
    </ClickAwayListener>
  );
};

export default CategoryButton;
