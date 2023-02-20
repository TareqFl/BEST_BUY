import { COLOR } from "@/styles/theme";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { buy_boolean } from "@/actions";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { User_data } from "@/context";
import { removeCookies } from "cookies-next";
const Loader = () => {
  const { setBuyBool, setCart } = React.useContext(User_data);

  const [loader, setLoader] = React.useState(1);

  const router = useRouter();

  React.useEffect(() => {
    const prchase = setTimeout(() => setLoader(0), 2500);

    return () => clearTimeout(prchase);
  }, []);

  React.useEffect(() => {
    const turnOff = setTimeout(() => {
      setBuyBool(false);
      router.push("/");
      removeCookies("cart");
      setCart([]);
    }, 3000);

    return () => clearTimeout(turnOff);
  }, []);

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.whiteCream,
        transition: "1s",
        position: "absolute",
        height: "50vh",
        width: "50vw",
        zIndex: 1,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        flexDirection: "column",
      }}
    >
      {loader === 1 ? (
        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          Awaiting Order...
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          Purchase Complete!
        </Typography>
      )}
      {loader === 1 && <Box className={styles.customLoader}></Box>}
    </Paper>
  );
};

export default Loader;
