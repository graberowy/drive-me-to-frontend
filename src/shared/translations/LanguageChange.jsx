import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useStyles } from "./style";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: require("./enUS.json") },
      pl: { translation: require("./plPL.json") },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

const getUserLanguage = () => {
  return sessionStorage.getItem("lgn");
};

const ToggleLanguage = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const userLanguage = getUserLanguage();
  const [alignment, setAlignment] = useState("en");

  useEffect(() => {
    loadLanguageUserSettings();
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const loadLanguageUserSettings = () => {
    if (userLanguage) {
      i18n.changeLanguage(userLanguage);
      setAlignment(userLanguage);
    }
  };

  const setLgn = (lgn) => {
    i18n.changeLanguage(lgn);
    sessionStorage.setItem("lgn", lgn);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      className={classes.toggleButton}
    >
      <ToggleButton value="pl" onClick={() => setLgn("pl")}>
        PL
      </ToggleButton>
      <ToggleButton value="en" onClick={() => setLgn("en")}>
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
export default ToggleLanguage;
