import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Zoom,
  Slide,
  Fade,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { removeCookies, hasCookie } from "cookies-next";
import NavBar from "../comps/AppBar/NavBar";
import { useSelector } from "react-redux";
import { COLOR, PADDING, FONTS } from "@/styles/theme";
import girl from "../assets/girl1nobg.png";
import Image from "next/image";
import CategoryButton from "@/comps/CategoryButton";
import GridCard from "@/comps/GridCard";
import CustomCard from "@/comps/CustomCard";
import Footer from "@/comps/Footer";
function Home({ data, categories, brands, ratings }) {
  const router = useRouter();

  const { HandleDrawer } = useSelector((state) => state);

  const handleClick = () => {
    removeCookies("token");
    router.reload();
  };

  const [zoom, setZoom] = React.useState(false);

  React.useEffect(() => {
    setZoom(true);

    return () => setZoom(false);
  }, []);

  //INITIAL : 24
  const [loadMore, setLoadMore] = React.useState(6);
  function handleMore() {
    if (loadMore < 100) {
      setLoadMore((prev) => {
        return prev + 6;
      });
    }
  }
  return (
    <Box
      sx={{
        backgroundColor: HandleDrawer ? COLOR.lightPink : "white",
        transition: "0.5s",
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
          <CategoryButton Text="Brand" />
          <CategoryButton Text="Price" />
          <CategoryButton Text="Rating" />
          <CategoryButton Text="Deals" />
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
          Headphones For You!
        </Typography>

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
          {data?.map((product, index) => {
            return (
              index < loadMore && (
                // <GridCard key={index} value={zoom} Product={product} />
                <CustomCard key={index} value={zoom} Product={product} />
              )
            );
          })}
        </Stack>
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
    const cookieFound = hasCookie("token", { req, res });
    if (!cookieFound) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    }
    const getProducts = await fetch("http://localhost:3000/api/product");
    const data = await getProducts.json();

    const getCategories = await fetch("http://localhost:3000/api/category");
    const categ = await getCategories.json();

    const categories = categ.map((c) => c.categories);
    const brands = data.map((d) => d.brand);
    const ratings = data.map((d) => d.rating);
    return {
      props: { data, categories, brands, ratings },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
