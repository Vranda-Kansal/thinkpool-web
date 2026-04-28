function AboutSection() {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">About</label>
      <textarea
        className="bg-white/5 outline-none w-full text-sm placeholder:text-white/30 border border-white/20 rounded-lg px-2.5 py-2 focus:border-white/50 transition-colors resize-none overflow-y-auto"
        placeholder="Tell us about yourself"
        maxLength={1000}
        rows={4}
      ></textarea>
    </div>
  );
}
export default AboutSection;
