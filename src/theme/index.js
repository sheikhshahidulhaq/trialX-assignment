import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
        input: {
          padding: "8px 10px",
        },
      },
    },
    MuiPickersOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "0 8px",
        },
        sectionsContainer: {
          padding: "8px 0",
        },
      },
    },

    MuiPickersTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
            transform: "translate(14px, 8px) scale(1)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#c2e7ff",
          "&:hover": { backgroundColor: "#c2e7ff" },

          "&.Mui-focused": { backgroundColor: "#c2e7ff" },
        },
        input: {
          padding: "8px 10px",
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 34,
          height: 18,
          padding: 0,
        },

        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",

          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",

            "& + .MuiSwitch-track": {
              opacity: 1,
              border: 0,
            },
          },
        },

        thumb: {
          boxSizing: "border-box",
          width: 14,
          height: 14,
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        },

        track: {
          borderRadius: 18 / 2,
          backgroundColor: "#E5E5EA",
          opacity: 1,
        },
      },
    },
  },
});

export default theme;
