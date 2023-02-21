import { Box, Typography } from "@mui/material";
import React from "react";
import LeftSide from "@/comps/Product/LeftSide";
import RightSide from "@/comps/Product/RightSide";

const Product = ({ Product }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = Product;
  return (
    <Box
      id="container"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "0 5%",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Box
        id="BreadCrumb"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "16px 0",
        }}
      >
        <Typography>BreadCrumbs</Typography>
        <Typography>BreadCrumbs</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1, sm: 4, md: 8 },
        }}
      >
        <LeftSide images={images} Product={Product} />
        {/* RIGHT SIDE */}
        <RightSide
          title={title}
          description={description}
          price={price}
          rating={rating}
          stock={stock}
          Product={Product}
        />
      </Box>
    </Box>
  );
};

export default Product;

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:3000/api/singleProduct`, {
    method: "POST",
    body: JSON.stringify({ id: context.query.id }),
  });
  const data = await response.json();

  return {
    props: {
      Product: data,
    },
  };
}
