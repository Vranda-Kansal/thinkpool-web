import EmailIcon from "../icons/EmailIcon";

function EmailInput({
  value,
  placeholder = "Enter your email id",
  readOnly = false,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">Email Id</label>

      <div
        className={`flex items-center gap-1.5 border rounded-lg px-2.5 py-2 transition-colors
        ${
          readOnly
            ? "cursor-not-allowed select-none bg-slate-400/20 border-white/20"
            : "bg-white/5 border-white/20 focus-within:border-white/50"
        }`}
      >
        <EmailIcon />

        <input
          type="email"
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
      </div>
    </div>
  );
}

export default EmailInput;
