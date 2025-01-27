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
          <li >
            <Link href={"/"} className="text black hover:golden active:underline">
              Home
            </Link>
            <span className=""></span>
          </li>
          <li >
            <Link href={"/"} className="text-black hover:text-slate hover:underline">
              Shop
            </Link>
            <span className=""></span>
          </li>
          <li >
            <Link href={"/"} className="text-black hover:text-golden hover:underline">
              About
            </Link>
            <span className=""></span>
          </li>
          <li >
            <Link href={"/"} className="text-black hover:text-golden hover:underline">
              Contact
            </Link>
            <span className=""></span>
          </li>
        </ul>
      </nav>

      <div className="h-[24px] w-[290px] hidden md:flex justify-between font-[poppins]">
      
        <Link href={"/"} className="hover:text-slate">
          <TbUserExclamation />
        </Link>

        <Link href={"/"} className="hover:text-slate">
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
