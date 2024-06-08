import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variant'
import Img1 from '../assets/foodsite.jpg' // food site
import Img2 from '../assets/travel-site.png' // travel site
import Img3 from '../assets/hotel-site.jpg' // hotel site
import Img4 from '../assets/socialsite.jpg' // social media site
import Img5 from '../assets/chatting.png' // chatting site

const Work = () => {
  const projects = [
    {
      img: Img1,
      title: 'Food Ordering Site',
      description: 'A site to order food online',
      github: 'https://github.com/yourusername/foodsite',
      deploy: 'https://foodsite.example.com'
    },
    {
      img: Img2,
      title: 'Travel Site',
      description: 'A site to book travel',
      github: 'https://github.com/yourusername/travelsite',
      deploy: 'https://travelsite.example.com'
    },
    {
      img: Img3,
      title: 'Hotel Site',
      description: 'A site to book hotels',
      github: 'https://github.com/yourusername/hotelsite',
      deploy: 'https://hotelsite.example.com'
    },
    {
      img: Img4,
      title: 'Social Media',
      description: 'A social media platform',
      github: 'https://github.com/yourusername/socialsite',
      deploy: 'https://socialsite.example.com'
    },
    {
      img: Img5,
      title: 'Chatting Site',
      description: 'A site for chatting',
      github: 'https://github.com/yourusername/chattingsite',
      deploy: 'https://chattingsite.example.com'
    }
  ];

  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1 flex-col mb-4 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus non vitae vel nobis! Aperiam nam officia illum, incidunt iure nesciunt accusamus harum laborum, excepturi ex consequuntur natus? Libero, nobis!
              </p>
              <button className='btn btn-sm mb-4'>View Upcoming Project</button>
            </div>
          </motion.div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false,amount:0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={project.img} alt={project.title} />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient h3'>{project.title}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>{project.description}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
                <a href={project.github} className='text-xl text-white mr-4'>GitHub</a>
                <a href={project.deploy} className='text-xl text-white'>Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
