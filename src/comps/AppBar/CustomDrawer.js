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
} from "@mui/material";
import { COLOR } from "@/styles/theme";
import {
  PersonOutlined,
  KeyboardArrowLeft,
  ExpandMore,
} from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { User_data } from "@/context";
import { useRouter } from "next/router";
import _ from "lodash";
import Filtering from "../Filtering";
const CustomDrawer = () => {
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
  const router = useRouter();

  // hadnle cart click if its empty displays message
  function handleCart() {
    if (!cart.length) {
      return setInfo(true);
    }
    return router.push("/purchase");
  }

  const Info = () => {
    React.useEffect(() => {
      const time = setTimeout(() => setInfo(false), 1000);
      return () => clearTimeout(time);
    }, []);

    return (
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          height: info ? "50px" : 0,
          width: "50px",
          right: "50px",
          overflow: "hidden",
          backgroundColor: COLOR.whiteCream,
          borderRadius: "12px",
          transition: "all 0.75s",
        }}
      >
        <Typography fontSize="0.85rem">Empty Cart</Typography>
      </Paper>
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
      <IconButton
        onClick={() => setHandleDrawer(false)}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          right: 10,
          backgroundColor: COLOR.whiteCream,
          transform: HandleDrawer ? "rotate(0deg)" : "rotate(180deg)",
          transition: "1.25s",
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
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
          <IconButton
            size="large"
            onClick={handleCart}
            sx={{ position: "relative" }}
          >
            <Badge badgeContent={cart.length} color="error">
              <AiOutlineShoppingCart
                style={{ fontSize: "2.1875rem", color: "white" }}
              />
            </Badge>
            <Info />
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
