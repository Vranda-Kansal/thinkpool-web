import { Outlet } from "react-router";
import Navbar from "./auth/Navbar";

function DefaultComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default DefaultComponent;
