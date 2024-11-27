import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div>
    
  
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold mt-20 md:mt-44 text-center" id='services'>
                Courses
            </h1>
            <p className="text-[16px] sm:text-[18px] text-center mt-3 sm:mt-5">
                Your Ultimate Guide to Learning
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[14px] sm:text-[16px] mt-10 md:mt-16">
                <h3 className="border-black border-b pb-1">Popular</h3>
                <h3>Recommended</h3>
                <h3>Best Price</h3>
            </div>

            <div className="flex  flex-wrap items-center justify-around gap-6 md:gap-8 mt-12 md:mt-16">
               
                    <div
                        
                        className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                    >
                        <Image
                            src={`/images/Image1.png`}
                            alt='image1'
                            height={300}
                            width={416}
                            className="rounded-lg"
                        />
                        <div className="flex items-center mt-6 justify-between px-2">
                            <h3 className='font-semibold text-[14px]'>Design</h3>
                            <div className="flex items-center mr-2">
                                <Image
                                    src={"/images/Star 1.png"}
                                    alt="image2"
                                    width={20}
                                    height={20}
                                />
                                <p className="font-bold ml-2">5.0</p>
                            </div>
                        </div>
                        <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                        UX/UI Design 201
                        </h5>
                        <p className="text-[14px] sm:text-[16px] mt-3 px-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros.
                        </p>
                        <div className="flex items-center mt-4 px-2  ">
                            <button className="border border-black rounded px-4 py-2">
                                Enroll Now
                            </button>
                            <span className="  ml-4 font-bold">$400</span>
                        </div>
                    </div>
                
        
            
            
               
               <div
                   
                   className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                   
               >
                   <Image
                       src={`/images/Image2.png`}
                       alt='image2'
                       height={300}
                       width={416}
                       className="rounded-lg"
                   />
                   <div className="flex items-center mt-6 justify-between px-2">
                       <h3 className='font-semibold text-[14px]'>Programmimg</h3>
                       <div className="flex items-center mr-2">
                           <Image
                               src={"/images/Star 1.png"}
                               alt="star2"
                               width={20}
                               height={20}
                           />
                           <p className="font-bold ml-2">5.0</p>
                       </div>
                   </div>
                   <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                   Introduction to Python
                   </h5>
                   <p className="text-[14px] sm:text-[16px] mt-3">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Suspendisse varius enim in eros.
                   </p>
                   <div className="flex items-center mt-6 px-2">
                       <button className="border border-black rounded px-4 py-2">
                           Enroll Now
                       </button>
                       <span className="ml-4 font-bold">$400</span>
                   </div>
               </div>


               <div
                   
                   className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                   
               >
                   <Image
                       src={`/images/Image3.png`}
                       alt='image3'
                       height={300}
                       width={416}
                       className="rounded-lg"
                   />
                   <div className="flex items-center mt-6 justify-between px-2">
                       <h3 className='font-semibold text-[14px]'>Business</h3>
                       <div className="flex items-center mr-2">
                           <Image
                               src={"/images/Star 1.png"}
                               alt="star3"
                               width={20}
                               height={20}
                           />
                           <p className="font-bold ml-2">5.0</p>
                       </div>
                   </div>
                   <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                   Data Analysis for Beginners
                   </h5>
                   <p className="text-[14px] sm:text-[16px] mt-3">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Suspendisse varius enim in eros.
                   </p>
                   <div className="flex items-center mt-6 px-2">
                       <button className="border border-black rounded px-4 py-2">
                           Enroll Now
                       </button>
                       <span className="ml-4 font-bold">$400</span>
                   </div>
               </div>

               <div
                   
                   className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                   
               >
                   <Image
                       src={`/images/Image4.png`}
                       alt='image4'
                       height={300}
                       width={416}
                       className="rounded-lg"
                   />
                   <div className="flex items-center mt-6 justify-between px-2">
                       <h3 className='font-semibold text-[14px]'>Art</h3>
                       <div className="flex items-center mr-2">
                           <Image
                               src={"/images/Star 1.png"}
                               alt="star4"
                               width={20}
                               height={20}
                           />
                           <p className="font-bold ml-2">5.0</p>
                       </div>
                   </div>
                   <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                   Art Specialization
                   </h5>
                   <p className="text-[14px] sm:text-[16px] mt-3">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Suspendisse varius enim in eros.
                   </p>
                   <div className="flex items-center mt-6 px-2">
                       <button className="border border-black rounded px-4 py-2">
                           Enroll Now
                       </button>
                       <span className="ml-4 font-bold">$400</span>
                   </div>
               </div>

               <div
                   
                   className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                   
               >
                   <Image
                       src={`/images/Image5.png`}
                       alt='image5'
                       height={300}
                       width={416}
                       className="rounded-lg"
                   />
                   <div className="flex items-center mt-6 justify-between px-2">
                       <h3 className='font-semibold text-[14px]'>Law</h3>
                       <div className="flex items-center mr-2">
                           <Image
                               src={"/images/Star 1.png"}
                               alt="image5"
                               width={20}
                               height={20}
                           />
                           <p className="font-bold ml-2">5.0</p>
                       </div>
                   </div>
                   <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                   Rule of Law
                   </h5>
                   <p className="text-[14px] sm:text-[16px] mt-3">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Suspendisse varius enim in eros.
                   </p>
                   <div className="flex items-center  mt-6 px-2">
                       <button className="border border-black rounded px-4 py-2">
                           Enroll Now
                       </button>
                       <span className="ml-4 font-bold">$400</span>
                   </div>
               </div>

              
               <div
                   
                   className=" h-[534px] w-[416px] sm:w-[416px] bg-[#F7F7F7] gap-6 rounded-md"
                   
               >
                   <Image
                       src={`/images/Image6.png`}
                       alt='image6'
                       height={300}
                       width={416}
                       className="rounded-lg"
                   />
                   <div className="flex items-center mt-6 justify-between px-2">
                       <h3 className='font-semibold text-[14px]'>Tech</h3>
                       <div className="flex items-center mr-2">
                           <Image
                               src={"/images/Star 1.png"}
                               alt="star6"
                               width={20}
                               height={20}
                           />
                           <p className="font-bold ml-2">5.0</p>
                       </div>
                   </div>
                   <h5 className="text-[18px] sm:text-[24px] font-bold mt-3 px-2">
                   Introduction to webflow
                   </h5>
                   <p className="text-[14px] sm:text-[16px] mt-3">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Suspendisse varius enim in eros.
                   </p>
                   <div className="flex items-center  mt-6 px-2">
                       <button className="border border-black rounded px-4 py-2">
                           Enroll Now
                       </button>
                       <span className="ml-4 font-bold">$400</span>
                   </div>
               </div>

               {/* <div className="flex  items-center justify-center m-16 ">
                <button className="border border-black px-6 py-3 rounded-lg">
                    View All Courses
                </button>
            </div>  */}


             {/* using shadcn ui */}
             <div className="flex items-center justify-center m-16">
  <Button variant="outline" className="px-6 py-3 rounded-lg border-black">
    View All Courses
  </Button>
</div>


            </div>
       </div>

      


    
  )
}

export default Courses
