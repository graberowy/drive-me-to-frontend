import { Route, Routes, Navigate } from "react-router-dom";
import LogIn from "./containers/Auth/LogIn";
import LogOut from "./containers/Auth/LogOut";

const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/log_in" />} />
        <Route path="/log_in" element={<LogIn />} />
        <Route path="/log_out" element={<LogOut />} />
      </Routes>
    </main>
  );
};
export default Router;
