import React, { useState } from "react";
import logo from "./../assets/disney-logo.png";
import profile from "./../assets/profile.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      id: 1,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 2,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      id: 3, 
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      id: 4, 
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      id: 5,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      id: 6, 
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={item.id} name={" "} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-6 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 text-white">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={profile} alt="profile" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
