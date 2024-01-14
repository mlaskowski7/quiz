import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const QuizItem = ({quizTitle, quizId}) =>{
  return(
    <div className="flex flex-col gap-1 text-white bg-black px-5 py-3 rounded-2xl">
      <h2 className='text-[32px]'>{quizTitle}</h2>
      <Link to={"/"}>
        <p className=' cursor-pointer text-[16px] underline underline-offset-4 hover:text-[#7E662A] transition-all duration-300 ease-in-out'>Click to take up the quiz</p>
      </Link>
    </div>
  )
}

const Quizes = () => {
  
  const [quizes, setQuizes] = useState([]);
  
 

  useEffect(() =>{
    loadQuizes();
  })

  const loadQuizes = async () =>{
    const result = await axios.get('http://localhost:8080/quiz/all');
    setQuizes(result.data);
  }

  return (
    <div className='relative bg-gradient h-screen flex sm:flex-row flex-col gap-4 justify-center items-center' id='quizes'>
      <div className='flex flex-col gap-2 w-[90%] sm:w-[30%] justify-center items-center'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          Ready<span className='text-[#7E662A] font-bold font-Lemon'> Quizes</span>
        </h1>
        <p className='text-[16px] text-white'>
          Take up one of our ready quizes
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-start items-left w-[90%] sm:w-[40%] ">
        {
          quizes.map((quiz, index) => {
            return(
              <QuizItem quizId={quiz.id} quizTitle={quiz.title} key={index+1} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Quizes