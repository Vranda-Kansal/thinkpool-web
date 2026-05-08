import { useState } from "react";

function AboutSection({ setAbout, defaultValue }) {
  const [charCount, setCharCount] = useState(defaultValue?.length || 0);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm lg:text-[16px] font-medium text-white/70">
          About
        </label>
        <span
          className={`text-xs font-medium ${charCount >= 380 ? "text-red-400" : "text-white/30"}`}
        >
          {charCount}/400
        </span>
      </div>
      <textarea
        className="bg-white/5 outline-none w-full text-sm text-white/80 leading-relaxed placeholder:text-white/20 border border-white/20 rounded-xl px-3 py-2.5 focus:border-violet-500/50 transition-colors resize-none hide-scrollbar"
        placeholder="Tell the world about yourself..."
        maxLength={400}
        rows={3}
        onChange={(e) => {
          setAbout(e.target.value);
          setCharCount(e.target.value.length);
        }}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
    </div>
  );
}
export default AboutSection;
