import { useNavigate } from "react-router";
import OrDivider from "./OrDivider";

function ToggleRedirect({ isLoginPage }) {
  const navigate = useNavigate();
  return (
    <>
      <button className="w-full py-2 rounded-lg bg-linear-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer">
        {isLoginPage ? "Continue" : "Sign Up"}
      </button>
      <OrDivider />
      <p className="text-center text-sm text-slate-500">
        {isLoginPage ? "No having an account?" : "Already have an account?"}{" "}
        <span
          className="text-pink-400 hover:text-pink-500 cursor-pointer font-medium"
          onClick={
            isLoginPage
              ? () => navigate("/signup", { replace: true })
              : () => navigate("/login", { replace: true })
          }
        >
          {isLoginPage ? "Sign up" : "Log in"}
        </span>
      </p>
    </>
  );
}
export default ToggleRedirect;
