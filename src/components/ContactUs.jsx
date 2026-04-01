import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
const ContactUs = () => {

    const onsubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
         formData.append("access_key", "e2299477-7d45-4c84-a96a-26d05a6eb739");

   try {
     const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      
      body: formData
    });
    const data = await res.json();

    if (data.success) {
      toast.success("Thank you for your submession!");
      e.target.reset();
    }else{
      toast.error(data.message);
    }
    
   } catch (error) {
    toast.error(error.message);
   }

   

    }

  return (
    <motion.div
    initial="hidden"
       whileInView="visible"
       transition={{staggerChildren:0.2}}
       viewport={{once:true}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
    text-gray-700 dark:text-white'>
        <Title title='Reach out to us' dcs='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod.'/>
        

        <motion.form
        initial={{opacity:0,y:30}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.4}}
       viewport={{once:true}} 
        onSubmit={onsubmit}
        className='grid  sm:grid-cols-2 gap-3  sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>
                    Your Name
                </p>
                <div className='flex pl-3  rounded-lg  border border-gray-300  dark:border-gray-600'>
                    <img src={assets.person_icon} alt=''/>
                    <input type='text'
                    name='name'
                    placeholder='Enter your name' className='w-full p-3 text-sm outline-none  ' required/>

                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>
                    Your Email
                </p>
                <div className='flex pl-3  rounded-lg  border border-gray-300  dark:border-gray-600'>
                    <img src={assets.email_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'
                    name='email'
                    className='w-full p-3 text-sm outline-none  ' required/>

                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>
                    Message
                </p>
                <textarea rows={8} 
                placeholder='Enter your messasge'
                name='message'
                className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 deak:border-gray-600'/>
            </div>
            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full
             cursor-pointer  hover:scale-103 trasition-all '> Submit <img src={assets.arrow_icon} alt='' className='w-4'/></button>
        </motion.form>
    </motion.div>
  )
}

export default ContactUs 
