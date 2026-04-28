function EmailInput() {
  return (
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
  );
}
export default EmailInput;
