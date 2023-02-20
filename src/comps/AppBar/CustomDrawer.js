import React from "react";
import {
  Box,
  Paper,
  IconButton,
  Badge,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  ButtonBase,
} from "@mui/material";
import { COLOR } from "@/styles/theme";
import {
  PersonOutlined,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  ExpandMore,
} from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { User_data } from "@/context";
import { useRouter } from "next/router";
import _ from "lodash";
const CustomDrawer = () => {
  const {
    user,
    HandleDrawer,
    cart,
    setHandleDrawer,
    allProducts,
    setSortProducts,
  } = React.useContext(User_data);
  const router = useRouter();

  const Filtering = ({ filter, value }) => {
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
  };

  return (
    <Paper
      id="drawer"
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        width: "50%",
        height: "100vh",
        borderRadius: 0,
        position: "fixed",
        zIndex: 15,
        left: HandleDrawer ? 0 : -450,
        top: 0,
        bottom: 0,
        backgroundColor: COLOR.primary,
        overflowY: "auto",
        transition: "0.5s",
      }}
      elevation={4}
    >
      {/* <IconButton
        onClick={() => setHandleDrawer(false)}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          right: 10,
          backgroundColor: COLOR.whiteCream,
          transform: HandleDrawer ? "rotate(180deg)" : "rotate(0deg)",
          transition: "1.25s",
        }}
      >
        <KeyboardArrowLeft />
      </IconButton> */}
      <Box
        sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
            mt: 2,
            ml: 2,
          }}
        >
          <IconButton size="large">
            <PersonOutlined fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <IconButton size="large" onClick={() => router.push("/purchase")}>
            <Badge badgeContent={cart.length} color="error">
              <AiOutlineShoppingCart
                style={{ fontSize: "2.1875rem", color: "white" }}
              />
            </Badge>
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="whiteCream"
          sx={{ fontWeight: "bold", width: "90%" }}
        >
          Deals
        </Button>
        <Button
          variant="contained"
          color="whiteCream"
          sx={{ fontWeight: "bold", width: "90%" }}
        >
          What's New
        </Button>
        <Button
          variant="contained"
          color="whiteCream"
          sx={{ fontWeight: "bold", width: "90%" }}
        >
          Delivery
        </Button>

        <Button
          variant="contained"
          color="whiteCream"
          sx={{ fontWeight: "bold", width: "90%" }}
          onClick={() => setSortProducts([...allProducts])}
        >
          ALL profucts
        </Button>
        <Filtering filter="Categories" value="category" />
        <Filtering filter="Brands" value="brand" />
      </Box>
    </Paper>
  );
};

export default CustomDrawer;
