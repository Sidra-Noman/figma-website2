import React from 'react'
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"


const Testimonials = () => {
  return (


<div id="testimonials">
  <section className="bg-[#F7F7F7] py-20 max-sm:bg-white max-sm:w-full">
    <div className="flex flex-col gap-6 max-sm:text-center sm:ml-12">
      <h2 className="text-5xl hidden sm:block font-bold">Customer testimonials</h2>
      <h4 className="sm:hidden block font-bold text-[32px]">What Our Students Say</h4>
      <p className="text-lg font-normal max-sm:px-4 max-sm:w-full sm:w-[400px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 lg:mx-12 gap-6 mt-12">
        {/* Card 1 */}
        <div className="border-black border-[1px] flex flex-col items-center p-4 max-sm:w-full sm:w-auto">
          <Image src="/images/Stars.png" alt="ratings" width={115} height={18} />
          <div className="pt-4">
            <p className="text-lg w-full sm:w-[300px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Image src="/images/Avatar1.png" alt="avatar 1" height={56} width={56} />
              <div>
                <h4 className="font-semibold">James Nduku</h4>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-black border-[1px] flex flex-col items-center p-4 hidden sm:flex">
          <Image src="/images/Stars.png" alt="ratings" width={115} height={18} />
          <div className="pt-4">
            <p className="text-lg w-full sm:w-[300px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Image src="/images/Avatar2.png" alt="avatar 2" height={56} width={56} />
              <div>
                <h4 className="font-semibold">Erick Kipkemboi</h4>
                <p>Scrum Master</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-black border-[1px] flex flex-col items-center p-4 hidden lg:flex">
          <Image src="/images/Stars.png" alt="ratings" width={115} height={18} />
          <div className="pt-4">
            <p className="text-lg w-full sm:w-[300px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Image src="/images/Avatar3.png" alt="avatar 3" height={56} width={56} />
              <div>
                <h4 className="font-semibold">Stephen Kerubo</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots and Buttons */}
      <div className="flex justify-between items-center mt-8 mx-6 lg:mx-12">
        <Image src="/images/Slider Dots.png" alt="slider dots" width={72} height={8} />
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="border-black p-3 rounded-full"
          >
            <FaArrowLeft className="w-[24px] h-[24px]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-black p-3 rounded-full"
          >
            <FaArrowRight className="w-[24px] h-[24px]" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</div>



  )
}

export default Testimonials
