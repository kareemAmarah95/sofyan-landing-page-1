import { useState } from "react";
import mainNavImg from "../assets/images/main-nav-logo.png";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-[#335CF4] sticky top-0 shadow-xl z-50">
      <div className="container mx-auto ">
        <div className="navbar bg-[#335CF4] text-white">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
          <div className="navbar-center">
            <a href="#" className="btn btn-ghost text-xl w-[111px] h-auto">
              <img
                className="w-full h-full object-cover block"
                src={mainNavImg}
                alt="main-nav-logo-img"
              />
            </a>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleSidebar}
              >
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              {/* w-56 */}
              {isSidebarOpen && (
                <ul
                  // tabIndex={0}
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 slider menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  p-2 shadow relative h-screen flex justify-center gap-2 right-0 top-full w-[40vw] text-center items-center "
                >
                  <div className="container mx-auto">
                    <li className="text-center pl-4 p-2 w-full slide">
                      <a
                        href="#"
                        className="animate-nav-link p-4 block w-full text-center text-2xl"
                      >
                        Homepage
                      </a>
                    </li>
                    <li className=" pl-4 p-2 w-full slide">
                      <a
                        href="#"
                        className="animate-nav-link p-4 text-center block w-full text-2xl"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li className=" pl-4 p-2 w-full slide">
                      <a
                        href="#"
                        className="animate-nav-link p-4 text-center block w-full text-2xl"
                      >
                        About
                      </a>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
