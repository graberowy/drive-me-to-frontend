import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import ButtonStyled from "../Button/ButtonStyled";
import { userLogOut } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sessionTimer from "./sessionTimer";

const TimeoutModal = () => {
  const [timer, setTimer] = useState(sessionTimer.getSessionTimeout());
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (timer === 0) {
        toggleLogout();
      }
    }, 1000);
    const resetTimeout = () => {
      if (!modal) {
        setTimer(sessionTimer.getSessionTimeout());
      }
    };
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keyup",
    ];
    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }
    return () => {
      clearInterval(myInterval);
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
      }
    };
  });

  useEffect(() => {
    if (timer <= sessionTimer.getModalCountDown()) {
      setModal(true);
    }
  }, [timer]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleLogout = () => {
    userLogOut();
    navigate("/log_out");
  };

  return (
    <Dialog
      open={modal}
      onClose={toggleModal}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">{t("sessionTimeout")}</DialogTitle>

      <DialogContent>
        <div>
          <FormControl>
            <div>{t("timeoutBodyWarn", { time: `${timer}` })}</div>
          </FormControl>
          <DialogActions>
            <ButtonStyled
              onClick={() => toggleLogout()}
              customStyle={{ margin: "1rem" }}
              label={t("logout")}
              buttonGray={true}
            />
            <ButtonStyled
              onClick={() => toggleModal()}
              customStyle={{ margin: "1rem" }}
              label={t("keepMeLogIn")}
            />
          </DialogActions>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimeoutModal;
