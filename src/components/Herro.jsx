import React from 'react';
import Typed from 'react-typed'

const Herro = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2 first-letter:text-3xl first-letter:text-blue-400 '>Herro Is A Baller</p>
          {/* md for anything over medium screensize.. sm anything over small screen size.. the last is for mobile.. doesn't have anything */}
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
          <div className='flex md:gap-x-4 gap-x-2 md:py-6 py-4'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Three Headed Monster:</p>
              <Typed strings={['Lil Wayne', 'Drake', 'Nicki Minaj']} className='md:text-5xl sm:text-4xl text-xl' typeSpeed={170} backSpeed={180} loop/>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Herro