import React from "react";
import { Box, Typography, Button, Slide, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { removeCookies, setCookie } from "cookies-next";
import { COLOR, PADDING, FONTS } from "@/styles/theme";
import girl from "../assets/girl1nobg.png";
import Image from "next/image";
import CategoryButton from "@/comps/CategoryButton";
import CustomCard from "@/comps/CustomCard";
import Footer from "@/comps/Footer";
import { User_data } from "@/context";
function Home({ data }) {
  const router = useRouter();

  const { HandleDrawer, setAllProducts, setSortProducts } =
    React.useContext(User_data);

  const [zoom, setZoom] = React.useState(false);

  React.useEffect(() => {
    setZoom(true);

    return () => setZoom(false);
  }, []);

  //INITIAL : 36
  const [loadMore, setLoadMore] = React.useState(36);
  function handleMore() {
    if (loadMore < 100) {
      setLoadMore((prev) => {
        return prev + 6;
      });
    }
  }

  const { sortProducts } = React.useContext(User_data);

  React.useEffect(() => {
    if (data) {
      setAllProducts(data);
      setSortProducts(data);
    }

    // eslint-disable-next-line
  }, [data]);

  return (
    <Box
      sx={{
        backgroundColor: HandleDrawer ? COLOR.lightPink : "white",
        transition: "0.5s",
        paddingTop: { xs: "25%", sm: "5%", md: 0 },
      }}
    >
      {/* <NavBar /> */}
      {/* Body container */}
      <Box
        id="body container"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: `0 ${PADDING.default}`,
          gap: { xs: 4, sm: 8 },
        }}
      >
        <Box
          id="purple container"
          sx={{
            backgroundColor: COLOR.lightPink,
            width: "100%",
            height: { xs: 200, sm: 275, lg: 300, xl: 400 },
            display: "flex",
            overflow: "hidden",
          }}
        >
          <Slide in={zoom} timeout={1000} direction="up" unmountOnExit>
            <Box
              id="left Side"
              flex={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                padding: "8%",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: COLOR.primary,
                  fontWeight: "bold",
                  fontSize: { ...FONTS.banner },
                }}
              >
                Grab Up to 50% Off On Selected Headphones
              </Typography>
              <Button variant="contained">Buy Now</Button>
            </Box>
          </Slide>
          <Slide in={zoom} timeout={1000} direction="up" unmountOnExit>
            <Box
              id="right side"
              flex={1}
              sx={{
                img: {
                  height: { xs: "90%", sm: "100%" },
                  width: { xs: "150%", sm: "75%" },
                  position: "relative",
                  bottom: { xs: -22, sm: 0 },
                  left: { xs: -55, sm: 0 },
                },
              }}
            >
              <Image src={girl} alt="girl" />
            </Box>
          </Slide>
        </Box>
        {/* End of Purple Container */}
        {/* <Fade in={zoom} timeout={1000}> */}
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <CategoryButton
            Text="Sort By"
            Styling={{
              backgroundColor: "white",
              border: "1px solid black",
            }}
            disabled={"true"}
          />
          <CategoryButton Text="Categories" filter={"category"} />
          <CategoryButton Text="Brands" filter={"brands"} />
          <CategoryButton Text="All Products" filter={"all"} />
          <Box sx={{ flexGrow: 1 }}></Box>
        </Box>
        {/* </Fade> */}
        {/* End Of Categories */}

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            alignSelf: "start",
          }}
        >
          Best Deals For You!
        </Typography>

        <div id="Deals">
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
              gap: { xs: 2, md: 4 },
              overflow: "hidden",
            }}
          >
            {sortProducts?.map((product, index) => {
              return (
                index < loadMore && (
                  <CustomCard key={index} value={zoom} Product={product} />
                )
              );
            })}
          </Stack>
        </div>
        <Button
          variant="contained"
          sx={{ borderRadius: 24 }}
          onClick={handleMore}
          disabled={loadMore > 100 && "true"}
        >
          load more
        </Button>
        {/* End Of Products Grid */}

        {/* Footer */}
        <Footer />
      </Box>

      {/* End of Body Container */}
    </Box>
  );
}

export default Home;

export async function getServerSideProps({ req, res }) {
  try {
    // const cookieFound = hasCookie("token", { req, res });
    // if (!cookieFound) {
    //   return {
    //     redirect: {
    //       destination: "/login",
    //     },
    //   };
    // }https://demo-best-buy.netlify.app/

    const getProducts = await fetch(
      "https://demo-best-buy.netlify.app/api/product"
    );
    const data = await getProducts.json();

    // const getCategories = await fetch("http://localhost:3000/api/category");
    // const categ = await getCategories.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { err: error.message },
    };
  }
}
