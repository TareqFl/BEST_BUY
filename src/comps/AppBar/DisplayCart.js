import {
  Box,
  ButtonBase,
  Stack,
  Paper,
  Badge,
  IconButton,
  Typography,
} from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import { COLOR } from "@/styles/theme";
import { useRouter } from "next/router";
import { ClickAwayListener } from "@mui/base";
import { User_data } from "@/context";
import { getCookie } from "cookies-next";

export default function DisplayCart() {
  const { cart, setCart } = React.useContext(User_data);

  const [openMenu, setMenu] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (!cart) {
      let stored_Cart = getCookie("cart");
      let fact = JSON.parse(stored_Cart);
      if (fact.items) {
        console.log("cookie cart exists");
        setCart([...fact.items]);
      }
    }

    // eslint-disable-next-line
  }, [cart]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (openMenu) {
          setMenu(false);
        }
      }}
    >
      <Box>
        <IconButton
          size="large"
          aria-label={`show new notifications`}
          color="inherit"
          // sx={{
          //   position: "relative",
          // }}
          onClick={() => setMenu(!openMenu)}
        >
          <Badge badgeContent={cart.length} color="error">
            <AiOutlineShoppingCart />
          </Badge>
        </IconButton>
        <Paper
          elevation={12}
          sx={{
            position: "absolute",
            width: openMenu ? "450px" : 0,
            height: openMenu ? "300px" : 0,
            backgroundColor: COLOR.whiteCream,
            top: openMenu ? "60px" : "25px",
            right: "50px",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            padding: openMenu && "32px",
            borderRadius: 75 / 4 + "px",
            zIndex: 10,
            overflow: "hidden",
            transition: "height 0.5s, width 0.25s, padding 0.75s, top 0.75s",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: cart?.length ? "column" : "row",
              justifyContent: !cart?.length && "center",
              alignItems: "center",
              overflowY: "scroll",
              gap: 2,
              "&::-webkit-scrollbar": {
                width: "2px",
                backgroundColor: COLOR.primary,
              },
              "&::-webkit-scrollbar-thumb": {
                width: "2px",
                backgroundColor: COLOR.primary,
              },
            }}
          >
            {cart.length ? (
              cart.map((crt, index) => {
                return (
                  <ButtonBase
                    key={index}
                    onClick={() => router.push("/purchase")}
                  >
                    <Stack display="flex" direction="row">
                      <Box sx={{ width: "50%", objectFit: "cover" }}>
                        <img src={crt.thumbnail} height="100%" width="100%" />
                      </Box>
                      <Box
                        sx={{
                          width: "50%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography>{crt.title}</Typography>
                        <Typography>Price: ${crt.price}</Typography>
                        <Typography>Quantity: {crt.quantity}</Typography>
                      </Box>
                    </Stack>
                  </ButtonBase>
                );
              })
            ) : (
              <Typography color="primary">Your Cart Is Empty</Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </ClickAwayListener>
  );
}
