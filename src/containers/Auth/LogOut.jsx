import React from "react";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import ButtonStyled from "../../shared/components/Button/ButtonStyled";
import Grid from "@mui/material/Grid";
import ToggleLanguage from "../../shared/translations/LanguageChange";

const LogOut = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/log_in");
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <div style={{ margin: "30px 30px 30px 30px" }}>
          <div style={{ padding: "0 30px 0 30px" }}>
            <Grid style={{ paddingBottom: "1rem" }}>
              <Typography
                variant="h5"
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                {t("logoutSentence")}
              </Typography>
            </Grid>

            <Grid align="center">
              <ButtonStyled onClick={goToSignIn} label={t("signinAgain")} />
            </Grid>
            <Grid align="center">
              <div style={{ paddingTop: "1rem" }}>
                <ToggleLanguage />
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogOut;
