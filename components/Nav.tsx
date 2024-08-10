"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "Projects", href: "/projects" },
    { id: 4, text: "About us", href: "/about" },
    { id: 5, text: "Contact us", href: "/contact" },
  ];

  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");

    // This is to close the mobile menu if its open.
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full px-4 text-font-primary">
      {/* Logo */}
      <h1
        onClick={handleHomeClick}
        className="w-auto text-3xl font-bold text-pink cursor-pointer"
      >
        Logo EgTech .
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-font-primary cursor-pointer duration-300 hover:text-background whitespace-nowrap"
          >
            {item.text === "Home" ? (
              <span onClick={handleHomeClick}>{item.text}</span>
            ) : (
              <Link href={item.href}>{item.text}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-font-primary bg-background ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1
          onClick={handleHomeClick}
          className="w-full text-3xl font-bold text-pink m-4 cursor-pointer"
        >
          Logo EgTech .
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-font-primary duration-300 hover:text-background cursor-pointer border-font-primary"
          >
            {item.text === "Home" ? (
              <span onClick={handleHomeClick}>{item.text}</span>
            ) : (
              <Link href={item.href}>{item.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
