import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons';


const Question = ({technology, question, difficulty, o1, o2, o3}) =>(
  <div className="flex flex-col gap-3 bg-white justify-start text-left text-black p-8 rounded-xl w-[90%] sm:w-[30%] h-[30%] sm:h-[100%] border-b-8 border-white hover:border-b-[#7E662A] transition-all duration-300 ease-in-out">
    <FontAwesomeIcon icon={technology}  className='text-[#0F2027] text-[30px]'/>
    <h2 className='text-[20px] font-bold'>{question}</h2>
    <h3><span className='font-semibold text-[#0F2027]'>Difficulty: </span>{difficulty}</h3>
    <p><span className='font-semibold text-[#0F2027]'>Option 1: </span>{o1}</p>
    <p><span className='font-semibold text-[#0F2027]'>Option 2: </span>{o2}</p>
    <p><span className='font-semibold text-[#0F2027]'>Option 3: </span>{o3}</p>

  </div>
)

const Questions = () => {
  return (
    <div className='relative bg-gradient h-auto sm:h-screen flex flex-col gap-4 justify-center items-center' id='questions'>
      <div className='flex flex-col gap-2 w-[90%] justify-center items-center'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          Example<span className='text-[#7E662A] font-bold font-Lemon'> Questions</span>
        </h1>
        <p className='text-[16px] text-white'>
          What kind of questions can you expect?
        </p>
      </div>
      <div className="flex  flex-col sm:flex-row gap-3 justify-between items-center w-[80%]">
      <Question question={"What does JSON stand for in JavaScript?"} technology={faJsSquare} difficulty={"Easy"} o1={"JavaScript Object Notation"} o2={"Java Source Object"} o3={"Not a Number"} />
      <Question question={"What is the purpose of state in React?"} technology={faReact} difficulty={"Medium"} o1={"To store and manage component-specific data"} o2={"To define HTML structure"} o3={"To handle user authentication"} />
      <Question question={"What is a lambda function in Python?"} technology={faPython} difficulty={"Hard"} o1={"An anonymous function"} o2={"A function with no arguments"} o3={"A function used for encryption"} />
      </div>
      <p className=' text-[12px] sm:text-[16px] text-white'>Every category has questions with different difficulty levels</p>
    </div>
  )
}

export default Questions