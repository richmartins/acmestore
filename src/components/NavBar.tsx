import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBurgerMenuClick = () => {
    setBurgerMenuClicked(!burgerMenuClicked);
  };

  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={handleBurgerMenuClick}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {((isMobile && burgerMenuClicked) || !isMobile) && (
        <ul className="font-medium flex flex-col ml-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
          <li>
            <Link
              className={`block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white ${
                location.pathname === "/" ? "font-extrabold underline" : ""
              }`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white ${
                location.pathname === "/login" ? "font-extrabold underline" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul> 
      )}
    </>
  );
};

export default NavBar;
