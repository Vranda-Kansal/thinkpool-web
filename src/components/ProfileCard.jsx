import { Link } from "react-router";
import ConnectIcon from "./icons/ConnectIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

function ProfileCard({
  profilePic,
  firstName,
  lastName,
  role,
  linkedIn,
  skills,
  about,
  handleSendReq,
  toUserId,
}) {
  const skillColors = [
    "bg-[#1a2a1a] border border-green-700",
    "bg-[#2a1a0a] border border-orange-700",
    "bg-[#0a1a2a] border border-blue-700",
    "bg-[#1a1a2a] border border-violet-700",
  ];

  return (
    <div className="bg-white/5 inset-shadow-sm inset-shadow-pink-500/50 w-full my-2 h-auto lg:h-[calc(100dvh-5rem)] flex flex-col lg:flex-row rounded-2xl text-white shrink-0">
      <img
        src={
          profilePic
            ? profilePic
            : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        alt="Shoes"
        className="rounded-2xl rounded-b-none lg:rounded-r-none lg:rounded-l-2xl h-40 lg:h-full w-full lg:w-[48%] shrink-0 object-cover object-[50%_30%]"
      />
      {/* Fixed — never scrolls */}
      <div className="lg:w-[52%] lg:h-full lg:flex lg:flex-col">
        <div className="flex flex-col items-center text-center px-5 lg:px-6 pt-2 lg:pt-5 pb-3 shrink-0 gap-1.5">
          <h3 className="text-2xl font-bold text-white tracking-wide leading-tight">
            {firstName || lastName
              ? `${firstName || ""} ${lastName || ""}`.trim()
              : "Guest"}
          </h3>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold tracking-widest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-3 w-3 shrink-0"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </g>
            </svg>
            {role ? role?.trim().toUpperCase() : "No role added"}
          </span>
          {linkedIn ? (
            <Link
              to={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <LinkedInIcon />
              <span>View LinkedIn Profile</span>
            </Link>
          ) : null}
        </div>
        <div className="px-4 lg:px-6 pt-2 pb-2 flex flex-col flex-1 min-h-0 gap-3">
          {/* About */}
          <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
              About
            </span>
            <article className="max-h-18 lg:max-h-36 text-sm overflow-y-auto whitespace-pre-line hide-scrollbar leading-6 text-white/80">
              {about ? about.trim() : "No bio available"}
            </article>
          </div>
          {/* Skills */}
          <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-2">
            <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
              Skills
            </span>
            {skills?.length > 0 ? (
              <div className="flex flex-row lg:flex-wrap gap-2 overflow-x-auto  lg:overflow-visible hide-scrollbar pb-1">
                {skills?.map((skill, index) => (
                  <span
                    key={skill?.id}
                    className={`shrink-0 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium ${skillColors[index % 4]}`}
                  >
                    {skill?.name}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-sm text-white/30">No skills listed</span>
            )}
          </div>
        </div>
        <div className="flex rounded-b-2xl overflow-hidden border-t border-white/10 shrink-0">
          {/* Pass */}
          <button
            onClick={() => handleSendReq("pass", toUserId)}
            className="flex-1 h-14 flex items-center justify-center gap-2 cursor-pointer text-white/60 hover:bg-white/10 transition-colors"
          >
            <span className="text-xl">✕</span>
            <span className="text-sm font-medium">Maybe Later</span>
          </button>

          {/* Divider */}
          <div className="w-px bg-white/10 my-3" />

          {/* Connect */}
          <button
            onClick={() => handleSendReq("like", toUserId)}
            className="flex-1 h-14 flex items-center justify-center gap-2 bg-linear-to-r from-pink-400 to-violet-600 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer"
          >
            <ConnectIcon />
            <span className="text-sm font-medium">Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
