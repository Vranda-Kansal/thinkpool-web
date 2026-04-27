import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-xs shadow-lg shadow-black/50 w-full max-w-2/5 mx-auto my-2 rounded-2xl text-white">
      <div className="p-4 px-7 flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-0.5 mb-1">
          <h2 className="text-xl font-semibold">
            {isLoginPage ? "Welcome" : "Create your account"}
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Join thousands of developers building together.
          </p>
        </div>

        {/* First Name + Last Name Row */}
        {!isLoginPage && (
          <div className="flex gap-2.5">
            {/* First Name */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">First Name</label>
              <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
                <svg
                  className="h-3.5 w-3.5 opacity-50 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">Last Name</label>
              <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
                <svg
                  className="h-3.5 w-3.5 opacity-50 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">Email Id</label>
          <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
            <svg
              className="h-3.5 w-3.5 opacity-50 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              required
              placeholder="Enter your email id"
              className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">Password</label>
          <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
            <svg
              className="h-3.5 w-3.5 opacity-50 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </g>
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              {showPassword ? (
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </g>
                </svg>
              ) : (
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>

        <button className="w-full py-2 rounded-lg bg-linear-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer">
          {isLoginPage ? "Continue" : "Sign Up"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-sm text-white/40">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Login redirect */}
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
      </div>
    </div>
  );
}

export default Signup;
