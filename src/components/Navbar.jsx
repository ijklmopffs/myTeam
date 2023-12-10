import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="p-4 flex items-center justify-between md:justify-normal gap-16 text-white">
      <div>
        <img src={logo} alt="brand logo" />
      </div>

      <div className="hidden md:flex justify-between items-center w-full font-semibold text-lg">
        <div className="flex gap-8 flex-col md:flex-row">
          <Link to="/" className="hover:text-lightCoral">
            home
          </Link>
          <Link to="/about" className="hover:text-lightCoral">
            about
          </Link>
        </div>
        <Link to="/contact">
          <button className="border-white rounded-full p-1 px-4 border-2 hover:bg-white hover:text-black">
            contact us
          </button>
        </Link>
      </div>

      <div
        className={
          nav
            ? "flex w-full transition-transform ease-in duration-700"
            : "hidden w-full"
        }
      >
        <div className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"></div>
        <div className="flex flex-col z-10 absolute md:static top-0 p-10 left-[6.5rem] md:p-0 bg-midnightGreen md:bg-none h-screen md:h-auto w-4/5 md:flex-row gap-20 md:gap-0 md:justify-between items-start md:items-center md:w-full font-semibold text-lg">
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              onClick={handleClick}
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              />
            </svg>
          </div>
          <div className="flex gap-8 flex-col md:flex-row">
            <Link to="/" className="hover:text-lightCoral">
              home
            </Link>
            <Link to="/about" className="hover:text-lightCoral">
              about
            </Link>
          </div>
          <Link to="/contact">
            <button className="border-white rounded-full p-1 px-4 border-2 hover:bg-white hover:text-black">
              contact us
            </button>
          </Link>
        </div>
      </div>

      <div className="md:hidden" onClick={handleClick}>
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
}
