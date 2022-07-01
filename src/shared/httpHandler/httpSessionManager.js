import { storeTokens } from "../auth/tokenJWT";
import decodeJwt from "jwt-decode";
import { axiosSessionExtend } from "./httpSessionHandler";

const sessionManager = () => {
  const refreshToken = (tokenExpire) => {
    window.setTimeout(
      getRefreshedToken,
      tokenExpire * 1000 - Date.now() - 10000
    );
  };

  const getRefreshedToken = async () => {
    const refreshEndpoint = "/token/refresh";
    const response = await axiosSessionExtend.get(refreshEndpoint);
    if (response) {
      const decodedToken = decodeJwt(response.data.access_token);
      storeTokens(response.data);
      setSessionRefresh(decodedToken.exp);
    }
  };

  const setSessionRefresh = (tokenExpire) => {
    refreshToken(tokenExpire);
  };

  return {
    setSessionRefresh,
  };
};

export default sessionManager();
