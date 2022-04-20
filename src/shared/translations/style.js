import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  toggleButton: {
    "& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected": {
      color: theme.palette.colorLink,
    },
    "& .MuiButtonBase-root.MuiToggleButton-root": {
        border: "none"
    }
  },
}));
