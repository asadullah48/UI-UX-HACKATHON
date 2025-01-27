"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setIsMenuOpen((prev) => !prev)
    // console.log("Menu State", !isMenuOpen);
  };
  return (
    <header
      className="flex justify-center items-x-4 sm:px-6 md:px-16 select-none"
      style={{ backgroundColor: isHomepage ? "#FBEBB5" : "white" }}
    >
      <nav
        className={` h-[41px] w-[90%] md:w-[1280px] flex items-center justify-between  bg-white  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="justify-between  flex items-center font-[poppins] font-medium ">
          <li className="relative group">
            <Link href={"/"} className="text">
              Home
            </Link>
            <span className=""></span>
          </li>
          <li className="relative group">
            <Link href={"/"} className="hover:text-slate-600">
              Shop
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/"} className="hover:text-slate-600">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/"} className="hover:text-slate-600">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      <div className="relative flex items-center justify-end text-[25px] gap-6 sm:gap-11 md:gap-5 md:ml-16 font-[poppins]">
        <Link href={"/"} className="hover:text-slate-600">
          <TbUserExclamation />
        </Link>

        <Link href={"/"} className="hover:text-slate-600">
          <FiSearch />
        </Link>
        <Link href={"/"} className="hover:text-slate-600">
          <FaRegHeart />
        </Link>
        <Link href={"/"} className="hover:text-slate-600">
          <AiOutlineShoppingCart />
        </Link>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          <TiThMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
