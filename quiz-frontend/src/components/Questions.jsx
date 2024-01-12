import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

const Questions = () => {
  return (
    <div className='relative bg-gradient h-screen flex flex-col gap-10 justify-center items-center' id='questions'>
      <div className='flex flex-col gap-2 w-[90%] justify-center items-center'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          Example<span className='text-[#7E662A] font-bold font-Lemon'> Questions</span>
        </h1>
        <p className='text-[16px] text-white'>
          What kind of questions can you expect?
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-[80%]">
        <div className="flex flex-col gap-3 bg-white justify-start text-left text-black p-8 rounded w-[30%]">
          <FontAwesomeIcon icon={faJsSquare}  className='text-[#7E662A] text-[30px]'/>
          <h2 className='text-[20px] font-bold'>What does JSON stand for in JavaScript?</h2>
          <h3><span className='font-semibold text-[#7E662A]'>Difficulty: </span>Easy</h3>
          <p><span className='font-semibold text-[#0F2027]'>Option 1: </span>JavaScript Object Notation</p>
          <p><span className='font-semibold text-[#0F2027]'>Option 2: </span>Java Source Object</p>
          <p><span className='font-semibold text-[#0F2027]'>Option 3: </span>Not a Number</p>

        </div>
      </div>
    </div>
  )
}

export default Questions