import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileEditForm from "./ProfileEditForm";
import { useSelector } from "react-redux";

function ProfileEdit() {
  const loggedInUser = useSelector((state) => state.user);
  const [lastName, setLastName] = useState(loggedInUser?.lastName);
  const [role, setRole] = useState(loggedInUser?.role);
  const [about, setAbout] = useState(loggedInUser?.about);
  const [linkedIn, setLinkedIn] = useState(loggedInUser?.linkedIn);
  const [skills, setSkills] = useState(loggedInUser?.skills || []);
  const [profilePic, setProfilePic] = useState(loggedInUser?.photoUrl);
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col gap-2 flex-1 p-3 md:p-8 lg:gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 rounded-full bg-linear-to-b from-pink-500 to-violet-500" />
              <h1 className="text-lg md:text-2xl font-bold text-white">
                Edit Profile
              </h1>
            </div>
            <p className="text-[10px] md:text-sm text-white/30 pl-3">
              Update your profile and showcase your journey.
            </p>
          </div>
          <button
            onClick={() => setPreviewOpen(true)}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 lg:gap-2 lg:px-4 lg:py-2 rounded-full border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 text-xs lg:text-sm font-semibold lg:font-bold transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Preview
          </button>
        </div>
        <ProfileEditForm
          lastName={lastName}
          setLastName={setLastName}
          role={role}
          setRole={setRole}
          linkedIn={linkedIn}
          setLinkedIn={setLinkedIn}
          about={about}
          setAbout={setAbout}
          skills={skills}
          setSkills={setSkills}
          setProfilePic={setProfilePic}
        />
      </div>

      {/* Mobile — bottom sheet */}
      {previewOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-999 flex items-end "
          onClick={() => setPreviewOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full bg-base-300 rounded-t-3xl flex flex-col animate-slide-up max-h-[90dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mt-3" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-3 pb-2">
              <div>
                <h2 className="text-base font-semibold text-pink-400">
                  Live Preview
                </h2>
                <p className="text-xs text-white/40">
                  This is how others will see you
                </p>
              </div>
              <button
                onClick={() => setPreviewOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white text-xs transition-all"
              >
                ✕
              </button>
            </div>

            {/* Profile Card */}
            <div className="overflow-y-auto px-4 pb-6">
              <ProfileCard
                profilePic={profilePic}
                firstName={loggedInUser?.firstName}
                lastName={lastName}
                role={role}
                linkedIn={linkedIn}
                skills={skills}
                about={about}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProfileEdit;
