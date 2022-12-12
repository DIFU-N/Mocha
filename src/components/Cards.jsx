import React from 'react';
import Marvel from '../assets/CM2.jpg';
import Guardians from '../assets/GOTGV3.jpg';
import Loki from '../assets/Loki.jpg';


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[77.5rem] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white hover:scale-150' src={Marvel} alt="Captain Marvel"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Fight a HORSE</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white hover:scale-150' src={Guardians} alt="Guardians of the Galaxy"/>
                <h2 className='text-2xl font-bold text-center py-8'>single User- 2 Doses</h2>
                <p className='text-center text-4xl font-bold'>$200</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Fight 2 HORSES</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 bg-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent hover:scale-150' src={Loki} alt="Loki"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User- 1 dose at users risk</h2>
                <p className='text-center text-4xl font-bold'>$350</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>SuperHuman</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards