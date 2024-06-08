 import { motion } from 'framer-motion'
import { fadeIn } from '../variant'
import { BsArrowUpRight } from 'react-icons/bs'
const education = [
  {
    name: 'B.Tech',
    institute: 'NIT Hamirpur',
    description: 'I am currently pursuing my Dual Degree in Electronics and Communication Engineering from NIT Hamirpur. I am in 2nd year of my Dual Degree Program.',
    link: 'https://www.nith.ac.in/',
  },
  {
    name: '12th',
    institute: 'Jeevandeep Public School',
    description: 'I have done my 12th from Jeevandeep Public School Varanasi. I have scored 95% in my 12th Board Exam.I am also highest scorer in my school in 12th Board Exam.',
    link: 'https://jpsvaranasi.in/',
  },
  {
    name: '10th',
    institute: 'Jeevandeep Public School',
    description: 'I have done my 10th from Jeevandeep Public School Varanasi. I have scored 90% in my 10th Board Exam.',
    link: 'https://jpsvaranasi.in/',
  },

]


const Services = () => {
  return (
    <section id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-y-100'>
          <motion.div 
           variants={fadeIn('right', 0.5)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' >
            <h2 className='h2 text-accent mb-6'>What I Do?</h2>
            <h3 className='h3 max-w-[455px] mb-26'>I'm a Undergraduate practicing programming from last 2 years.</h3>
            <button className='btn btn-sm'>See My Achievements</button>
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.3)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
           className='flex-1'>
            <div>
              {education.map((education,index)=>{
                const {name,institute,description,link} = education;
                return( <div className='border-b-[2px] border-white/20 h-[200px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h3 className='text-[25px] tracking-wider font-primary font-semibold mb-0.5
                    '>{name}</h3>
                    <h4 className='text-[13px] tracking-wider font-primary font-bold mb-6'>{institute}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                    <a href={link} className ="text-gradient text-sm">Learn More</a>
                    </div>
                </div>
              )})}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Services
