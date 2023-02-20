import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { User_data } from "@/context";
import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { COLOR } from "@/styles/theme";

export default function Filtering({ filter, value }) {
  const {
    user,
    HandleDrawer,
    cart,
    setHandleDrawer,
    allProducts,
    setSortProducts,
    info,
    setInfo,
  } = React.useContext(User_data);

  const [options, setOptions] = React.useState([]);
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
  function handleFilter(v) {
    if (v === "category") {
      return setOptions([...category]);
    } else if (v === "brand") {
      let brands = _.uniq(allProducts.map((prod) => prod.brand));
      setOptions([...brands]);
    }
  }

  function handleClick(v) {
    const filteredCategories = allProducts?.filter(
      (prod) => prod.category === v
    );

    const filteredBrands = allProducts.filter((prod) => prod.brand === v);

    value === "category"
      ? setSortProducts(filteredCategories)
      : setSortProducts(filteredBrands);
  }

  return (
    <Accordion
      sx={{
        backgroundColor: COLOR.whiteCream,
        color: COLOR.textColor,
        svg: { color: COLOR.textColor },
        width: "90%",
        borderRadius: "4px",
      }}
    >
      <AccordionSummary
        onClick={() => handleFilter(value)}
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          fontWeight="bold"
          sx={{ textTransform: "upperCase", textAlign: "center" }}
        >
          {filter}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          maxHeight: "300px",
          alignItems: "center",
          gap: 2,
          backgroundColor: COLOR.primary,
        }}
      >
        {options?.map((optn, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              color="whiteCream"
              onClick={() => handleClick(optn)}
              fullWidth
            >
              {optn}
            </Button>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}
