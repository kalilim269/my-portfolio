import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[60vh] items-center' id='contact'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='grid grid-cols-1'>
                <div className='p-10 mr-2 bg-white rounded-xl flex flex-col justify-around'>
                    <h1 className='text-4xl sm:text-5xl text-[#d43939]'>
                        Contact <span className='text-black'>Me</span>
                    </h1>
                    <p className='text-normal text-lg font-medium text-gray-600 mt-2'>
                        Let's connect on <a href='https://www.linkedin.com/in/limkali/' target='blank' className='hover:text-blue-400'>LinkedIn</a><br/> or send me an Email
                    </p>

                    <div className='flex items-center mt-2 text-gray-600'>
                        <a href="mailto:limkali99@gmail.com"><MdOutlineEmail size={30}/></a>
                        <div className='ml-4 text-md tracking-wide w-40'>
                            <p>limkali99@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact