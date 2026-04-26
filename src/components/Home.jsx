function Home() {
  return (
    <div className="bg-[url(/assests/background_image.png)] fixed inset-0 bg-cover bg-center h-screen w-full flex flex-col justify-center items-center">
      <div className="fixed inset-0 h-full bg-black/50" />
      <div className="relative text-center flex flex-col gap-5 items-center justify-center">
        <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
          Explore. Think. Grow Together
        </p>
        <button className="bg-pink-500 px-5 py-1 rounded-full font-medium text-lg hover:bg-pink-600 cursor-pointer">
          Save changes
        </button>
      </div>
    </div>
  );
}
export default Home;
