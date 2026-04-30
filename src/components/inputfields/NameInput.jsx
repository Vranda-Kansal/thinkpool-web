function NameInput({
  fieldName,
  placeholder,
  Icon,
  ref,
  defaultValue,
  readOnly = false,
  onChange,
  maxLength,
}) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="text-sm">{fieldName}</label>
      <div
        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2  transition-colors
      ${
        readOnly
          ? "cursor-not-allowed select-none bg-slate-400/20 border-white/20"
          : "bg-white/5 border-white/20 focus-within:border-white/50"
      }`}
      >
        <Icon />
        <input
          type="text"
          required
          maxLength={maxLength}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : undefined}
          ref={ref}
          readOnly={readOnly}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={`w-full bg-transparent outline-none text-sm placeholder:text-white/30
          ${readOnly && "text-white/30 cursor-not-allowed"}`}
        />
      </div>
    </div>
  );
}
export default NameInput;
