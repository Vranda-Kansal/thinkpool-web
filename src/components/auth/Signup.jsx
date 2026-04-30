import { useLocation, useNavigate } from "react-router";
import ToggleRedirect from "../ToggleRedirect";
import FormHeader from "../FormHeader";
import NameInput from "../inputfields/NameInput";
import EmailInput from "../inputfields/EmailInput";
import PasswordInput from "../inputfields/PasswordInput";
import UserIcon from "../icons/UserIcon";
import { useRef, useState } from "react";
import axios from "axios";
import { addUser } from "../../utils/features/user/userSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoginPage = location.pathname === "/login";

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailIdRef = useRef(null);
  const passwordRef = useRef(null);

  const [errormessage, setErrorMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const firstName = firstNameRef.current.value || "";
      const lastName = lastNameRef.current.value || "";
      const emailId = emailIdRef.current.value || "";
      const password = passwordRef.current.value || "";

      if (!firstName.trim() || !emailId.trim() || !password.trim()) {
        throw new Error("please fill required fields");
      }
      const user = await axios.post(
        import.meta.env.VITE_BASE_URL + "/signup",
        {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          emailId: emailId.trim(),
          password: password.trim(),
        },
        { withCredentials: true },
      );
      dispatch(addUser(user?.data?.data));
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailIdRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/profile/edit", { replace: true });
      //TODO:
      // dispatch(addToast(res?.data?.message));
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data);
      } else {
        setErrorMessage(err.message || err);
      }
    }
  };
  const handleLogin = async () => {
    try {
      const emailId = emailIdRef.current.value || "";
      const password = passwordRef.current.value || "";

      if (!emailId.trim() || !password.trim()) {
        throw new Error("please fill required fields");
      }
      const user = await axios.post(
        import.meta.env.VITE_BASE_URL + "/login",
        {
          emailId: emailId.trim(),
          password: password.trim(),
        },
        { withCredentials: true },
      );
      dispatch(addUser(user?.data?.data));
      emailIdRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/feed", { replace: true });
      //TODO:
      // dispatch(addToast(res?.data?.message));
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data);
      } else {
        setErrorMessage(err.message || err);
      }
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xs shadow-lg shadow-black/50 w-full max-w-2/5 mx-auto my-2 rounded-2xl text-white">
      <div className="p-4 px-7 flex flex-col gap-4">
        {/* Header */}
        <FormHeader isLoginPage={isLoginPage} />

        {/* First Name + Last Name Row */}
        {!isLoginPage && (
          <div className="flex gap-2.5">
            <NameInput
              fieldName="First Name*"
              placeholder="First Name"
              Icon={UserIcon}
              ref={firstNameRef}
              maxLength={15}
            />
            <NameInput
              fieldName="Last Name"
              placeholder="Last Name"
              Icon={UserIcon}
              ref={lastNameRef}
              maxLength={15}
            />
          </div>
        )}

        <EmailInput ref={emailIdRef} />

        {/* Password */}
        <PasswordInput ref={passwordRef} />

        <ToggleRedirect
          isLoginPage={isLoginPage}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          errormessage={errormessage}
        />
      </div>
    </div>
  );
}

export default Signup;
