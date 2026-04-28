import NameInput from "./inputfields/NameInput";
import EmailInput from "./inputfields/EmailInput";
import UserIcon from "./icons/UserIcon";
import PasswordInput from "./inputfields/PasswordInput";
import RoleIcon from "./icons/RoleIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import PhotoUploadSection from "./PhotoUploadSection";

function ProfileEditForm() {
  return (
    <div className="bg-white/5 backdrop-blur-xs inset-shadow-sm inset-shadow-violet-500/50 w-full min-w-2/5  my-2 rounded-2xl text-white">
      <div className="p-4 px-7 flex flex-col gap-4">
        {/* Email */}
        <EmailInput value="Prefilled text" readOnly={true} />
        {/* Password */}
        <PasswordInput value="Prefilled text" readOnly={true} />
        {/* First Name + Last Name Row */}
        <div className="flex gap-2.5">
          <NameInput
            fieldName="First Name"
            placeholder="First Name"
            Icon={UserIcon}
          />
          <NameInput
            fieldName="Last Name"
            placeholder="Last Name"
            Icon={UserIcon}
          />
        </div>
        {/* Role + LinkedIN profile Row */}
        <div className="flex gap-2.5">
          {/* Role */}
          <NameInput
            fieldName="Role"
            placeholder="eg. Full Stack Developer"
            Icon={RoleIcon}
          />

          {/* LinkedIN profile */}

          <NameInput
            fieldName="LinkedIn"
            placeholder="your linkedIn profile"
            Icon={LinkedInIcon}
          />
        </div>
        {/* photo url */}
        <PhotoUploadSection />
        {/* about */}
        <AboutSection />
        {/* skills */}
        <SkillsSection />

        <button className="w-full py-2 rounded-lg bg-linear-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 font-semibold text-sm text-white transition-all cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
export default ProfileEditForm;
