import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[77.5rem] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Mocha</h1>
            <p className='py-4'> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Vero delectus doloribus ab quos hic accusamus maiores, at pariatur 
                laudantium!
            </p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaDribbbleSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaGithubSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Suits</h6>
                <ul>
                    <li className='py-2 text-sm'>Harvey</li>
                    <li className='py-2 text-sm'>Mike</li>
                    <li className='py-2 text-sm'>Louis</li>
                    <li className='py-2 text-sm'>Jessica</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>HIMYM</h6>
                <ul>
                    <li className='py-2 text-sm'>Ted</li>
                    <li className='py-2 text-sm'>Barney</li>
                    <li className='py-2 text-sm'>Robin</li>
                    <li className='py-2 text-sm'>Marshall</li>
                    <li className='py-2 text-sm'>Lily</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>The 100</h6>
                <ul>
                    <li className='py-2 text-sm'>Clark</li>
                    <li className='py-2 text-sm'>Bellamy</li>
                    <li className='py-2 text-sm'>Octavia</li>
                    <li className='py-2 text-sm'>Monty</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Empire</h6>
                <ul>
                    <li className='py-2 text-sm'>Lucious</li>
                    <li className='py-2 text-sm'>Cookie</li>
                    <li className='py-2 text-sm'>Hakeem</li>
                    <li className='py-2 text-sm'>Andre</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer