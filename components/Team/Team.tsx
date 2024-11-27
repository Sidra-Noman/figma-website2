import React from 'react'
import Image from 'next/image'
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (
  


<div id='team'>
  <section className="bg-[#F7F7F7] py-20 px-6 sm:px-10 md:px-16 lg:px-20 ">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Team</h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    {/* Team Members */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person1.png" alt="team 1" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">James Nduku</h3>
        <p className="text-lg">Marketing Coordinator</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person2.png" alt="team 2" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">Joseph Munyambu</h3>
        <p className="text-lg">Nursing Assistant</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person3.png" alt="team 3" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">Joseph Ngumbau</h3>
        <p className="text-lg">Medical Assistant</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person4.png" alt="team 4" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">Erick Kipkemboi</h3>
        <p className="text-lg">Web Designer</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>

      {/* Team Member 5 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person5.png" alt="team 5" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">Stephen Kerubo</h3>
        <p className="text-lg">President of Sales</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>

      {/* Team Member 6 */}
      <div className="flex flex-col items-center">
        <Image src="/images/person6.png" alt="team 6" width={80} height={80} />
        <h3 className="text-xl font-semibold mt-6">John Leboo</h3>
        <p className="text-lg">Dog Trainer</p>
        <div className="flex gap-4 mt-4">
          <FaLinkedin className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaDribbble className="w-6 h-6" />
        </div>
      </div>
    </div>

    
  </section>
</div>



  )
}

export default Team
