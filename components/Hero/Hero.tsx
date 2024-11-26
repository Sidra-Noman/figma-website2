import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (


<div id='home'>
  <section className="h-auto lg:h-[800px] flex flex-col lg:flex-row items-center justify-between pl-4 md:pl-8 lg:pl-16">
 
    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-[90%] lg:max-w-[500px] mx-auto lg:mx-0">
        Learn new skills online with ease
      </h1>
      <p className="mb-6 text-base md:text-lg text-[#000000] leading-relaxed max-w-[90%] lg:max-w-[450px] mx-auto lg:mx-0">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      {/* <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
        <button className="inline-block rounded bg-gray-900 px-6 py-2 text-center text-sm text-white">
          Start learning now
        </button>
        <button className="inline-block rounded px-6 py-2 text-center text-sm text-gray-950 border border-black">
          Explore Courses
        </button>
      </div> */}
    {/* using shadcn ui */}
<div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
  {/* Start Learning Button */}
  <Button className="bg-gray-900 text-white px-6 py-2 text-sm">
    Start learning now
  </Button>

  {/* Explore Courses Button */}
  <Button variant="outline" className="px-6 py-2 text-sm text-gray-950 border-black">
    Explore Courses
  </Button>
</div>



    </div>

    {/* Image */}
    <div className="lg:w-1/2 w-full h-[800px] lg:h-[800px] flex items-center justify-center">
      <Image
        src="/images/Image.png"
        alt="hero image"
        width={640}
        height={800}
        className="object-cover w-full h-full"
      />
    </div>
  </section>

  
  <div className="py-8 lg:py-[80px] px-4 md:px-8 gap-6 bg-[#F7F7F7] flex flex-col lg:flex-row justify-between items-center">
    <h5 className="text-lg md:text-2xl lg:text-[24px] font-bold text-center lg:text-left leading-tight max-w-[320px] hidden lg:block">
      Trusted by 2000+ companies worldwide.
    </h5>
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6">
      <Image
        src="/images/Airbnb Logo.png"
        alt="logo1"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
      <Image
        src="/images/Airbnb Logo2.png"
        alt="logo2"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
      <Image
        src="/images/Airbnb Logo3.png"
        alt="logo3"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
      <Image
        src="/images/Airbnb Logo4.png"
        alt="logo4"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
      <Image
        src="/images/Airbnb Logo5.png"
        alt="logo5"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
      <Image
        src="/images/Airbnb Logo6.png"
        alt="logo6"
        height={40}
        width={120}
        className="w-auto h-auto"
      />
    </div>
  </div>
</div>

  )
}

export default Hero
