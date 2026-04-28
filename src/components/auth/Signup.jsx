import { useLocation } from "react-router";
import ToggleRedirect from "../ToggleRedirect";
import NameInput from "../NameInput";
import FormHeader from "../FormHeader";
import PasswordInput from "../PasswordInput";
import EmailInput from "../EmailInput";

function Signup() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="bg-white/5 backdrop-blur-xs shadow-lg shadow-black/50 w-full max-w-2/5 mx-auto my-2 rounded-2xl text-white">
      <div className="p-4 px-7 flex flex-col gap-4">
        {/* Header */}
        <FormHeader isLoginPage={isLoginPage} />

        {/* First Name + Last Name Row */}
        {!isLoginPage && (
          <div className="flex gap-2.5">
            <NameInput fieldName="First Name" placeholder="First Name" />
            <NameInput fieldName="Last Name" placeholder="Last Name" />
          </div>
        )}

        <EmailInput />

        {/* Password */}
        <PasswordInput />

        <ToggleRedirect isLoginPage={isLoginPage} />
      </div>
    </div>
  );
}

export default Signup;
