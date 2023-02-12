import { Box, Button, Paper } from "@mui/material";
import React from "react";
import { setCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/router";
const Login = () => {
  const [form, setName] = React.useState({ username: "", password: "" });
  const { username, password } = form;

  const router = useRouter();

  const handleSubmit = async () => {
    const api = "192.168.1.16";
    const api2 = "192.168.151.18";
    const api3 = "192.168.1.32";
    const response = await fetch(`http://${api}:3000/api/login`, {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await response.json();
    const { value } = data;
    if (value) {
      await setCookie(
        "token",
        { token: data.token, username: data.username },
        { maxAge: 604800 }
      );
      return router.push("/");
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          height: "30%",
          width: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 8,
          p: "2.5%",
        }}
      >
        <input
          value={username}
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setName((prevValue) => {
              return {
                ...prevValue,
                username: e.target.value,
              };
            })
          }
          style={{ width: "100%" }}
        />
        <input
          value={password}
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) =>
            setName((prevValue) => {
              return {
                ...prevValue,
                password: e.target.value,
              };
            })
          }
          style={{ width: "100%" }}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{ width: "55%" }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;

export async function getServerSideProps({ req, res }) {
  try {
    const foundCookie = hasCookie("token", { req, res });
    if (foundCookie) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
