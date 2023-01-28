import React from 'react'
const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
        <a href="#"><h1 className='font-bold capitalize text-2xl text-blue-600'>AMITABH</h1> <h2 className='font-bold text-white text-xl  lg:mb-10 '>Kumar</h2> </a>
        <button className='btn btn-sm'>Hire Me</button>
        </div>
      </div>
    </header>
  )
}

export default Header
