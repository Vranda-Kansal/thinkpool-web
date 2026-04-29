import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { addUser } from "../utils/features/user/userSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user);
  const handleLogout = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_BASE_URL + "/logout",
        {},
        { withCredentials: true },
      );
      dispatch(addUser(null));
      navigate("/login", { replace: true });
    } catch (err) {
      //TODO: show the error
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
    }
  };
  return (
    <div className="navbar z-20 bg-white/5 backdrop-blur-xs shadow-sm shadow-black/50 sticky top-0">
      <div className="flex-1">
        <a className="text-white text-xl font-medium ml-4"> 👨‍🎓✨ThinkPool</a>
      </div>
      {loggedInUser && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="user avatar" src={loggedInUser?.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile/edit" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/requests" className="justify-between">
                Requests
              </Link>
            </li>
            <li>
              <Link to="/connections" className="justify-between">
                Connections
              </Link>
            </li>
            <li>
              <Link className="justify-between" onClick={handleLogout}>
                logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Navbar;
