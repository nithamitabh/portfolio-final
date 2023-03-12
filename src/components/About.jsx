import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer';
// *motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variant'


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,

  })
  return (
    <section id='about' className='section' ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-luminosity bg-top"></motion.div>
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I'm a Engineering student looking for Internship.</h3>  <p className="mb-6">
            I have done 2 years practice in Frontend Development.Recently I also start learning Backend Development with NodeJs.I have some experience with Ui design in figma.I currently doing my Engineering from NIT Hamirpur.</p>
            {/* Skills */}
            <div className="flex  items-center text-white font-secondary text-4xl font-bold mb-6 mt-4"><h1>Skills</h1></div>
            <div className="flex gap-x-4 lg:gap-x-10 mb-12">
              <div className="flex lg:flex-row flex-col mr-15">
                <div className="flex flex-col">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start ={0} end={inView ? 90 : null} duration={1} />%
                </div>
                <div className="font-primary text-l tracking=[2px]">HTML&CSS</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col ">
                <div className="flex flex-col">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start ={0} end={inView ? 80 : null} duration={2} />%
                </div>
                <div className="font-primary text-l tracking=[2px]">JavaScript</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col ">
                <div className="flex flex-col">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start ={0} end={inView ? 75 : null} duration={3} />%
                </div>
                <div className="font-primary text-l tracking=[2px]">React JS</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col ">
                <div className="flex flex-col">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start ={0} end={inView ? 60 : null} duration={4} />%
                </div>
                <br />
                <div className="font-primary text-l tracking=[2px]">Figma</div>
                </div>
              </div>
              {/* <div className="flex lg:flex-row md:flex-col ">
                <div className="flex flex-col">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start ={0} end={inView ? 75 : null} duration={5} />%
                </div>
                <div className="font-primary text-l tracking=[2px]">DSA</div>
                </div>
              </div> */}
            </div>
            <button className="btn btn-lg">Resume</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
