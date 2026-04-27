function Navbar() {
  return (
    <div className="navbar z-20 bg-white/5 backdrop-blur-xs shadow-lg shadow-black/50 sticky top-0">
      <div className="flex-1">
        <a className="text-white text-xl font-medium ml-4"> 👨‍🎓✨ThinkPool</a>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
