"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="py-2">
        <div className="flex px-4 flex-col md:flex-row justify-between items-center text-sm">
          <div className=" hidden md:flex items-center">

            <div className="flex space-x-2 mb-1 md:mb-0">
              <div className="flex items-center gap-1">
                <IoIosCall />
                <span>042-35774781 - 3</span>
              </div>
              <span className="hidden md:inline">|</span>
              <div className="">
                <span>021-34134781 - 3</span>
              </div>
            </div>
            <div className="flex items-center gap-1 px-3">
              <MdEmail />
              <a href="mailto:info@blisstravels.com.pk" className="hover:text-gray-300">
                info@blisstravels.com.pk
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href={""}><FaFacebookF /></Link>
              <Link href={""}> <BsTwitterX /> </Link>
              <Link href={""}> <FaInstagram /> </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
              <Link href="/about" className={`${pathname === "/about" ? "text-red-700":"text-gray-700"} hover:text-red-600`}>
                About
              </Link>
              <Link href="/honeymooners" className={`${pathname === "/travel-blogs" ? "text-red-700":"text-gray-700"} hover:text-red-600`}>
                Travel Blog
              </Link>
              <Link href="/contact" className={`${pathname === "/contact" ? "text-red-700":"text-gray-700"} hover:text-red-600`}>
                Contact
              </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Bliss Travels" className="h-16" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-3">
              <Link href="/" className={`${pathname === "/" ? "text-red-700 border-b-2 border-b-red-700":"text-gray-700"} hover:text-red-600`}>
                Home
              </Link>

              {/* Visa Dropdown - Open on Hover */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-red-600 focus:outline-none">
                  Visa
                </button>
                <div className="absolute flex flex-col left-0 mt-2 !w-44 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/visa-filling" className=" px-2 py-2 text-gray-700 hover:bg-gray-100">
                    VISAFILLING
                  </Link>
                  <Link href="/visa-consultancy" className=" ps-2 py-2 text-gray-700 hover:bg-gray-100">
                    VISA CONSULTANCY
                  </Link>
                </div>
              </div>

              <Link href="/international-tour-packages" className={`${pathname === "/international-tour-packages" ?  "text-red-700":"text-gray-700"} text-base hover:text-red-600`}>
                TOUR PACKAGES
              </Link>
              <Link href="/honeymoon-packages-from-pakistan" className={`${pathname === "/honeymoon-packages-from-pakistan" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                HONEYMOONERS
              </Link>
              <Link href="/new-year-packages" className={`${pathname === "/new-year-packages" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                NEW YEAR PACKAGES
              </Link>
              <Link href="/hajj" className={`${pathname === "/hajj" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                HAJJ
              </Link>
              <Link href="/umrah" className={`${pathname === "/umrah" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                UMRAH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden py-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? "" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link href="/" className={` ${pathname === "/" ? "text-red-700 border-b-2 border-b-red-700":"text-gray-700"} hover:text-red-600`}>
              <span className="block">Home</span>
            </Link>

              {/* Visa Dropdown - Open on Hover */}
              <div className="relative py-3 group">
                <button className="text-gray-700 hover:text-red-600 focus:outline-none">
                  Visa
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/visa-filling" className=" px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <span className="block">VISAFILLING</span>
                  </Link>
                  <Link href="/visa-consultancy" className=" px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <span className="block">VISA CONSULTANCY</span>
                  </Link>
                </div>
              </div>


              <div className="flex flex-col space-y-3">
                <Link href="/international-tour-packages" className={`${pathname === "/international-tour-packages" ?  "text-red-700":"text-gray-700"} text-base hover:text-red-600`}>
                  <span className="block">TOUR PACKAGES</span>
                </Link>
                <Link href="/honeymoon-packages-from-pakistan" className={` ${pathname === "/honeymoon-packages-from-pakistan" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                  <span className="block">HONEYMOONERS</span>
                </Link>
                <Link href="/new-year-packages"  className={`${pathname === "/new-year-packages" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                  <span className="block"> NEW YEAR PACKAGES</span>
                </Link>
                <Link href="/hajj" className={` ${pathname === "/hajj" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                  <span className="block"> HAJJ</span>
                </Link>
                <Link href="/umrah" className={` ${pathname === "/umrah" ? "text-red-700":"text-gray-700"}  text-base hover:text-red-600`}>
                  <span className="block"> UMRAH</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
