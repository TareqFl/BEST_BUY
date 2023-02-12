import { COLOR } from "@/styles/theme";
import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

const SearchBar = ({ onChange, value }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <Box
      sx={{
        width: { xs: "275px", sm: "350px", md: "200px", lg: "275px" },
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: "auto",
          backgroundColor: COLOR.whiteCream,
          overflow: "hidden",
          display: "flex",
          borderRadius: 4,
        }}
      >
        <IconButton size="large" onClick={() => setClicked(!clicked)}>
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
          value={value}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
