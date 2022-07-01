export const storeTokens = (tokensData) => {
  // Store tokens in session store for backwards compatibility

  sessionStorage.setItem("access_token", tokensData["access_token"]);
  sessionStorage.setItem("refresh_token", tokensData["refresh_token"]);
};

export const purgeTokens = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
};

export const accessToken = () => {
  return sessionStorage.getItem("access_token");
};

export const refreshToken = () => {
  return sessionStorage.getItem("refresh_token");
};
