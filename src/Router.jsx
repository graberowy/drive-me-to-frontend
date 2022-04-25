import { Route, Routes, Navigate } from "react-router-dom";
import LogIn from "./containers/Auth/LogIn";
import LogOut from "./containers/Auth/LogOut";
import Passenger from "./containers/Customer/Passenger/Passenger";

const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/log_in" />} />
        <Route path="/log_in" element={<LogIn />} />
        <Route path="/log_out" element={<LogOut />} />
        <Route path="/customer" element={<Passenger />} />
      </Routes>
    </main>
  );
};
export default Router;
