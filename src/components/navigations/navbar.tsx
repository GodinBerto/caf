"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`h-[70px] fixed top-0 w-full flex items-center px-4 md:px-12 justify-between z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black text-white shadow-md border-none"
          : "bg-transparent text-black border-b border-gray-300"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider">CAF</div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex gap-8 text-md">
        <a href="#" className="hover:underline underline-offset-4">
          Home
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          Services
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          Solutions
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          About
        </a>
        <a href="#" className="hover:underline underline-offset-4">
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center"
        aria-label="Open menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Right Icons */}
      <div className="hidden md:flex items-center gap-6">
        <button
          className={`${
            scrolled ? "bg-white text-black" : "bg-black text-white"
          } px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition`}
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">
          <div
            className={`absolute top-0 right-0 w-4/5 max-w-xs h-full ${
              scrolled ? "bg-black" : "bg-white"
            } shadow-lg flex flex-col p-6 gap-6`}
          >
            <button
              className="self-end mb-4"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-2xl">&times;</span>
            </button>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>
            <a
              href="/services"
              className="text-lg font-medium py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="/solutions"
              className="text-lg font-medium py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Solutions
            </a>
            <a
              href="/about"
              className="text-lg font-medium py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg font-medium py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
            <button
              className={`${
                scrolled ? "bg-white text-black" : "bg-black text-white"
              }  px-4 py-2 rounded-md text-base font-medium mt-4`}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
