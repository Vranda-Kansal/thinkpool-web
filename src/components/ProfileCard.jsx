import ActionButton from "./ActionButton";
import ConnectIcon from "./icons/ConnectIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

function ProfileCard() {
  const skillColors = [
    "bg-[#1a2a1a] border border-green-700",
    "bg-[#2a1a0a] border border-orange-700",
    "bg-[#0a1a2a] border border-blue-700",
    "bg-[#1a1a2a] border border-violet-700",
  ];

  return (
    <div>
      <div className="bg-white/5 inset-shadow-sm inset-shadow-pink-500/50 w-full min-w-2/5  my-2 rounded-2xl text-white">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-2xl h-48 md:h-80 w-full object-cover"
        />
        <div className="p-6 px-7 flex flex-col gap-4">
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-2xl font-bold text-white">Radha Rani</h3>
            <p className="text-yellow-500 font-bold flex gap-2 items-center text-sm">
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
              Full Stack Developer
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-xl font-semibold text-sky-300">About</h2>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              itaque dolorum error, maiores distinctio illo deleniti quos ipsum,
              alias placeat non. Accusantium, iure!
            </article>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-xl font-semibold text-sky-300">Skills</h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2">
              {[
                "React",
                "MongoDB",
                "ExpressJs",
                "NodeJS",
                "Random",
                "MongoDB",
                "ExpressJs",
                "NodeJS",
                "Random",
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`text-center w-full px-3 py-2 rounded-lg text-sm ${skillColors[index % 4]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center my-5">
            <LinkedInIcon />
            <a className="underline cursor pointer hover:font-medium cursor-pointer">
              View Profile
            </a>
          </div>
        </div>
      </div>
      {/* Buttons outside card */}
      <div className="flex justify-center items-center gap-12 -mt-6">
        {/* Skip */}
        <ActionButton
          label="May be Later"
          bgColor="bg-slate-50 text-black font-semibold text-2xl"
          textColor="text-slate-50"
          Icon={"X"}
        />
        {/* Connect */}
        <ActionButton
          label="Let's Connect"
          bgColor="bg-violet-500"
          textColor="text-violet-500"
          Icon={ConnectIcon}
        />
      </div>
    </div>
  );
}
export default ProfileCard;
