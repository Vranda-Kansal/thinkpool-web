import { useState } from "react";

function PasswordInput({
  value,
  placeholder = "Enter your password",
  readOnly = false,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">Password</label>

      <div
        className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-2 transition-colors
        ${
          readOnly
            ? "cursor-not-allowed select-none bg-slate-400/20 border-white/20"
            : "bg-white/5 border-white/20 focus-within:border-white/50"
        }`}
      >
        {/* Lock Icon */}
        <svg className="h-3.5 w-3.5 opacity-50 shrink-0" viewBox="0 0 24 24">
          <g strokeWidth="2.5" fill="none" stroke="currentColor">
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </g>
        </svg>

        <input
          type={showPassword && !readOnly ? "text" : "password"}
          required={required}
          readOnly={readOnly}
          value={readOnly ? value : undefined}
          placeholder={!readOnly ? placeholder : undefined}
          className={`w-full bg-transparent outline-none text-sm
          ${
            readOnly
              ? "text-white/30 cursor-not-allowed"
              : "placeholder:text-white/30"
          }`}
        />

        {/* Show/Hide button only when editable */}
        {!readOnly && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            {showPassword ? (
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                <g strokeWidth="2.5" fill="none" stroke="currentColor">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </g>
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                <g strokeWidth="2.5" fill="none" stroke="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </g>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
