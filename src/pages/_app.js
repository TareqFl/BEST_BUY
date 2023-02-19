// import '@/styles/globals.css'
import "@fontsource/ubuntu";
import "@fontsource/roboto-mono";
import "@/styles/styles.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store, wrapper } from "../reducer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBarComponents from "@/comps/AppBar/AppBarComponents";
import Context from "@/context";
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#023c29",
    },
    secondary: {
      main: "#1b961d",
    },
    whiteCream: {
      main: "#f6f6f6",
    },
    textColor: {
      main: "#333",
    },
    lightPink: {
      main: "#fcf0e4",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "Roboto", "sans-serif"].join(","),
  },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Context>
        <ThemeProvider theme={customTheme}>
          <AppBarComponents>
            <Component {...pageProps} />
          </AppBarComponents>
        </ThemeProvider>
      </Context>
    </Provider>
  );
}

export default wrapper.withRedux(App);
