import React from "react";
import {
  sidebarItems,
  sidebarItems2,
  sidebarItems3,
  sidebarItems4,
} from "../../utils/Icons";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate("");
  const handleNavigate = (name) => {
    if (name == "Home") {
      navigate("/");
    }
  };
  return (
    <div className="w-[250px] h-screen px-2 pt-20   bg-white overflow-y-auto z-0 relative">
      {/* Sidebar Items */}
      {sidebarItems.map((e) => (
        <div
          className="flex items-center px-3 hover:bg-gray-200 duration-200 hover:rounded-lg p-1"
          key={e.id}
        >
          <div className="flex items-center space-x-6 p-1">
            <div className="text-2xl cursor-pointer">{e.icon}</div>
            <span
              className="cursor-pointer font-semibold"
              onClick={() => handleNavigate(e.name)}
            >
              {e.name}
            </span>
          </div>
        </div>
      ))}
      <hr className="py-1" />

      {/* Sidebar Items 2 */}
      <h1 className="font-bold px-3 py-2 text-[18px]">You</h1>
      {sidebarItems2.map((e) => (
        <div
          className="flex items-center px-3 hover:bg-gray-200 duration-200 hover:rounded-lg p-1"
          key={e.id}
        >
          <div className="flex items-center space-x-6 p-1">
            <div className="text-2xl cursor-pointer">{e.icon}</div>
            <span className="cursor-pointer font-semibold">{e.name}</span>
          </div>
        </div>
      ))}
      <hr className="pt-2" />

      {/* Sidebar Items 3 */}
      <h1 className="font-bold px-3 py-2 text-[18px]">Explore</h1>
      {sidebarItems3.map((e) => (
        <div
          className="flex items-center px-3 hover:bg-gray-200 duration-200 hover:rounded-lg p-1"
          key={e.id}
        >
          <div className="flex items-center space-x-6 p-1">
            <div className="text-2xl cursor-pointer">{e.icon}</div>
            <span className="cursor-pointer font-semibold">{e.name}</span>
          </div>
        </div>
      ))}
      <hr className="pt-2" />

      {/* Sidebar Items 4 */}
      <h1 className="font-bold px-3 py-2 text-[18px]">More From Youtube</h1>
      {sidebarItems4.map((e) => (
        <div
          className="flex items-center px-3 hover:bg-gray-200 duration-200 hover:rounded-lg p-1"
          key={e.id}
        >
          <div className="flex items-center space-x-6 p-1">
            <div className="text-2xl cursor-pointer text-red-500">{e.icon}</div>
            <span className="cursor-pointer font-semibold">{e.name}</span>
          </div>
        </div>
      ))}
      <hr className="pt-2" />
      <div className="pl-4">
        <span className="text-m font-semibold text-gray-400">
          About Press Copyright <br />
          Contact us Creators <br /> Advertise Developers <br />
        </span>
        <br />
        <p className="text-[16px] font-medium">
          Term privacy Policy & Safety <br />
          How Youtube workTest <br />
          new features
        </p>

        <br />
        <p>2024 copyright company</p>
      </div>
    </div>
  );
};

export default Sidebar;
