
   import React from 'react'
   import Header from '@/components/Header/Header'
   import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import Coursescategory from '@/components/Coursescategory/Coursescategory'
import Achievements from'@/components/Achievement/Achievement'
import Courses from '@/components/Courses/Courses'
import Team from '@/components/Team/Team'
   
   const page = () => {
     return (
       <div>
         <Header/>
         <Hero/>
         <Coursescategory/>
         <Achievements/>
         <Courses/>
         <Team/>
         <Footer/>
       </div>
     )
   }
   
   export default page
   