import React from 'react'
const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
        <a href="#"><h1 className='font-bold capitalize text-2xl text-blue-600'>AMITABH</h1> <h2 className='font-bold text-white text-xl  lg:mb-10 '>Kumar</h2> </a>
        <a href="https://www.linkedin.com/in/amitabh-kumar-392671231/"><button className='btn btn-sm'>Hire Me</button></a>
        </div>
      </div>
    </header>
  )
}

export default Header
