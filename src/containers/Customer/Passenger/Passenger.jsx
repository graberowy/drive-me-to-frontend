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
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { axiosInstance } from "../../../shared/httpHandler/httpHandler";

const Passenger = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [payAndRateOptions, setPayAndRateOptions] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [order, setOrder] = useState({});
  const [value, setValue] = useState(2);
  const passengerName = sessionStorage.getItem("passenger-name");
  const passengerId = sessionStorage.getItem("passenger-id");
  const fullName = "";
  const mobileNo = "";
  const departure = "";
  const destination = "";
  const carMake = "";
  const driverLanguage = "";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleAdvancedOptions = () => {
    setAdvancedOptions(!advancedOptions);
    reset();
  };

  const togglePayAndRate = () => {
    setPayAndRateOptions(!payAndRateOptions);
  };

  const {
    control,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName,
      mobileNo,
      departure,
      destination,
      carMake,
      driverLanguage,
    },
  });

  const passengerUpdateData = async (dataForm) => {
    const url = `/passengers/update/${passengerId}`;
    const params = {
      name: dataForm.fullName.length > 0 ? dataForm.fullName : null,
      mobile: dataForm.mobileNo.length > 0 ? dataForm.mobileNo : null,
    };
    const { data } = await axiosInstance.patch(url, params);
    if (data) {
      sessionStorage.setItem("passenger-name", data.name);
      sessionStorage.setItem("passenger-mobile", data.mobile);
    }
  };

  const orderTripByPassenger = async (dataForm) => {
    const url = "/trips";
    const params = {
      startAddress: dataForm.departure,
      finishAddress: dataForm.destination,
      passenger: {
        id: passengerId,
      },
      preferCarMake: dataForm.carMake.length > 0 ? dataForm.carMake : null,
      preferLanguage:
        dataForm.driverLanguage.length > 0 ? dataForm.driverLanguage : null,
    };
    const { data } = await axiosInstance.post(url, params);
    if (data) {
      console.log(data);
      setOrderPlaced(true);
      setOrder(data);
    }
    reset();
  };

  const tripPayAndRate = async () => {
    const url = `/trips/${order?.id}/paid/true/rating/${value}`;
    const { data } = await axiosInstance.put(url);
    if (data) {
      console.log(data);
    }
  };

  const OrderSummary = ({ text }) => {
    return (
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          flexShrink: 0,
          textAlign: "left",
          color: "#FFF",
          fontSize: "14px",
        }}
      >
        {text}
      </Typography>
    );
  };

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
            {t("passengerTitle", { name: `${passengerName}` })}
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
              <form onSubmit={handleSubmit(passengerUpdateData)}>
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
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Typography align="center">
                  <ButtonStyled type="submit" label={t("update")} />
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
              <div
                style={{
                  display: orderPlaced ? "none" : null,
                }}
              >
                <form onSubmit={handleSubmit(orderTripByPassenger)}>
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
                          inputProps={{ maxLength: 60 }}
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
                          inputProps={{ maxLength: 60 }}
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
                    <Button
                      variant="text"
                      endIcon={<ArrowDownwardIcon />}
                      onClick={toggleAdvancedOptions}
                    >
                      {t("advancedOptions")}
                    </Button>
                  </Grid>
                  <Grid
                    align="center"
                    style={{
                      marginBottom: "1rem",
                      display: advancedOptions ? "inline-flex" : "none",
                      width: "100%",
                    }}
                  >
                    <Controller
                      name="carMake"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          className={classes.select}
                          size="small"
                          variant="standard"
                          select
                          label={t("selectCar")}
                          style={{ marginRight: "15px" }}
                          {...field}
                        >
                          <MenuItem key={0} value={"mercedes".toUpperCase()}>
                            {"mercedes".toUpperCase()}
                          </MenuItem>
                          <MenuItem key={1} value={"bmw".toUpperCase()}>
                            {"bmw".toUpperCase()}
                          </MenuItem>
                          <MenuItem key={2} value={"subaru".toUpperCase()}>
                            {"subaru".toUpperCase()}
                          </MenuItem>
                        </TextField>
                      )}
                    />
                    <Controller
                      name="driverLanguage"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          className={classes.select}
                          size="small"
                          variant="standard"
                          select
                          label={t("language")}
                          {...field}
                        >
                          <MenuItem key={0} value={"polish".toUpperCase()}>
                            {"polish".toUpperCase()}
                          </MenuItem>
                          <MenuItem key={1} value={"english".toUpperCase()}>
                            {"english".toUpperCase()}
                          </MenuItem>
                          <MenuItem key={2} value={"german".toUpperCase()}>
                            {"german".toUpperCase()}
                          </MenuItem>
                          <MenuItem key={3} value={"russian".toUpperCase()}>
                            {"russian".toUpperCase()}
                          </MenuItem>
                        </TextField>
                      )}
                    />
                  </Grid>
                  <Grid align="center">
                    <ButtonStyled
                      type="submit"
                      label={t("order")}
                      endIcon={<SendIcon />}
                    />
                  </Grid>
                </form>
              </div>
              <div
                style={{
                  display: !orderPlaced ? "none" : null,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    width: "100%",
                    flexShrink: 0,
                    textAlign: "center",
                    color: "#0e7500",
                    marginBottom: "1rem",
                  }}
                >
                  {t("orderPlacedSuccessfully", { id: `${order?.id}` })}
                </Typography>
                <OrderSummary
                  text={t("orderSummaryDeparture", {
                    from: `${order?.fullStartAddress}`,
                  })}
                />
                <OrderSummary
                  text={t("orderSummaryDestination", {
                    to: `${order?.fullFinishAddress}`,
                  })}
                />
                <OrderSummary
                  text={t("orderSummaryDistance", {
                    int: `${order?.distance}`,
                  })}
                />
                <OrderSummary
                  text={t("orderSummaryPrice", { double: `${order?.price}` })}
                />
                <OrderSummary
                  text={t("orderSummaryDriver", {
                    name: `${order?.driver?.name}`,
                  })}
                />
                <Grid
                  className={classes.nakedButton}
                  align="center"
                  style={{ marginBottom: "1rem" }}
                >
                  <Button
                    variant="text"
                    endIcon={<ArrowDownwardIcon />}
                    onClick={togglePayAndRate}
                  >
                    {t("payAndRate")}
                  </Button>
                </Grid>
                <Grid
                  align="center"
                  style={{
                    marginBottom: "1rem",
                    display: payAndRateOptions ? null : "none",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "inline-flex" }}>
                    <div>
                      <Typography
                        component="legend"
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          color: "#b01fe0",
                        }}
                      >
                        {t("tripRate")}
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>

                    <div style={{ marginLeft: "1rem" }}>
                      <ButtonStyled
                        onClick={tripPayAndRate}
                        label={t("payAndRateButton")}
                        endIcon={<SendIcon />}
                      />
                    </div>
                  </div>
                </Grid>
              </div>
            </AccordionDetails>
          </Accordion>
          <Grid align="center">
            <ToggleLanguage />
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Passenger;
