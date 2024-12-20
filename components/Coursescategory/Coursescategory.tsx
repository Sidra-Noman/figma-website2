import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const Coursescategory = () => {
  return (
//     <div className="bg-[#FFFFFF] py-[112px] " id='services'>
//     <div className="mx-auto max-w-screen-2xl px-4 ">
//       {/* <!-- text - start --> */}
//       <div className="mb-10 md:mb-16 py-4 gap-6  text-center justify-center ">
//         <h2 className="text-5xl font-bold  text-[#000000] md:mb-6 lg:text-3xl ">Explore Courses By Category</h2>
  
//         <p className="  text-[#000000]  font-normal text-sm ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
//       </div>
//       {/* <!-- text - end --> */}
  
//       <div className="grid gap-2 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-10">
//         {/* <!-- feature - start --> */}
//         <div className="flex md:gap-6 bg-[#F7F7F7]  gap-4 "> 
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2 ">
//             <Image src={"/images/Vector1.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2  font-semibold md:text-xl">Design & Development</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->
  
//         <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6  bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/volume-high.png"} alt='vector1' height={32} width={32}></Image> 
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Marketing</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
           
//           </div>
//         </div>
//         {/* <!-- feature - end -->
  
//         <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/group.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Development</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->

//          <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/microphone.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Communication</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->

//          <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/link.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Digital Marketing</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->
        
//          <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/arrow-2.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Self Development</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->


  
//         <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/briefcase.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-6'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Business</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end -->
  
//         <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/book2.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-4'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Finance</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end --> */}
  
//         {/* <!-- feature - start --> */}
//         <div className="flex gap-4 md:gap-6 bg-[#F7F7F7]">
//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg md:h-[100px] md:w-[100px] md:rounded-xl bg-white m-2">
//           <Image src={"/images/book.png"} alt='vector1' height={32} width={32}></Image>
//           </div>
  
//           <div className='py-4'>
//             <p className="mb-2 text-lg font-semibold md:text-xl">Consulting</p>
//             <p className="mb-2 text-[#000000]">50+ Courses Available</p>
            
//           </div>
//         </div>
//         {/* <!-- feature - end --> */}

     
//       </div>
     
     
//     </div>
//      {/* Button */}

//    {/* <div className="flex justify-center items-center py-14">
//     <button className="w-[155px] h-[48px] rounded border border-black text-sm sm:text-base font-normal">View All Courses
//       </button>
//      </div>  */}
    
//    {/* using shadcn ui */}
   
// <div className="flex justify-center items-center py-14">
//   <Button variant="outline" className="w-[155px] h-[48px] text-sm sm:text-base font-normal">
//     View All Courses
//   </Button>
// </div>
 


  // </div>


  <div className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-[112px]" id="courses">
  <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-10 md:mb-16 gap-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4">
        Explore Courses By Category
      </h2>
      <p className="text-sm sm:text-base text-[#000000] font-normal max-w-3xl mx-auto">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
    </div>

    {/* Categories Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Category Item */}
      {[
        {
          title: "Design & Development",
          description: "50+ Courses Available",
          image: "/images/Vector1.png",
        },
        {
          title: "Marketing",
          description: "50+ Courses Available",
          image: "/images/volume-high.png",
        },
        {
          title: "Development",
          description: "50+ Courses Available",
          image: "/images/group.png",
        },
        {
          title: "Communication",
          description: "50+ Courses Available",
          image: "/images/microphone.png",
        },
        {
          title: "Digital Marketing",
          description: "50+ Courses Available",
          image: "/images/link.png",
        },
        {
          title: "Self Development",
          description: "50+ Courses Available",
          image: "/images/arrow-2.png",
        },
        {
          title: "Business",
          description: "50+ Courses Available",
          image: "/images/briefcase.png",
        },
        {
          title: "Finance",
          description: "50+ Courses Available",
          image: "/images/book2.png",
        },
        {
          title: "Consulting",
          description: "50+ Courses Available",
          image: "/images/book.png",
        },
      ].map((category, index) => (
        <div
          key={index}
          className="flex gap-4 md:gap-6 bg-[#F7F7F7] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-[100px] md:w-[100px] items-center justify-center rounded-lg bg-white shadow-lg">
            <Image
              src={category.image}
              alt={category.title}
              height={32}
              width={32}
            />
          </div>
          <div className="py-4 flex flex-col justify-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              {category.title}
            </p>
            <p className="text-sm sm:text-base text-[#000000]">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Button using shadcn ui */}
    <div className="flex justify-center items-center py-14">
      <Button variant="outline" className="w-[152px] h-[40px] text-sm sm:text-base font-normal border-black">
        View All Courses
      </Button>
    </div>
  </div>
</div>







  )
}

export default Coursescategory
