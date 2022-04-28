import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    width: "70% !important",
    "& .MuiInputBase-input": {
      color: theme.palette.colorText,
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.colorLink,
        color: theme.palette.colorLink,
      },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.colorLink,
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #33333a",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: theme.palette.colorLink,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.colorLink,
    },
  },
  accordion: {
    marginBottom: "15px",
    backgroundColor: `${theme.palette.colorBackgroundBody} !important`
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
  },
  box: {
    borderRadius: "10px",
    backgroundColor: "#262626",
    boxShadow: "0 2px 2px 0 #ffffff14",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  nakedButton: {
      "& .MuiButtonBase-root.MuiButton-root": {
        color: theme.palette.colorLink,
        fontSize: "12px"
      },
  },
  select: {
    width: '70%',
    color: 'light',
    '& .MuiSelect-select': {
      color: '#999999',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid #33333a',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: `2px solid ${theme.palette.colorLink}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${theme.palette.colorLink}`,
    },
    "& .MuiSvgIcon-root.MuiSelect-icon": {
        color: theme.palette.colorLink
    },
    "& .MuiFormLabel-root.MuiInputLabel-root": {
        color: "#999999"
    },
    "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
        color: theme.palette.colorLink
    },
    // "& .MuiList-root.MuiMenu-list": {
    //       backgroundColor: `${theme.palette.colorBackgroundBody} !important`,
    //       color: "red"
    // }
  
  },
}));
