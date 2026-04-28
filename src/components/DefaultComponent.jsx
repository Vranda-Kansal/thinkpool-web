import { Outlet } from "react-router";
import Navbar from "./Navbar";

function DefaultComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default DefaultComponent;
