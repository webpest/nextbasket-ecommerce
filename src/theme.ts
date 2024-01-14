"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  components: {},
});

export default theme;
