'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BiLogoFacebook } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";




  

// const Header = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <header>
//       <div className='bg-[#F7F7F7] max-sm:hidden max-md:hidden borber-b-[1px] border-b border-[#000000] h-[54px] w-[1280px] flex justify-between items-center pr-16 pl-[62px]'>
//         <div className='text-sm flex items-center gap-4'>
//           <span>Phone Number: 956 345 455</span>
//           <span className='w-[149px] h-[21px] border-l-[1px] border-[#676767] pl-4'>Email:info@ddsgnr.com</span>
//         </div>
//         <div className='flex gap-4'>
//           <Link href="/"><BiLogoFacebook className='w-[24px] h-[24px]' /></Link>
//           <Link href="/"><FiInstagram className='w-[24px] h-[24px]'/></Link>
//          <Link href="/"><FaTwitter className='w-[24px] h-[24px]' /></Link>
//          <Link href="/"><FaLinkedin className='w-[24px] h-[24px]'/></Link>
//         </div>
//       </div>
//     <div className="bg-[#F7F7F7] flex items-center justify-between border-b-[0.5px]  border-[#000000]  max-sm:mt-0 max-md:mt-0 mt-5 h-[72px] max-sm:w-[428px]  px-[20px] lg:px-[64px]">
//   <div className="w-[1152px] flex justify-between items-center">
     
//       <Image src={"/images/Ddsgnr Library.svg"} alt="logo" width={100} height={100} />

//       {/* <!-- logo - end --> */}

//       <button
// className="lg:hidden block"
// onClick={() => setSidebarOpen(!isSidebarOpen)}
// >
// <Image
//     src={"/images/Menu.png"} 
//     alt="Menu"
//     width={24}
//     height={24}
// />
// </button> 
// {/* <!-- nav - start --> */}
//       <nav className="max-sm:hidden w-[910px] bg-white lg:flex items-center h-[44px]">
//         <div className='w-[687px]'>
//           <ul className='flex  justify-around '>
//         <li className="hover:underline"><Link href="#home"></Link>Home</li>
//         <li className="hover:underline"><Link href="#courses"></Link>Courses</li>
//         <li className="hover:underline"><Link href="#services"></Link>Services</li>
//         <li className="hover:underline"><Link href="#achievement"></Link>Achievement</li>
//         <li className="hover:underline"><Link href="#about"></Link>About US</li>
//         <li className="hover:underline"><Link href="#testimonial"></Link>Testimonial</li>
        
        
       
        
       
//         </ul>
//         </div>
     
//       {/* <!-- nav - end --> */}

//       {/* <!-- buttons - start --> */}
//       <div className="bg-white w-[191px] h-[40px] flex justify-around gap-6">
//         <button className='ml-12 border-black rounded border-[1px] px-5 py-2 text-center'>Login</button>
//         <button className='bg-black rounded text-white px-5 py-2 w-[95px] h-[40px]'>Signup</button>
//       </div>

      

      
//       {/* <!-- buttons - end --> */}
   
//       </nav>
//       </div>
//       </div>


//        {/* Toggle Menu for Mobile Screens */}
//  <div
// className={`fixed top-0 left-0 h-full w-[250px] bg-[#F7F7F7] shadow-lg transform ${
//     isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// } transition-transform lg:hidden`}
// >
// <div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#000000]">
//     <Image
//         src={"/images/Ddsgnr Library.svg"}
//         alt="Logo"
//         width={130.6}
//         height={30.38}
//     />

//     <button onClick={() => setSidebarOpen(false)}>
        
//     <IoMdClose size={30} />
//     </button>
// </div>

// <ul className="mt-[20px] text-[16px] space-y-4 px-[20px]">
// <li><Link href={"#home"}>Home</Link></li>
//     <li><Link href={"#courses"}>Courses</Link></li>
//     <li><Link href={"#services"}>Services</Link></li>
//     <li><Link href={"#achievement"}>Achievement</Link></li>
//     <li><Link href={"#team"}>About Us</Link></li>
//     <li><Link href={"#testimonial"}>Testimonial</Link></li>

//     <li>
//         <button className="w-full px-[20px] py-[10px] border border-black rounded">
//             Login
//         </button>
//     </li>
//     <li>
//         <button className="w-full px-[26px] py-[10px] bg-black text-[#FFFFFF] rounded">
//             Sign Up
//         </button>
//     </li>
// </ul>
// </div>

// {isSidebarOpen && (
// <div
//     onClick={() => setSidebarOpen(false)}
// ></div>)}
  
//       </header>
//   )
// }

// export default Header


const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
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

      {/* Main Header */}
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
