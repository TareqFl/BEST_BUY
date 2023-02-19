import * as React from "react";

import { KeyboardArrowDown, PersonOutlined } from "@mui/icons-material";
import TopBar from "./TopBar";
import Logo from "../../assets/ddd-removebg-preview.png";
import Image from "next/image";
import { COLOR } from "@/styles/theme";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CustomDrawer from "./CustomDrawer";
import SearchBar from "../SearchBar";
import { useRouter } from "next/router";
import { getCookie, hasCookie } from "cookies-next";
import BurgerMenu from "../BurgerMenu";
import { User_data } from "@/context";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  ButtonBase,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import DisplayCart from "./DisplayCart";

export default function NavBar() {
  const { HandleDrawer, cart, setCart } = React.useContext(User_data);

  const router = useRouter();

  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    let stored_Cart = getCookie("cart");
    let fact = stored_Cart ? JSON.parse(stored_Cart) : false;
    if (fact.items) {
      return setCart([...fact.items]);
    } else {
      return setCart([]);
    }

    // eslint-disable-next-line
  }, []);

  if (router.pathname === "/login") {
    return <div></div>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: HandleDrawer ? COLOR.lightPink : "white",
        transition: "all 0.75s",
      }}
    >
      <TopBar />
      <AppBar
        elevation={0}
        position="static"
        color="whiteCream"
        sx={{
          width: "90%",
          backgroundColor: HandleDrawer ? COLOR.lightPink : "white",
          transition: "0.5s",
        }}
      >
        <Toolbar sx={{ gap: { xs: 1, md: 0 } }}>
          <ButtonBase
            onClick={() => router.push("/")}
            id="left section"
            sx={{
              height: { xs: 75, md: 50 },
              width: { xs: 125, md: 100 },
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              img: {
                width: { xs: "265%", sm: "175%", md: "170%" },
                objectFit: "contain",
                position: "absolute",
              },
            }}
          >
            <Image src={Logo} alt="logo" />
          </ButtonBase>

          <Box
            id="middle section for mobile and tablet"
            sx={{
              display: { md: "none" },
              flexGrow: 1,
            }}
          ></Box>

          <Box
            id="middle section"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ButtonBase
              onClick={() => {
                const element = document.getElementById("Deals");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { sm: "0.8rem", md: "1rem" },
                }}
              >
                Deals
              </Typography>
            </ButtonBase>
            <ButtonBase>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { sm: "0.8rem", md: "1rem" },
                }}
              >
                What's New
              </Typography>
            </ButtonBase>
            <ButtonBase>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { sm: "0.8rem", md: "1rem" },
                }}
              >
                Delivery
              </Typography>
            </ButtonBase>
          </Box>

          <SearchBar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ButtonBase
              variant="text"
              sx={{
                color: COLOR.textColor,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              <PersonOutlined sx={{ fontSize: "2rem" }} />
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: { md: "block" },
                }}
              >
                {username}
              </Typography>
            </ButtonBase>
            <DisplayCart />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <BurgerMenu />
          </Box>
        </Toolbar>
      </AppBar>

      <CustomDrawer />
    </Box>
  );
}
