import { axiosInstance } from "../httpHandler/httpHandler";
import { storeTokens, purgeTokens } from "./tokenJWT";
import decodeJwt from "jwt-decode";
import sessionManager from "../httpHandler/httpSessionManager";

export const customerAuth = async (username, password) => {
  const url = "/login";
  const response = await axiosInstance.post(
    url,
    new URLSearchParams({
      userLogin: username,
      userPassword: password,
    })
  );
  if (response) {
    const decodedToken = decodeJwt(response.data.access_token);
    storeTokens(response.data);
    sessionStorage.setItem("username", decodedToken.sub);
    sessionManager.setSessionRefresh(decodedToken.exp);
    return true;
  }
  return false;
};

export const newCustomerAuth = async (
  fullName,
  mobileNo,
  username,
  password
) => {
  const url = "/customer/new";
  const params = {
    userLogin: username,
    userPassword: password,
    roles: ["CUSTOMER"],
    passenger: {
      name: fullName,
      mobile: mobileNo,
    },
  };
  const { data } = await axiosInstance.post(url, params);
  if (data) {
    await customerAuth(username, password);
    return true;
  }
  return false;
};

export const userLogOut = () => {
  purgeTokens();
  sessionStorage.removeItem("username");
};
