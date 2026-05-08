import { useDispatch, useSelector } from "react-redux";
import { addToast } from "../utils/features/toast/toastSlice";

function PhotoUploadSection({ setSelectedFile, selectedFile, setProfilePic }) {
  const loggedInUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      //TODO: show error message or toast
      dispatch(
        addToast({
          id: crypto.randomUUID(),
          message: "only images allowed",
          type: "error",
        }),
      );
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
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm lg:text-[16px] font-medium text-white/70 shrink-0">
        Profile Photo
      </label>
      <div className="flex items-center gap-2">
        {!selectedFile ? (
          <label className="flex items-center gap-1.5 px-3 py-1.5 lg:gap-2 lg:px-4 lg:py-2 rounded-full border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 text-xs lg:text-sm lg:font-bold font-semibold transition-all cursor-pointer whitespace-nowrap">
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
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="flex items-center gap-2 px-3 py-1.5 lg:gap-2 lg:px-4 lg:py-2 rounded-full bg-white/5 border border-pink-500/30 text-xs lg:text-sm lg:font-bold  max-w-44">
            <span className="truncate text-pink-200 font-medium">
              {selectedFile.name}
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="shrink-0 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoUploadSection;
