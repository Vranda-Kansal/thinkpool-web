import { useState } from "react";

function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">Skills</label>

      {skills.length > 0 && (
        <div className="grid grid-cols-5 gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center justify-between gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-sm"
            >
              {skill}
              <button type="button" className="opacity-50 cursor-pointer">
                ✕
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (skillInput.trim()) {
                setSkills([...skills, skillInput.trim()]);
                setSkillInput("");
              }
            }
          }}
          placeholder="eg. MongoDB, React.js, NodeJS"
          className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
        />
      </div>
    </div>
  );
}
export default SkillsSection;
