import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variant'
import Img1 from '../assets/foodsite.jpg' //food site
import Img2 from '../assets/travel-site.png' //travel site
import Img3 from '../assets/hotel-site.jpg'
import Img4 from '../assets/socialsite.jpg'
import Img5 from '../assets/chatting.png'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto lg:gap-y-10 lg:mt-[200px]'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className='flex-1 flex-col lg:gap-y-32 mb-4 lg:mb-0 '>
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
              <p className='max-w-sm mb-16 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus non vitae vel nobis! Aperiam nam officia illum, incidunt iure nesciunt accusamus harum laborum, excepturi ex consequuntur natus? Libero, nobis!
              </p>
              <button className='btn btn-sm mb-4'>View Upcoming Project</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500  ' src={Img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-[190px] transition-all duration-500 z-50 '>
            <span className='text-gradient h3'>Food Ordering Site</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-[140px] transition-all duration-700 z-50 '>
              <span className='text-xl text-white'>Project Description</span>
            </div>
          </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
           className='flex-1 flex flex-col gap-y-10'>
            <div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500  ' src={Img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-[150px] transition-all duration-500 z-50 '>
            <span className='text-gradient h3'>Travel Site</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-[110px] transition-all duration-700 z-50 '>
              <span className='text-xl text-white'>Project Description</span>
            </div>
          </div>
          </div>
          <div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500  ' src={Img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-[170px] transition-all duration-500 z-50 '>
            <span className='text-gradient h3'>Hotel Site</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-[130px] transition-all duration-700 z-50 '>
              <span className='text-xl text-white'>Project Description</span>
            </div>
          </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
         className='flex-1 flex flex-col gap-y-10'>
          <div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500  ' src={Img4} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-[190px] transition-all duration-500 z-50 '>
            <span className='text-gradient h3'>Social Media</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-[140px] transition-all duration-700 z-50 '>
              <span className='text-xl text-white'>Project Description</span>
            </div>
          </div>
          </div>
          <div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500  ' src={Img5} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-[150px] transition-all duration-500 z-50 '>
            <span className='text-gradient h3'>Chatting site</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-[110px] transition-all duration-700 z-50 '>
              <span className='text-xl text-white'>Project Description</span>
            </div>
          </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
