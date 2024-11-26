
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
   return (
//      <footer>
//            <div className="w-[1280px] max-sm:w-[428px] max-sm:h-[1411px] h-[684px] max-sm:px-0 px-20 py-20 ">
//            <div className="w-[1120px] max-sm:w-[428px] h-[524px]">
//            <div className="flex max-sm:flex-col max-sm:justify-center  justify-between mb-20">
//            <div className="max-sm:text-center max-sm:pl-10 max-sm:h-[91px] max-sm:w-[380px] ">
//            <h4 className="font-semibold max-sm:w-[287px] text-lg ">
//              Subscribe to our newsletter
//            </h4>
           
//             <p className=" max-sm:mt-4  max-sm:w-[287px] max-sm:px-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//            </div>
//            <div className="max-sm:mt-6">
//            <div className=" flex max-sm:flex-col  ">
//            <form className="border-black border-[1px] max-sm:w-[380px] max-sm:mx-7 rounded w-[265px] p-3 mr-4">
//              <input 
//              type="text"
//             name="email"
//              placeholder="Enter your email"
//              />
//            </form>
//            <div className="max-sm:mt-4">
//            <button className="border-black border-[1px]  max-sm:w-[380px] max-sm:mx-7 rounded py-3 px-6 ">
//               Subscribe
//             </button>
//            </div>
//            </div>
//            <p className="pt-4 max-sm:text-center text-sm underline">
//              By subscribing you agree to with our Privacy Policy
//             </p>
//            </div>
//            </div>
           
//            <div className='flex flex-col sm:flex-row max-sm:items-center justify-evenly mt-28 px-4 sm:px-0'>
//            <div className='mb-6 max-sm:hidden block  sm:-ml-14 sm:mb-0'>
//                    <Image
//                        src="/images/Ddsgnr Library.svg"
//                        alt="Logo"
//                        width={100}
//                        height={100}
//                    />
//                </div>
//                <div className='mb-6 hidden max-sm:block sm:-ml-14 sm:mb-0'>
//                    <Image
//                        src="/images/Ddsgnr Library.svg"
//                        alt="Logo"
//                        width={172}
//                        height={40}
//                    />
//                </div>

//                <div className='text-center sm:text-left mb-6 sm:mb-0'>
//                <p className="font-semibold pb-4">Courses</p>
//               <ul className="text-sm ">
//                <li className="py-2 hover:text-blue-500"><Link href='#' >Business</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >Development</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >Technology</Link></li>
//              <li className="py-2 hover:text-blue-500"><Link href='#' >Design</Link></li>
//                 <li className="py-2 hover:text-blue-500"><Link href='#' >Programming</Link></li>
//            </ul>
//                </div>

//                <div className='text-center sm:text-left mb-6 sm:mb-0'>
//                <p className="font-semibold pb-4">Resources</p>
//               <ul className="text-sm ">
//                <li className="py-2 hover:text-blue-500"><Link href='#' >Career</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >Resume</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >Learning</Link></li>
//              <li className="py-2 hover:text-blue-500"><Link href='#' >Interview Preparation</Link></li>
//                 <li className="py-2 hover:text-blue-500"><Link href='#' >Jobs</Link></li>
//            </ul>
//                </div>

//                <div className='text-center sm:text-left mb-6 sm:mb-0'>
//                <p className="font-semibold pb-4">About Us</p>
//               <ul className="text-sm ">
//                <li className="py-2 hover:text-blue-500"><Link href='#' >Contact</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >Help/Support</Link></li>
//               <li className="py-2 hover:text-blue-500"><Link href='#' >FAQ</Link></li>
//              <li className="py-2 hover:text-blue-500"><Link href='#' >Terms and Conditions</Link></li>
//                 <li className="py-2 hover:text-blue-500"><Link href='#' >Partners</Link></li>
//            </ul>
//                </div>
//            </div>

//            <div className='border border-black mx-10 mt-5'></div>

//            <div className='flex flex-col sm:flex-row items-center justify-between mt-10 mx-10 pb-24'>

//                <div className='text-center sm:text-left mb-4 sm:mb-0 text-sm sm:text-base'>
//                    2023 Ddsgnr. All rights reserved.
//                </div>

//                <div className='flex space-x-4 text-sm sm:text-base mb-4 sm:mb-0'>
//                    <h4 className='cursor-pointer underline'>Privacy Policy</h4>
//                    <h4 className='cursor-pointer underline'>Terms of Service</h4>
//                    <h4 className='cursor-pointer underline'>Cookies Settings</h4>
//                </div>

               
//                <div className="flex  gap-3 ">
//          <Link href="/"><GrFacebookOption className='w-[24px] h-[24px]' /></Link>
//          <Link href="/"><FiInstagram className='w-[24px] h-[24px]' /></Link>
//          <Link href="/"><FaTwitter className='w-[24px] h-[24px]' /></Link>
//          <Link href="/"><FaLinkedin className='w-[24px] h-[24px]' /></Link>
//          </div>
//          </div>
         
//                </div>
//                </div>
//        </footer>
//    )
// }

// export default Footer


<footer>
  <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-20 py-10">
    <div className="w-full max-w-[1120px] mx-auto">
      {/* Newsletter Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-20 gap-8">
        <div className="text-center lg:text-left">
          <h4 className="font-semibold text-lg">Subscribe to our newsletter</h4>
          <p className="mt-4 text-sm text-gray-600 max-w-[380px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto gap-4">
          <form className="flex-grow border border-black rounded px-4 py-2 max-w-[380px] mx-auto lg:mx-0">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="w-full outline-none"
            />
          </form>
          <button className="w-full sm:w-auto border border-black rounded px-6 py-2 bg-black text-white">
            Subscribe
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4 lg:mt-0 underline">
          By subscribing, you agree to our Privacy Policy.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-between gap-8">
        {/* Logo */}
        <div className="text-center w-full sm:w-auto">
          <Image
            src="/images/Ddsgnr Library.svg"
            alt="Logo"
            width={172}
            height={40}
          />
        </div>

        {/* Footer Links */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <p className="font-semibold pb-4">Courses</p>
          <ul className="text-sm space-y-2">
            <li className="hover:text-blue-500"><Link href="#">Business</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Development</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Technology</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Design</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Programming</Link></li>
          </ul>
        </div>

        <div className="w-full sm:w-auto text-center sm:text-left">
          <p className="font-semibold pb-4">Resources</p>
          <ul className="text-sm space-y-2">
            <li className="hover:text-blue-500"><Link href="#">Career</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Resume</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Learning</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Interview Preparation</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Jobs</Link></li>
          </ul>
        </div>

        <div className="w-full sm:w-auto text-center sm:text-left">
          <p className="font-semibold pb-4">About Us</p>
          <ul className="text-sm space-y-2">
            <li className="hover:text-blue-500"><Link href="#">Contact</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Help/Support</Link></li>
            <li className="hover:text-blue-500"><Link href="#">FAQ</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Terms and Conditions</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Partners</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black mt-10"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mt-10 space-y-4 lg:space-y-0">
        <div className="text-sm">
          2023 Ddsgnr. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-4 text-sm">
          <Link href="#" className="underline">Privacy Policy</Link>
          <Link href="#" className="underline">Terms of Service</Link>
          <Link href="#" className="underline">Cookies Settings</Link>
        </div>
        <div className="flex gap-4 text-lg">
          <Link href="#"><GrFacebookOption /></Link>
          <Link href="#"><FiInstagram /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
  }
  
  export default Footer
