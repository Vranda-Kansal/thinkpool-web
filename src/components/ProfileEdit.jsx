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

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col gap-3 flex-1 p-8">
        <div className="w-full max-w-2/5  whitespace-nowrap">
          <h1 className="text-3xl font-bold text-violet-500">Edit Profile</h1>
          <p className="text-sm text-white mt-1">
            Update your profile and showcase your journey.
          </p>
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
      <div className="flex flex-col gap-3 flex-1 p-8">
        <div className="w-full max-w-2/5  whitespace-nowrap">
          <h1 className="text-3xl font-bold text-pink-500">Live Preview</h1>
          <p className="text-sm text-white mt-1">
            This is how others will see your profile
          </p>
        </div>
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
  );
}
export default ProfileEdit;
