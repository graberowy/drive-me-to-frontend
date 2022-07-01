import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import OrderDetails from "./components/OrderDetails";
import { axiosInstance } from "../../../shared/httpHandler/httpHandler";
import { userLogOut } from "../../../shared/auth/auth";
import TimeoutModal from "../../../shared/components/Timeout/TimeoutModal";

const Passenger = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [payAndRateOptions, setPayAndRateOptions] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paid, setPaid] = useState(false);
  const [order, setOrder] = useState({});
  const [value, setValue] = useState(1);
  const userLogin = sessionStorage.getItem("username");
  const [passengerDetails, setPassengerDetails] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [passengerId, setPassengerId] = useState("");
  const fullName = "";
  const mobileNo = "";
  const departure = "";
  const destination = "";
  const carMake = "";
  const driverLanguage = "";

  useEffect(() => {
    getPassengerDetails();
  }, []);

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

  const signOut = () => {
    userLogOut();
    navigate("/log_out");
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

  const getPassengerDetails = async () => {
    const url = `/users/${userLogin}`;
    const { data } = await axiosInstance.get(url);
    if (data) {
      setPassengerDetails(data);
      setPassengerName(data?.passenger?.name);
      setPassengerId(data?.passenger?.id);
    }
  };

  const passengerUpdateData = async (dataForm) => {
    const url = `/passengers/update/${passengerId}`;
    const params = {
      name: dataForm.fullName.length > 0 ? dataForm.fullName : null,
      mobile: dataForm.mobileNo.length > 0 ? dataForm.mobileNo : null,
    };
    const { data } = await axiosInstance.patch(url, params);
    if (data) {
      getPassengerDetails();
      reset();
    }
  };

  const orderTripByPassenger = async (dataForm) => {
    const url = "/trips";
    const params = {
      startAddress: dataForm.departure,
      finishAddress: dataForm.destination,
      passenger: {
        id: passengerDetails.passenger.id,
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
      setPaid(true);
    }
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
              <OrderDetails
                order={order}
                handleSubmit={handleSubmit}
                orderTripByPassenger={orderTripByPassenger}
                orderPlaced={orderPlaced}
                control={control}
                toggleAdvancedOptions={toggleAdvancedOptions}
                advancedOptions={advancedOptions}
                togglePayAndRate={togglePayAndRate}
                payAndRateOptions={payAndRateOptions}
                tripPayAndRate={tripPayAndRate}
                paid={paid}
                setValue={setValue}
                value={value}
              />
            </AccordionDetails>
          </Accordion>
          <Grid align="center">
            <div style={{ paddingBottom: "1rem" }}>
              <ToggleLanguage />
            </div>
            <div>
              <ButtonStyled onClick={signOut} label={t("logout")} />
            </div>
          </Grid>
        </div>
      </div>
      <TimeoutModal />
    </div>
  );
};
export default Passenger;
