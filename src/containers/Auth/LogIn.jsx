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
import { customerAuth, newCustomerAuth } from "../../shared/auth/auth";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const LogIn = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const fullName = "";
  const mobileNo = "";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const customerLogIn = async () => {
    const props = getValues();
    console.log(props.fullName, props.mobileNo);
    const autenticated = await customerAuth(props.mobileNo);
    if (autenticated) {
      navigate("/customer");
    }
  };

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName,
      mobileNo,
    },
  });

  const onSubmitNewCustomer = async () => {
    const props = getValues();
    const createAndAutenticated = await newCustomerAuth(
      props.fullName,
      props.mobileNo
    );
    if (createAndAutenticated) {
      navigate("/customer");
    }
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
              <form>
                <Typography align="center" style={{ marginBottom: "1rem" }}>
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.input}
                        fullWidth
                        size="small"
                        autoFocus
                        id="nameLogIn"
                        placeholder={t("fullName")}
                        autoComplete="off"
                        variant="outlined"
                        required={true}
                        inputProps={{ maxLength: 30 }}
                        {...field}
                      />
                    )}
                  />
                </Typography>
                <Typography align="center" style={{ marginBottom: "1rem" }}>
                  <Controller
                    name="mobileNo"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        className={classes.input}
                        fullWidth
                        autoComplete="off"
                        size="small"
                        autoFocus
                        id="mobileLogIn"
                        placeholder={t("mobile")}
                        variant="outlined"
                        inputProps={{ maxLength: 9 }}
                        required
                        {...field}
                      />
                    )}
                  />
                </Typography>

                <Typography align="center" style={{ display: "inline-flex" }}>
                  <ButtonStyled
                    label={t("register")}
                    //   type="submit"
                    buttonDark
                    customStyle={{ marginRight: "1rem" }}
                    onClick={() => onSubmitNewCustomer()}
                  />
                  <ButtonStyled
                    //    type="submit"
                    label={t("signin")}
                    onClick={() => customerLogIn()}
                  />
                </Typography>
              </form>
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
              <Typography align="center" style={{ display: "inline-flex" }}>
                <ButtonStyled label={t("signin")} />
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
              <Typography align="center" style={{ display: "inline-flex" }}>
                <ButtonStyled label={t("signin")} />
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
