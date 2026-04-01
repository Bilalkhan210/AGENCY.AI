import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from 'motion/react'
const OurWork = () => {

    const workData = [
        {
            title:"Mobile App Marketing",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod.",
            image: assets.work_mobile_app
        },
        {
            title:"dashboard Management",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod.",
            image: assets.work_dashboard_management
        },
        {
            title:"Fitness App promotion",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod.",
            image: assets.work_fitness_app
        },
    ]
  return (
    <motion.div
    initial="hidden"
       whileInView="visible"
       transition={{staggerChildren:0.2}}
       viewport={{once:true}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      

      <Title title='Our latest Work' dcs='We have worked with a variety of clients from start-ups to Fortune 500 companies.'/>

      <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full max-w-5xl'>
        {
            workData.map((work,index)=>(
                <motion.div 
                initial={{opacity:0,y:30}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.6,delay:index*0.7}}
       viewport={{once:true}}
                key={index} className='hover:scale-102 duration-200 transition-all cursor-pointer '>
                    <img src={work.image} alt="" className='w-full rounded-xl '/>
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-6/7'>{work.description}</p>
      </motion.div> )) }
      </div>
    </motion.div>
  )
}

export default OurWork
