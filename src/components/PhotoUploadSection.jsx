function PhotoUploadSection() {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">Profile Photo URL</label>
      <div className="flex items-center gap-2 w-full">
        <label className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 border border-white/20 text-sm transition-colors cursor-pointer whitespace-nowrap">
          Upload Photo
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </div>
  );
}
export default PhotoUploadSection;
