import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ButtonStyled from "../../shared/components/Button/ButtonStyled";
import TextField from "@mui/material/TextField";
import { useStyles } from "./style";

const LogIn = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <div style={{ margin: "30px 30px 30px 30px" }}>
          <Accordion
            expanded={expanded === "Customer"}
            onChange={handleChange("Customer")}
            className={classes.accordion}
          >
            <AccordionSummary
              aria-controls="customerbh-content"
              id="customerbh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                Customer
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="nameLogIn"
                  placeholder={"Full Name"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="mobileLogIn"
                  placeholder={"Mobile"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled
                    label={"Register"}
                    buttonDark
                    customStyle={{ marginRight: "1rem" }}
                  />
                  <ButtonStyled label={"Sign in"} />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "Employee"}
            onChange={handleChange("Employee")}
            className={classes.accordion}
          >
            <AccordionSummary
              aria-controls="employeebh-content"
              id="employeebh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                Employee
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="employeeLogIn"
                  placeholder={"Login"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="employeePasswordLogIn"
                  placeholder={"Password"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled label={"Sign in"} />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "Commercial"}
            onChange={handleChange("Commercial")}
            className={classes.accordion}
          >
            <AccordionSummary
              aria-controls="commercialbh-content"
              id="commercialbh-header"
            >
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                Commercial
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="commercialLogIn"
                  placeholder={"Login"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center" style={{ marginBottom: "1rem" }}>
                <TextField
                  className={classes.input}
                  fullWidth
                  size="small"
                  autoFocus
                  id="commercialPasswordLogIn"
                  placeholder={"Password"}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled label={"Sign in"} />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
