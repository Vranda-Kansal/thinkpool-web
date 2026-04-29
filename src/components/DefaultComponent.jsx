import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "../utils/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function DefaultComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedUser = useSelector((store) => store.user);

  async function getProfile() {
    if (savedUser) return;
    try {
      const loggedInUser = await axios.get(
        import.meta.env.VITE_BASE_URL + "/profile/view",
        { withCredentials: true },
      );
      dispatch(addUser(loggedInUser?.data?.data));
      navigate("/feed", { replace: true });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
      navigate("/", { replace: true });
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
export default DefaultComponent;
