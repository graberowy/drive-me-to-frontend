import { axiosInstance } from "../httpHandler/httpHandler";

export const customerAuth = async (mobile) => {
  const url = `/passengers/mobile/${mobile}`;
  const { data } = await axiosInstance.get(url);
  if (data) {
    sessionStorage.setItem("passenger-autenticated", true);
    sessionStorage.setItem("passenger-name", data.name);
    sessionStorage.setItem("passenger-mobile", data.mobile);
    sessionStorage.setItem("passenger-id", data.id);
    return true;
  }
  return false;
};

export const newCustomerAuth = async (fullName, mobileNo) => {
  const url = "/passengers";
  const params = {
    name: fullName,
    mobile: mobileNo,
  };
  const { data } = await axiosInstance.post(url, params);
  if (data) {
    sessionStorage.setItem("passenger-autenticated", true);
    sessionStorage.setItem("passenger-name", data.name);
    sessionStorage.setItem("passenger-mobile", data.mobile);
    sessionStorage.setItem("passenger-id", data.id);
    return true;
  }
  return false;
};
