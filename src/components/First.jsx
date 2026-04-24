import { Outlet } from "react-router";

function First() {
  return (
    <>
      <div>First</div>
      <Outlet />
    </>
  );
}
export default First;
