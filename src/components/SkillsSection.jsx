import { useRef } from "react";

function SkillsSection({ skills, setSkills }) {
  const skillInputRef = useRef(null);

  const handleRemoveSkill = (clickedSkillId) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== clickedSkillId));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">Skills</label>

      {skills.length > 0 && (
        <div className="grid grid-cols-5 gap-2">
          {skills.map((skill) => {
            return (
              <span
                key={skill.id}
                className="flex items-center justify-between gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border-2 border-pink-600 text-sm font-medium"
              >
                {skill.name}
                <button
                  type="button"
                  className="opacity-50 cursor-pointer hover:font-semibold hover:text-red-200"
                  onClick={() => handleRemoveSkill(skill.id)}
                >
                  ✕
                </button>
              </span>
            );
          })}
        </div>
      )}

      <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
        <input
          type="text"
          ref={skillInputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const skillInput = skillInputRef.current.value;
              if (skillInput.trim()) {
                if (skills) {
                  const alreadyExists = skills.some(
                    (skill) =>
                      skill?.name?.trim().toLowerCase() ===
                      skillInput.trim().toLowerCase(),
                  );
                  if (alreadyExists) {
                    //TODO: error message
                    console.log("skill already exits");
                    return;
                  }
                }
                setSkills([
                  ...skills,
                  {
                    id: crypto.randomUUID(),
                    name: skillInput.trim(),
                  },
                ]);
                skillInputRef.current.value = "";
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
