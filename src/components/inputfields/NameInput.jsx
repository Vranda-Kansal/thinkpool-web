function NameInput({ fieldName, placeholder, Icon }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="text-sm">{fieldName}</label>
      <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
        <Icon />
        <input
          type="text"
          required
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
        />
      </div>
    </div>
  );
}
export default NameInput;
