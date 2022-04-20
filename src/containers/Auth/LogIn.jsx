import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ButtonStyled from "../../shared/components/Button/ButtonStyled";
import TextField from "@mui/material/TextField";
import ToggleLanguage from "../../shared/translations/LanguageChange";
import { useStyles } from "./style";
import { useTranslation } from "react-i18next";

const LogIn = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

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
                {t("customer")}
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
                  placeholder={t("fullName")}
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
                  placeholder={t("mobile")}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled
                    label={t("register")}
                    buttonDark
                    customStyle={{ marginRight: "1rem" }}
                  />
                  <ButtonStyled label={t("signin")} />
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
                {t("employee")}
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
                  placeholder={t("login")}
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
                  placeholder={t("password")}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled label={t("signin")} />
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
                {t("commercialUser")}
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
                  placeholder={t("login")}
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
                  placeholder={t("password")}
                  autoComplete="off"
                  variant="outlined"
                />
              </Typography>
              <Typography align="center">
                <div style={{ display: "inline-flex" }}>
                  <ButtonStyled label={t("signin")} />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Typography align="center">
            <ToggleLanguage />
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
