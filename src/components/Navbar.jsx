"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NextTopLoader from "nprogress";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import Button from "./utils/Button";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // solving toploader issue
  const currentPath = usePathname();
  useEffect(() => {
    NextTopLoader.done();
  }, [currentPath]);

  // adding shadow and bg to navber
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      const header = document.querySelector("#navbar");
      window.scrollY > 50
        ? header.classList.add("shadow", "bg-[#D7F5DC]")
        : header.classList.remove("shadow", "bg-[#D7F5DC]");
    };
  }

  // closing the navbar
  const navbarClose = (e) => {
    setNavbar(false);
  };

  // toggle the navbar
  const navbarOpen = (e) => {
    setNavbar(!navbar);
  };

  return (
    <nav
      id="navbar"
      className="grid place-items-center h-[80px] sticky top-0 z-50"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href={"/"} className="text-xl font-bold">
            Design
            <span className="text-[#F55F1D]">AGENCY</span>
          </Link>

          {/* responsive nav links */}
          <div
            className={`flex items-center gap-7 transition-all max-lg:fixed max-lg:flex-col max-lg:top-0 max-lg:left-0 max-lg:pt-12 max-lg:pl-10 max-lg:h-screen max-lg:bg-slate-100 max-lg:w-80 max-lg:gap-5 max-lg:items-start ${
              navbar ? "ml-0" : "ml-[-320px]"
            }`}
          >
            {/* nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium ${
                  currentPath === link.href ? "text-[#F55F1D]" : ""
                }`}
                onClick={navbarClose}
              >
                {link.label}
              </Link>
            ))}

            {/* login & reg links */}
            <Button className="text-black">Login</Button>
            <Button className="bg-[#20B15A] hover:bg-[#1d954d] text-white px-5">Register</Button>

            <div
              className="lg:hidden absolute top-5 right-6 cursor-pointer"
              onClick={navbarClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          {/* nav toggler */}
          <div className="lg:hidden cursor-pointer" onClick={navbarOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.4}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* backdrop filter */}
      <div
        className={`fixed inset-0 bg-gray-800 opacity-25 -z-10 ${
          navbar ? "block" : "hidden"
        }`}
        onClick={navbarClose}
      ></div>
    </nav>
  );
};

export default Navbar;
