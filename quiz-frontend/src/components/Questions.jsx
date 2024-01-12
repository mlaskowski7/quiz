import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

const Questions = () => {
  return (
    <div className='relative bg-gradient h-screen flex flex-col justify-center items-center' id='questions'>
      <div className='flex flex-col gap-2 w-[90%] justify-center items-center'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          Example<span className='text-[#7E662A] font-bold font-Lemon'> Questions</span>
        </h1>
        <p className='text-[16px] text-white'>
          What kind of questions can you expect?
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-[80%]">
        <div className="flex flex-col bg-white">
          <FontAwesomeIcon icon={faJsSquare} />
          <h2></h2>
          h
        </div>
      </div>
    </div>
  )
}

export default Questions