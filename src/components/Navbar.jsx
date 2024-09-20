import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import logo from "../../public/photos/logo.png";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../public/photos/profile.jpeg";
import { useAuth } from "../context/Authprovider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      event.key === "Enter" ||
      (event == "searchButton" && query.length > 0)
    ) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-lg w-full fixed z-10 bg-white md:px-6 md:py-4">
      {/* Hamburger menu and YouTube logo */}
      <div className="flex items-center space-x-6 ">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
        <img
          src={logo}
          alt="youtube-logo"
          className="mix-blend-multiply mx-2 cursor-pointer w-[150px]"
        />
      </div>

      {/* Search bar, search button, and mic */}
      <div className="flex w-[35%] items-center ">
        <div className="rounded-l-full w-[100%] px-3 py-2 border border-gray-400 ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={query}
          />
        </div>
        <button
          className="px-5 py-2 rounded-r-full border bg-gray-100 border-gray-400"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={24} />
        </button>
        <IoMdMic
          size={24}
          className="ml-3 h-10 w-10 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-200 duration-200 p-2"
        />
      </div>

      {/* Video add, notifications, and profile picture */}
      <div className="flex items-center space-x-5">
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <div>
          <img
            src={profile}
            alt="profile"
            className="w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
