import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToast } from "../utils/features/toast/toastSlice";

function SkillsSection({ skills, setSkills }) {
  const skillInputRef = useRef(null);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const handleRemoveSkill = (clickedSkillId) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== clickedSkillId));
  };

  const visibleSkills = expanded ? skills : skills.slice(0, 5);
  const remainingCount = skills.length - 5;

  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-3">
        <label className="text-sm lg:text-[16px] font-medium text-white/70">
          Skills
        </label>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {visibleSkills.map((skill) => (
              <span
                key={skill.id}
                className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 lg:px-3 rounded-full bg-white/10 border border-pink-600/60 text-xs lg:text-sm font-medium text-pink-200"
              >
                {skill.name}
                <button
                  type="button"
                  className="opacity-50 cursor-pointer hover:opacity-100 hover:text-red-300 transition-opacity"
                  onClick={() => handleRemoveSkill(skill.id)}
                >
                  ✕
                </button>
              </span>
            ))}

            {!expanded && remainingCount > 0 && (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full border border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 text-xs font-semibold transition-all"
              >
                +{remainingCount} more
              </button>
            )}

            {expanded && (
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/40 text-xs font-semibold transition-all"
              >
                show less
              </button>
            )}
          </div>
        )}

        <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
          <input
            type="text"
            ref={skillInputRef}
            maxLength={16}
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
                      dispatch(
                        addToast({
                          id: crypto.randomUUID(),
                          message: "skill already exists",
                          type: "error",
                        }),
                      );
                      return;
                    }
                  }
                  if (skills.length >= 13) {
                    dispatch(
                      addToast({
                        id: crypto.randomUUID(),
                        message: "max 13 skills allowed",
                        type: "error",
                      }),
                    );
                    return;
                  }

                  if (skillInput.trim().length > 16) {
                    dispatch(
                      addToast({
                        id: crypto.randomUUID(),
                        message: "skill name too long (max 16 chars)",
                        type: "error",
                      }),
                    );
                    return;
                  }
                  setSkills([
                    ...skills,
                    { id: crypto.randomUUID(), name: skillInput.trim() },
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
    </>
  );
}

export default SkillsSection;
