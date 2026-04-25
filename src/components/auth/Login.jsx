import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("vrindavan@gmail.com");
  const [password, setPassword] = useState("Vrindavan@mohan123");

  const handleContinue = async () => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true },
      );
      console.log(res);
      dispatch(addUser(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="card card-dash bg-base-300 w-screen mx-auto max-w-96 my-6">
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Id</legend>
          <input
            type="text"
            className="input"
            value={emailId}
            placeholder="enter your email Id"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="text"
            className="input"
            value={password}
            placeholder="enter the password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
