import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>Harsh 👋</span> </h1> 
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
        
    </div>
  )
}

export default Header