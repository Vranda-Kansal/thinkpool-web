import { useState } from "react";

function ProfileEdit() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  return (
    <div className="flex flex-col gap-3 m-8">
      <div className="w-full max-w-2/5 ">
        <h1 className="text-3xl font-bold text-violet-500">Edit Profile</h1>
        <p className="text-sm text-white mt-1">
          Update your profile and showcase your journey.
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-xs inset-shadow-sm inset-shadow-violet-500/50 w-full max-w-2/5  my-2 rounded-2xl text-white">
        <div className="p-4 px-7 flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Email Id</label>
            <div className="flex items-center gap-1.5 cursor-not-allowed select-none focus:outline-none border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-slate-400/20">
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
                readOnly
                value="Prefilled text"
                className="text-white/30 cursor-not-allowed select-none focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Password</label>
            <div className="flex items-center gap-1.5 cursor-not-allowed select-none focus:outline-none border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-slate-400/20">
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
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </g>
              </svg>
              <input
                type="password"
                readOnly
                value="Prefilled text"
                className="text-white/30 cursor-not-allowed select-none focus:outline-none"
              />
            </div>
          </div>

          {/* First Name + Last Name Row */}

          <div className="flex gap-2.5">
            {/* First Name */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">First Name</label>
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
                  placeholder="First name"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">Last Name</label>
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
                  placeholder="Last name"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>
          </div>
          {/* Role + LinkedIN profile Row */}

          <div className="flex gap-2.5">
            {/* Role */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">Role</label>
              <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0 opacity-50"
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
                <input
                  type="text"
                  required
                  placeholder="eg. Full Stack Developer"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>

            {/* LinkedIN profile */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm">LinkedIn</label>
              <div className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-2 focus-within:border-white/50 transition-colors bg-white/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="#0A66C2"
                >
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.043c.432-.818 1.49-1.681 3.065-1.681 3.278 0 3.882 2.157 3.882 4.961v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.552 13.019H3.785V9h3.104zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                <input
                  type="text"
                  required
                  placeholder="your linkedIn profile"
                  className="bg-transparent outline-none w-full text-sm placeholder:text-white/30"
                />
              </div>
            </div>
          </div>
          {/* photo url */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Profile Photo URL</label>
            <div className="flex items-center gap-2 w-full">
              <label className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 border border-white/20 text-sm transition-colors cursor-pointer whitespace-nowrap">
                Upload Photo
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
          {/* about */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">About</label>
            <textarea
              className="bg-white/5 outline-none w-full text-sm placeholder:text-white/30 border border-white/20 rounded-lg px-2.5 py-2 focus:border-white/50 transition-colors resize-none overflow-y-auto"
              placeholder="Tell us about yourself"
              maxLength={1000}
              rows={4}
            ></textarea>
          </div>
          {/* skills */}
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
          <button className="w-full py-2 rounded-lg bg-linear-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfileEdit;
