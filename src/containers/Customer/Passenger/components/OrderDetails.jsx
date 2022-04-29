import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../style";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { Controller } from "react-hook-form";
import ButtonStyled from "../../../../shared/components/Button/ButtonStyled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const OrderDetails = ({
  order,
  handleSubmit,
  orderTripByPassenger,
  orderPlaced,
  control,
  toggleAdvancedOptions,
  advancedOptions,
  togglePayAndRate,
  payAndRateOptions,
  tripPayAndRate,
  paid,
  setValue,
  value,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

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
    <>
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
                    {t("polish").toUpperCase()}
                  </MenuItem>
                  <MenuItem key={1} value={"english".toUpperCase()}>
                    {t("english").toUpperCase()}
                  </MenuItem>
                  <MenuItem key={2} value={"german".toUpperCase()}>
                    {t("german").toUpperCase()}
                  </MenuItem>
                  <MenuItem key={3} value={"russian".toUpperCase()}>
                    {t("russian").toUpperCase()}
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
        <Stack
          sx={{
            width: "100%",
            textAlign: "center",
            color: "#0e7500",
            marginBottom: "1rem",
          }}
        >
          <Alert variant="filled" severity="success">
            <AlertTitle style={{ textAlign: "left" }}>Success</AlertTitle>
            {t("orderPlacedSuccessfully", { id: `${order?.id}` })}
          </Alert>
        </Stack>
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
      <Stack
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "1rem",
          display: paid ? null : "none",
        }}
      >
        <Alert variant="filled" severity="success">
          <AlertTitle style={{ textAlign: "left" }}>Success</AlertTitle>
          {t("orderPaid")}
        </Alert>
      </Stack>
    </>
  );
};
export default OrderDetails;
