import NameInput from "./inputfields/NameInput";
import EmailInput from "./inputfields/EmailInput";
import UserIcon from "./icons/UserIcon";
import RoleIcon from "./icons/RoleIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import PhotoUploadSection from "./PhotoUploadSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/features/user/userSlice";
import { useState } from "react";

function ProfileEditForm({
  lastName,
  setLastName,
  role,
  setRole,
  linkedIn,
  setLinkedIn,
  about,
  setAbout,
  skills,
  setSkills,
  setProfilePic,
}) {
  const loggedInUser = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    );
    formData.append("quality", "auto");
    formData.append("fetch_format", "auto");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData },
    );

    const data = await res.json();
    return data.secure_url;
  };
  const handleEditProfile = async () => {
    try {
      if (/\d/.test(role?.trim())) {
        throw new Error("no num allowed in role");
      }
      if (linkedIn?.trim()) {
        if (!linkedIn?.trim().includes("linkedin.com")) {
          throw new Error("enter a valid linkedIn URL");
        }
      }
      if (skills) {
        if (skills.length > 13) {
          throw new Error("max skills you can add is 13");
        }
      }
      let image_url = null;
      if (selectedFile) {
        image_url = await uploadToCloudinary(selectedFile);
        setProfilePic(image_url);
      }
      const updatedUser = await axios.patch(
        import.meta.env.VITE_BASE_URL + "/profile/edit",
        {
          lastName: lastName?.trim(),
          role: role?.trim(),
          about: about?.trim(),
          linkedIn: linkedIn?.trim(),
          skills: skills,
          photoUrl: image_url || loggedInUser?.photoUrl,
        },
        { withCredentials: true },
      );
      dispatch(addUser(updatedUser?.data.data));
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xs inset-shadow-sm inset-shadow-violet-500/50 w-full min-w-2/5  my-2 rounded-2xl text-white">
      <div className="p-4 px-7 flex flex-col gap-4">
        {/* Email */}
        <EmailInput defaultValue={loggedInUser?.emailId} readOnly={true} />
        {/* First Name + Last Name Row */}
        <div className="flex gap-2.5">
          <NameInput
            fieldName="First Name"
            placeholder="First Name"
            Icon={UserIcon}
            defaultValue={loggedInUser?.firstName}
            readOnly={true}
            maxLength={15}
          />
          <NameInput
            fieldName="Last Name"
            placeholder="Last Name"
            Icon={UserIcon}
            defaultValue={loggedInUser?.lastName}
            onChange={setLastName}
            maxLength={15}
          />
        </div>
        {/* Role + LinkedIN profile Row */}
        <div className="flex gap-2.5">
          {/* Role */}
          <NameInput
            fieldName="Role"
            placeholder="eg. Full Stack Developer"
            Icon={RoleIcon}
            defaultValue={loggedInUser?.role}
            onChange={setRole}
            maxLength={30}
          />

          {/* LinkedIN profile */}

          <NameInput
            fieldName="LinkedIn"
            placeholder="your linkedIn profile"
            Icon={LinkedInIcon}
            defaultValue={loggedInUser?.linkedIn}
            onChange={setLinkedIn}
          />
        </div>
        {/* photo url */}
        <PhotoUploadSection
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          setProfilePic={setProfilePic}
        />
        {/* skills */}
        <SkillsSection skills={skills} setSkills={setSkills} />
        {/* about */}
        <AboutSection setAbout={setAbout} defaultValue={loggedInUser?.about} />

        <button
          className="w-full py-2 rounded-lg bg-linear-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer"
          onClick={handleEditProfile}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
export default ProfileEditForm;
