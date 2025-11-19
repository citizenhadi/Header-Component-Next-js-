"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function HeaderDark() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-[100vw] h-[10vh] fixed top-0 left-0 bg-black flex items-center justify-between text-white shadow-md z-50">
        {/* Logo */}
        <h1 id="logo" className="text-3xl ml-5 font-bold tracking-wide">
          <span className="text-red-500">H</span>eader
        </h1>

        {/* Desktop Menu */}
        <nav id="menu" className="md:mr-5 hidden md:block text-white">
          <ul className="flex items-center justify-between">
            <li className="px-3 text-[18px] hover:text-red-500 transition-colors duration-200">
              <Link href="/">Test</Link>
            </li>
            <li className="px-3 text-[18px] hover:text-red-500 transition-colors duration-200">
              <Link href="/">Test</Link>
            </li>
            <li className="px-3 text-[18px] hover:text-red-500 transition-colors duration-200">
              <Link href="/">Test</Link>
            </li>
            <li className="px-3 text-[18px] hover:text-red-500 transition-colors duration-200">
              <Link href="/">Test</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          id="menuToggle"
          aria-label="Toggle Menu"
          className="block md:hidden mr-7 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-[32px] h-[32px]" />
          ) : (
            <Menu className="w-[32px] h-[32px]" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`fixed top-[12vh] right-0 w-[220px] bg-black rounded-l-3xl border border-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="text-white px-[20px] py-[20px] space-y-6">
          <li className="hover:text-red-500 transition-colors duration-200">
            <Link href="/">Test</Link>
          </li>
          <li className="hover:text-red-500 transition-colors duration-200">
            <Link href="/">Test</Link>
          </li>
          <li className="hover:text-red-500 transition-colors duration-200">
            <Link href="/">Test</Link>
          </li>
          <li className="hover:text-red-500 transition-colors duration-200">
            <Link href="/">Test</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
