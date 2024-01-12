import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { logo } from '../assets';


const Navbar = () => {
  return (
    <div className='bg-[#0F2027] text-white flex flex-row justify-between items-center p-[30px] fixed z-[20] w-full h-[40px]'>
      <div>
        <a href="/" className='hover:opacity-80 transition-all duration-300 ease-in-out'><img src={logo} alt="logo" className='sm:h-[40px] h-[25px]'/></a>
      </div>
      <div className='flex flex-row justify-between sm:gap-6 gap-3 items-center'>
        <ScrollLink to="questions" className='text-[10px] sm:text-[16px] cursor-pointer hover:text-[#7E662A] transition-all duration-300 ease-in-out'>Sample Questions</ScrollLink>
        <ScrollLink to="quizes" className='text-[10px] sm:text-[16px] cursor-pointer hover:text-[#7E662A] transition-all duration-300 ease-in-out'>View Quizes</ScrollLink>
        <div className="text-[10px] sm:text-[16px] bg-white text-black px-2 py-1 rounded-lg  border-2 hover:border-[#7E662A] hover:text-[#7E662A] hover:bg-transparent transition-all duration-300 ease-in-out">
          <Link to={"/create-quiz"}>Create New Quiz</Link>
        </div>
        
      </div>

      
    </div>
  )
}

export default Navbar;