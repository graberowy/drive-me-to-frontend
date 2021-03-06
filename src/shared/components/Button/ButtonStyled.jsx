import React from "react";
import { useStyles } from './style';
import Button from '@mui/material/Button';

const ButtonStyled = ({label, customStyle, onClick, type, buttonDark, startIcon, endIcon}) => {
    const classes = useStyles();
    const classStyle = buttonDark ? classes.buttonDark : classes.buttonStandard;
    return (
      <Button variant="contained" type={type} onClick={onClick} className={classStyle} style={customStyle} startIcon={startIcon} endIcon={endIcon}>
        { label }
      </Button>
    );
  };
  
  export default ButtonStyled;