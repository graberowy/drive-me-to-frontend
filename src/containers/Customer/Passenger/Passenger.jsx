import React, { useState } from "react";
import { useStyles } from "./style";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ButtonStyled from "../../../shared/components/Button/ButtonStyled";
import TextField from "@mui/material/TextField";
import ToggleLanguage from "../../../shared/translations/LanguageChange";
import { Controller, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';

const Passenger = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const passengerName = sessionStorage.getItem("passenger-name");
  const fullName = "";
  const mobileNo = "";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <div style={{ padding: "0 30px 0 30px" }}>
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              flexShrink: 0,
              textAlign: "center",
              color: "#FFF",
            }}
          >
            Welcome {passengerName}, were we going today ?
          </Typography>
        </div>

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
                {t("updateYourDetails")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <Grid align="center" style={{ marginBottom: "1rem" }}>
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
                </Grid>
                <Grid align="center" style={{ marginBottom: "1rem" }}>
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
                </Grid>

                <Typography align="center">
                  <ButtonStyled
                    //    type="submit"
                    label={t("update")}
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
                {t("orderATransport")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                align="center"
                style={{
                  marginBottom: "1rem",
                  display: "inline-flex",
                  width: "100%",
                }}
              >
                <Controller
                  name="departure"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className={classes.input}
                      fullWidth
                      autoComplete="off"
                      size="small"
                      autoFocus
                      id="departureAddress"
                      placeholder={t("departureAddress")}
                      variant="outlined"
                      inputProps={{ maxLength: 9 }}
                      required
                      style={{ marginRight: "15px" }}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="destination"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className={classes.input}
                      fullWidth
                      autoComplete="off"
                      size="small"
                      autoFocus
                      id="destinationAddress"
                      placeholder={t("destinationAddress")}
                      variant="outlined"
                      inputProps={{ maxLength: 9 }}
                      required
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid
                className={classes.nakedButton}
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                <Button variant="text" endIcon={<ArrowDownwardIcon />}>
                  {t("advancedOptions")}
                </Button>
              </Grid>
              <Grid
                align="center"
                style={{
                  marginBottom: "1rem",
                  display: "inline-flex",
                  width: "100%",
                }}
              >
                <Controller
                  name={"carMake"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className={classes.select}
                      size="small"
                      variant="standard"
                      select
                      //   value={cellPath}
                      label={"select car"}
                      style={{ marginRight: "15px" }}
                      {...field}
                    >
                      <MenuItem key={"allow"} value={1}>
                        {"allow".toUpperCase()}
                      </MenuItem>
                      <MenuItem key={"block"} value={0}>
                        {"block".toUpperCase()}
                      </MenuItem>
                    </TextField>
                  )}
                />
                <Controller
                  name={"driverLanguage"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className={classes.select}
                      size="small"
                      variant="standard"
                      select
                      //   value={cellPath}
                      label={"select car"}
                      {...field}
                    >
                      <MenuItem key={"allow"} value={1}>
                        {"allow".toUpperCase()}
                      </MenuItem>
                      <MenuItem key={"block"} value={0}>
                        {"block".toUpperCase()}
                      </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid align="center">
                <ButtonStyled label={t("order")} endIcon={<SendIcon />} />
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion
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
            </Accordion> */}
          <Grid align="center">
            <ToggleLanguage />
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Passenger;
