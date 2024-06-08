import React from 'react';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id='about' className='section pb-12 lg:pb-24' ref={ref}>
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-auto lg:h-screen">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[300px] lg:h-[640px] mix-blend-luminosity bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I'm an Engineering student looking for Internship.</h3>
            <p className="mb-6">
              I have done 2 years practice in Frontend Development. Recently I also started learning Backend Development with Node.js. I have some experience with UI design in Figma. I am currently doing my Engineering from NIT Hamirpur.
            </p>
            {/* Skills */}
            <div className="flex flex-col items-center text-white font-secondary text-4xl font-bold mb-6 mt-4">
              <h1>Skills</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { skill: "HTML & CSS", level: 90, duration: 1 },
                { skill: "JavaScript", level: 80, duration: 2 },
                { skill: "React JS", level: 75, duration: 3 },
                { skill: "Figma", level: 60, duration: 4 },
                { skill: "DSA", level: 75, duration: 5 },
                { skill: "Python", level: 85, duration: 2 },
                { skill: "Node.js", level: 70, duration: 3 },
                { skill: "Blender", level: 65, duration: 4 },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    <CountUp start={0} end={inView ? item.level : null} duration={item.duration} />%
                  </div>
                  <div className="font-primary text-l tracking-[2px]">{item.skill}</div>
                </div>
              ))}
            </div>

            <a href="https://drive.google.com/file/d/1x22SwAo4-0WnjJIEJmakUM-XbD3_60CC/view?usp=sharing">
              <button className="btn btn-lg" type="button">Resume</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
