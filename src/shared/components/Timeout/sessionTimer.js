import decodeJwt from "jwt-decode";
import { accessToken } from "../../auth/tokenJWT";

const sessionTimer = () => {
const minCountDown = parseInt(process.env.REACT_APP_DEFAULT_TIMEOUT_MIN_COUNTDOWN_MODAL);
const maxCountDown = parseInt(process.env.REACT_APP_DEFAULT_TIMEOUT_MAX_COUNTDOWN_MODAL);
const minSessionTimeout = parseInt(process.env.REACT_APP_DEFAULT_TIMEOUT_MIN_INACTIVITY);
const maxSessionTimeout = parseInt(process.env.REACT_APP_DEFAULT_TIMEOUT_MAX_INACTIVITY);
const conditionalBoundary = parseInt(process.env.REACT_APP_DEFAULT_TIMEOUT_CONDITIONAL_BOUNDARY);


const getSessionTotalTime = () => {
    if (accessToken()) {
        const token = decodeJwt(accessToken());
        const creationDateTime = token.iat;
        const expireDateTime = token.exp;
        const sessionTime = expireDateTime - creationDateTime;
        return sessionTime;
      }
}

  const getSessionTimeout = () => {
    if (getSessionTotalTime()) {
      const sessionTime = getSessionTotalTime();

      if (sessionTime <= conditionalBoundary) return minSessionTimeout + minCountDown;
      else return maxSessionTimeout + maxCountDown;
     
    }
  };

  const getModalCountDown = () => {
    if (getSessionTotalTime()) {
        const sessionTime = getSessionTotalTime();

      if (sessionTime <= conditionalBoundary) return minCountDown;
      else return maxCountDown;

    }
  };

  return {
    getSessionTimeout,
    getModalCountDown,
  };
};
export default sessionTimer();
