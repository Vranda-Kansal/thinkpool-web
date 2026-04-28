function NameInput({ fieldName, placeholder }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="text-sm">{fieldName}</label>
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
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
        />
      </div>
    </div>
  );
}
export default NameInput;
