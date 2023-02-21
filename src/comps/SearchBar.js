import { COLOR } from "@/styles/theme";
import { Search } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { User_data } from "@/context";
import React from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import { ClickAwayListener } from "@mui/base";
import { setCookie } from "cookies-next";
const SearchBar = () => {
  const router = useRouter();

  const { search, setSearch, allProducts, setQ } = React.useContext(User_data);
  const [clicked, setClicked] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setKeyWord(value);
    let searchedProduct = allProducts?.filter((product) =>
      product.title.toLowerCase().includes(keyWord.toLowerCase())
    );
    let brandsSearch = allProducts?.filter((product) =>
      product.brand.toLowerCase().includes(keyWord.toLowerCase())
    );
    let categorySearch = allProducts?.filter((product) =>
      product.category.toLowerCase().includes(keyWord.toLowerCase())
    );

    let mixed = _.uniq([
      ...searchedProduct,
      ...brandsSearch,
      ...categorySearch,
    ]);
    setSearch(mixed);
  }

  const SearchOutPut = () => {
    return (
      <ClickAwayListener onClickAway={() => setKeyWord("")}>
        <Paper
          elevation={12}
          sx={{
            width: {
              xs: keyWord !== "" ? "225px" : 0,
              sm: keyWord !== "" ? "450px" : 0,
            },
            height: keyWord !== "" ? "300px" : 0,
            backgroundColor: COLOR.whiteCream,
            position: "absolute",
            zIndex: 10,
            top: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "scroll",
            gap: 2,
            padding: keyWord !== "" ? 2 : 0,
            "&::-ebkit-scrollbar": {
              width: "2px",
              backgroundColor: "red",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: COLOR.primary,
              width: "2px",
            },
          }}
        >
          {search?.map((prd, index) => {
            return (
              <ButtonBase
                key={index}
                sx={{
                  height: "150px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: COLOR.charcoalLight,
                }}
                onClick={() => {
                  setQ(prd.id);
                  setCookie("id", { id: prd.id }, { maxAge: 5000 });
                  router.push("/product");
                  // router.push(`/product?id=${prd.id}`);
                  setClicked(false);
                  setKeyWord("");
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                    height: "100%",
                    objectFit: "fill",
                    backgroundColor: "#333",
                    overflow: "hidden",
                    img: {
                      objectFit: "fill",
                      display: "block",
                      height: "100%",
                      width: "100%",
                    },
                  }}
                >
                  <img src={prd.thumbnail} />
                </Box>
                <Box
                  sx={{
                    width: "50%",
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
                    {prd.title}
                  </Typography>
                </Box>
              </ButtonBase>
            );
          })}
        </Paper>
      </ClickAwayListener>
    );
  };

  return (
    <Box
      sx={{
        width: { xs: "275px", sm: "350px", md: "200px", lg: "300px" },
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <SearchOutPut />
      <Box
        sx={{
          width: "auto",
          backgroundColor: COLOR.whiteCream,
          overflow: "hidden",
          display: "flex",
          borderRadius: 4,
        }}
      >
        <IconButton
          size="large"
          onClick={() => {
            setClicked(!clicked);
            setKeyWord("");
          }}
        >
          <Search fontSize="medium" sx={{ color: COLOR.textColor }} />
        </IconButton>
        <InputBase
          placeholder="Search"
          sx={{
            fontSize: "1rem",
            width: {
              xs: clicked ? "125px" : 0,
              sm: clicked ? "300px" : 0,
              md: clicked ? "175px" : 0,
              lg: clicked ? "250px" : 0,
            },
            transition: "0.75s",
          }}
          value={keyWord}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
