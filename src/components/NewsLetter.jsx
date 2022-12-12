import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4 '>
        <div className='max-w-[77.5rem] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Okay Ladies, now let's get in formation</h1>
                <p>Sign up now to get in formation.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full sm:gap-x-4'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 px-6 py-3 text-black'>Notify Me</button>
                </div>
                <div>   
                    <p>Mr. Robot will take your data. But check out our</p>
                    <a className='text-[#00df9a] underline' href="" >Privacy Policy</a>        
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter