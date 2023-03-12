import Image from '../assets/about.png'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:items-center lg:gap-x-12 lg:flex-row'>
          <div>
            <div className='flex-1 text-center font-secondary lg:text-left'><motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[80px] '>Amitabh <span>Kumar</span></motion.h1></div>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold text-center uppercase leading - [1] lg:text-left'><span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'App Developer',
                2000,
                'UI Designer',
                2000,
                'Student',
                2000,
                'Freelancer',
                2000
              ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} /></motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos voluptas, culpa harum commodi tem</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'><button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* Social Icons */}
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-20 gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/nithamitabh"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/amitabh-kumar-392671231/"><FaLinkedin /></a>
              <a href="https://twitter.com/amitabh85467656"><FaTwitter /></a>
              <a href="https://www.instagram.com/amitabhkumarharsh/"><FaInstagram /></a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'> <img src={Image} alt="" /></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
