const NavBar = () => {
  return (
    <div className="navbar  bg-black text-white  flex justify-between  w-full py-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black   rounded-box w-52"
          >
            <li className=" hover:scale-110 duration-200 font-semibold text-xl">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <h1 className=" text-3xl font-bold ps-10 text-sky-800 hover:scale-110 duration-200 italic">
          Tushar
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex text-4xl uppercase mr-10 px-10 ">
        <ul className="menu menu-horizontal px-4 text-sky-800 font-semibold">
          <li className=" hover:scale-110 duration-200 font-semibold text-xl">
            <a>contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
