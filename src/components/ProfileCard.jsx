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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="#0A66C2"
            >
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.043c.432-.818 1.49-1.681 3.065-1.681 3.278 0 3.882 2.157 3.882 4.961v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.552 13.019H3.785V9h3.104zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <a className="underline cursor pointer hover:font-medium cursor-pointer">
              View Profile
            </a>
          </div>
        </div>
      </div>

      {/* Buttons outside card */}
      <div className="flex justify-center items-center gap-12 -mt-6">
        {" "}
        <div className="text-slate-50 flex flex-col gap-2 text-center items-center">
          <button className="w-14 h-14 rounded-full bg-slate-50 text-black font-semibold text-2xl">
            X
          </button>
          <span className="text-sm mb-4">May be Later</span>
        </div>
        <div className="text-violet-500 flex flex-col gap-2 text-center items-center">
          <button className="w-14 h-14 rounded-full bg-violet-500 flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              fill="currentColor"
              stroke="white"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9541 0.709802C14.93 0.761862 14.8965 0.810638 14.8536 0.853553L5.40076 10.3064L8.07126 14.7573C8.16786 14.9183 8.34653 15.0116 8.53386 14.9989C8.72119 14.9862 8.88561 14.8696 8.95958 14.697L14.9541 0.709802Z"
                fill="currentColor"
              />
              <path
                d="M4.69366 9.59931L0.242756 6.92876C0.0817496 6.83216 -0.0115621 6.65349 0.00115182 6.46616C0.0138657 6.27883 0.130462 6.11441 0.303045 6.04044L14.293 0.0447451C14.2399 0.0688812 14.1902 0.102782 14.1465 0.146447L4.69366 9.59931Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span className="text-sm mb-4">Let's Connect</span>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
