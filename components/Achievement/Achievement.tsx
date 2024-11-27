
import React from 'react';

const Achievements = () => {
  return (
    <section id='achievement'>
      <header className=" justify-center text-center">
        <h1 className="text-[48px] font-bold">Our Achievements</h1>
        <p className="font-normal mx-auto max-w-[90%] lg:w-[1152px] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-around mt-10 gap-2 ">
        <div>
          <h3 className="text-[40px] font-bold text-center w-[91px] h-[96px]">+200</h3>
          <h3 className=" text-center text-[16px] font-normal w-[29px] h-6">Courses</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center w-[91px] h-[96px]">50K</h1>
          <h3 className="text-center text-[16px] font-normal w-[29px] h-6">Mentors</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center w-[91px] h-[96px]">370K</h1>
          <h3 className="text-center text-[15px] font-normal w-[29px] h-6">Students</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center w-[91px] h-[96px]">100+</h1>
          <h3 className="text-center text-[15px] font-normal w-[29px] h-6">Recognition</h3>
        </div>
      </div>
    </section>
  );
};
 export default Achievements;
