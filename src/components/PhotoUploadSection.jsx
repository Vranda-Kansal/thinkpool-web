import { useSelector } from "react-redux";

function PhotoUploadSection({ setSelectedFile, selectedFile, setProfilePic }) {
  const loggedInUser = useSelector((state) => state.user);
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      //TODO: show error message or toast
      console.log("only images allowed");
      e.target.value = "";
      return;
    } // reject non-images

    setSelectedFile(file);
    setProfilePic(URL.createObjectURL(file));
    e.target.value = "";
  }

  function handleRemove() {
    setSelectedFile(null);
    setProfilePic(loggedInUser?.photoUrl);
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">Profile Photo</label>

      <div className="flex items-center gap-2">
        {!selectedFile ? (
          <label className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 border border-white/20 text-sm transition-colors cursor-pointer whitespace-nowrap">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="flex items-center text-center gap-2 px-3 py-2 rounded-lg border-2 border-pink-600/60 text-sm">
            <span className="truncate max-w-72 text-pink-200 font-medium">
              {selectedFile.name}
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-white/60 cursor-pointer hover:font-semibold hover:text-white  leading-none"
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoUploadSection;
