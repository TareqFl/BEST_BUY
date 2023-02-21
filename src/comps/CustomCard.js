import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Slide } from "@mui/material";
import Link from "next/link";
import { COLOR } from "@/styles/theme";
import { User_data } from "@/context";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ Product, value }) {
  const { HandleDrawer, setQ, q } = React.useContext(User_data);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const router = useRouter();

  const { id, title, description, price, discountPercentage, thumbnail } =
    Product;

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: HandleDrawer ? COLOR.lightPink : COLOR.whiteCream,
        width: { xs: 175, md: 275 },
        border: `1px solid ${COLOR.grey}`,
        height: expanded ? "auto" : 350,
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& .MuiTypography-h5": { fontSize: { xs: "1rem" }, fontWeight: "bold" },
        "& .MuiTypography-body1": {
          fontSize: "0.9rem",
        },
        img: { height: "200px", width: "100%", objectFit: "fill" },
      }}
    >
      <Slide in={value} timeout={1000} direction="up" unmountOnExit>
        {/* <Link
          href={{
            pathname: "/product",
            query: {
              id,
            },
          }}
        >
          <CardMedia component="img" image={thumbnail} alt={title} />
        </Link> */}
        <CardMedia
          component="img"
          image={thumbnail}
          alt={title}
          onClick={() => {
            setCookie("id", { id }, { maxAge: 5000 });
            setQ(id);
            router.push("/product");
          }}
        />
      </Slide>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {/* <Add color={COLOR.primary} /> */}
            <Typography sx={{ fontWeight: "bold", color: COLOR.red }}>
              ${price}
            </Typography>
          </IconButton>
        }
        title={title}
        subheader={`DEAL %${discountPercentage}`}
      />

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
