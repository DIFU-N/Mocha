import React from 'react';
import DS2 from "../assets/DS2.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[77.5rem] mx-auto grid md:grid-cols-2'>
            <img className='w-[15rem] mx-auto h-[20rem] py-4' src={DS2} alt="Dr. Strange"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>IT'S THE CLIMB</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Miley Cyrus</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint tempora ipsum ducimus odit, 
                    officia facilis voluptate minima cumque! Corrupti praesentium modi ullam itaque! 
                    Similique perspiciatis aliquid expedita tenetur suscipit.
                </p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-bold mx-auto md:mx-0 my-6 py-3 bg-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics