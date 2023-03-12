import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch </h4>
              <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12 '>Let's work <br />Together</h2>
            </div>
          </motion.div>
          <motion.form
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className='flex-1 border rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input type="email" className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all placeholder:text-white' placeholder='Enter email ' />
            <input type="text" className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all placeholder:text-white' placeholder='Enter name' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all placeholder:text-white resize-none mb-12' placeholder='your message ' ></textarea>
            <button className='btn btn-lg'>Send Feedback</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
