import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#C3A082",
      hover: "rgba(195,160,130,0.53)",
    },
    custom: {
      white: "#ffffff",
      brown: "#C3A082",
      black: "#292929",
      grey: "rgba(243,243,243,0.55)",
      mediumGrey: "#999999",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "-moz-initial",
  },
  values: {
    xl: 1536,
    lg: 1200,
    md: 900,
    sm: 600,
    xs: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#C3A082",
          textTransform: "none",
          transition: 0.3,
          "&:hover": {
            backgroundColor: "rgba(195,160,130,0.53)",
          },
          "@media (min-width:0px)": {
            fontSize: "15px",
          },
          "@media (min-width:600px)": {
            fontSize: "20px",
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          ".MuiBadge-badge": {
            backgroundColor: "#999999",
            color: "#292929",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#999999",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#999999",
            },
          },
        },
      },
    },
  },
});
