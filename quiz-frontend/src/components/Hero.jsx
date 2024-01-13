import React from 'react';
import { javascript, python, react } from '../assets';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center' id='hero'>
      <div className='relative flex sm:flex-row flex-col sm:gap-6 gap-3 justify-center items-center mx-auto'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          Do you want to check your <span className='text-[#7E662A] font-bold font-Lemon'>PROGRAMMING Knowledge?</span>
        </h1>
        <div className='flex justify-center items-center sm:w-[40%] w-[80%]'>
          <div className='w-[90%]'>
            <img src={python} alt="python" />
            <img src={javascript} alt="javascript" />
          </div>
          <div className="w-[90%]">
            <img src={react} alt="react" />
          </div>
        </div>
      </div>
      <div className="cursor-pointer absolute bottom-10 mx-auto text-white p-2 rounded-full border-2 border-white hover:border-black hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
        <ScrollLink to='questions'>
          <FontAwesomeIcon icon={faAngleDown}/>
        </ScrollLink>
      </div>
    </div>
  
  )
}

export default Hero