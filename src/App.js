import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./shared/theme/ThemeStyles";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <style>{'body {background-color: #262626}'}</style>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
