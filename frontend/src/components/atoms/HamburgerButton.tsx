"use client";
import React from "react";

// props
export type HamburgerButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerButton = ({ isOpen, toggleMenu }: HamburgerButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="relative flex flex-col items-center justify-center w-10 h-10 focus:outline-none group sm:hidden"
      aria-label="Toggle Menu"
    >
      <span
        className={`block w-8 h-1 bg-red-500 rounded transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-red-500 rounded my-1 transform transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-red-500 rounded transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
