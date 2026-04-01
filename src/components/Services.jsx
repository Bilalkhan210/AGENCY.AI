import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from 'motion/react'
const Services = () => {

     const servicesDate = [
        {
            title :"Advertising",
            description :"we turn bold indeas into powerful digital soulation that connect , engagr,",
            icon:assets.ads_icon
        },
        {
            title :"Content Marketing",
            description :"we help you create engaging content that captivates your audience and drives action",
            icon:assets.marketing_icon,
        },
        {
            title :"Content Writing",
            description :"we help you create engaging content that captivates your audience and drives action",
            icon:assets.content_icon,
        },
        {
            title :"Social Media Marketing",
            description :"we help build and maintain strong social media presence",
            icon:assets.social_icon,
        },
     ]
     
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    id='services' className='relative flex  flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40  pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
      <Title title='How can we help you ?' dcs='from strategy to execution ,we craft digital solutions that movie your brand to new heights'/>

      <div className='flex  flex-col  md:grid grid-cols-2'>
        {servicesDate.map((service,index)=>(<ServicesCard key={index} service={service} index={index}/>))}
      </div>
    </motion.div>
  )
}

export default Services



 