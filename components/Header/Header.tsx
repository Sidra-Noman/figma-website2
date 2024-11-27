'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BiLogoFacebook } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";




  

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
    
      <div className="bg-[#F7F7F7] hidden md:flex border-b-[1px] border-[#000000] h-[54px] w-full  mx-auto px-4 md:px-6 lg:px-16 justify-between items-center">
        <div className="text-sm flex items-center gap-4">
          <span>Phone Number: 956 345 455</span>
          <span className="border-l-[1px] border-[#676767] pl-4">
            Email: info@ddsgnr.com
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="/">
            <BiLogoFacebook className="w-6 h-6" />
          </Link>
          <Link href="/">
            <FiInstagram className="w-6 h-6" />
          </Link>
          <Link href="/">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="/">
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>

    
      <div className="bg-[#F7F7F7] flex items-center justify-between border-b-[0.5px] border-[#000000] h-[72px] w-full px-4 md:px-6 lg:px-16">
        <Image
          src="/images/Ddsgnr Library.svg"
          alt="logo"
          width={100}
          height={30}
          className="w-[100px]"
        />

        <button
          className="lg:hidden block"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Image
            src="/images/Menu.png"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between w-[910px]">
          <ul className="flex justify-around w-full text-sm">
            <li className="hover:underline">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="#courses">Courses</Link>
            </li>
            <li className="hover:underline">
              <Link href="#services">Services</Link>
            </li>
            <li className="hover:underline">
              <Link href="#achievement">Achievement</Link>
            </li>
            <li className="hover:underline">
              <Link href="#about">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link href="#testimonial">Testimonial</Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="border border-black rounded px-4 py-1">
              Login
            </button>
            <button className="bg-black text-white rounded px-4 py-1">
              Signup
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#F7F7F7] shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#000000]">
          <Image
            src="/images/Ddsgnr Library.svg"
            alt="Logo"
            width={100}
            height={30}
          />
          <button onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={30} />
          </button>
        </div>

        <ul className="mt-4 space-y-4 px-4 text-base">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#courses">Courses</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#achievement">Achievement</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#testimonial">Testimonial</Link>
          </li>
          <li>
            <button className="w-full border border-black rounded px-4 py-2">
              Login
            </button>
          </li>
          <li>
            <button className="w-full bg-black text-white rounded px-4 py-2">
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
