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
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const iconLinks = [
    { href: "/", icon: <TbUserExclamation className="w-6 h-6" /> },
    { href: "/", icon: <FiSearch className="w-6 h-6" /> },
    { href: "/", icon: <FaRegHeart className="w-6 h-6" /> },
    { href: "/", icon: <AiOutlineShoppingCart className="w-6 h-6" /> },
  ];

  return (
    <header
      className="flex justify-center items-center px-4 sm:px-6 md:px-16 select-none"
      style={{ backgroundColor: isHomepage ? "#FBEBB5" : "white" }}
    >
      <nav
        className={`fixed top-[100px] left-0 w-full bg-white shadow-lg md:static md:bg-transparent md:shadow-none md:flex md:flex-1 md:justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center text-base font-poppins ml-4 sm:ml-8 md:ml-28 font-medium md:gap-5 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className="hover:text-slate-600"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative flex items-center justify-end text-[25px] gap-6 sm:gap-11 md:gap-5 md:ml-16 font-[poppins]">
        {iconLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-slate-600">
            {link.icon}
          </Link>
        ))}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <TiThMenu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;