import ProfileCard from "./ProfileCard";
import ProfileEditForm from "./ProfileEditForm";

function ProfileEdit() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col gap-3 flex-1 p-8">
        <div className="w-full max-w-2/5  whitespace-nowrap">
          <h1 className="text-3xl font-bold text-violet-500">Edit Profile</h1>
          <p className="text-sm text-white mt-1">
            Update your profile and showcase your journey.
          </p>
        </div>
        <ProfileEditForm />
      </div>
      <div className="flex flex-col gap-3 flex-1 p-8">
        <div className="w-full max-w-2/5  whitespace-nowrap">
          <h1 className="text-3xl font-bold text-pink-500">Live Preview</h1>
          <p className="text-sm text-white mt-1">
            This is how others will see your profile
          </p>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}
export default ProfileEdit;
