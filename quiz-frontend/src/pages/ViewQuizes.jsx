import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Quiz = ({quizId, numOfQues, quizTitle, category}) =>(
  <div className="flex flex-col gap-3 bg-white justify-start text-left text-black p-8 rounded-xl w-[90%] sm:w-[30%] h-[30%] sm:h-auto border-b-8 border-white hover:border-b-[#7E662A] transition-all duration-300 ease-in-out">
    <h2 className='text-[20px] font-bold'>{quizTitle}</h2>
    <h3><span className='font-semibold text-[#0F2027]'>Category: </span>{category}</h3>
    <h3><span className='font-semibold text-[#0F2027]'>Number Of Questions: </span>{numOfQues}</h3>
    <Link to={`/answer-quiz/${quizId}`} className="flex justify-center items-center bg-black text-white rounded px-2 py-1 border-2 transition-all duration-300 ease-in-out hover:text-black hover:bg-transparent hover:border-black">
      Answer Quiz
    </Link>
  </div>
)

const ViewQuizes = () => {


    const [quizes, setQuizes] = useState([]);

    useEffect(() =>{
        loadQuizes();
    })

    const loadQuizes = async () =>{
        const result = await axios.get('http://localhost:8080/quiz/all');
        setQuizes(result.data);
    }

  return (
    <div className='relative bg-gradient h-auto sm:h-screen flex flex-col gap-4 justify-center items-center' id='questions'>
      <div className='flex flex-col gap-2 w-[90%] justify-center items-center mt-20'>
        <h1 className='text-center sm:text-[42px] text-[30px] font-Lemon sm:w-[40%] w-[80%]' >
          All<span className='text-[#7E662A] font-bold font-Lemon'> Quizes</span>
        </h1>
        <p className='text-[16px] text-white'>
          Feel free to learn with our quizes
        </p>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row gap-3 justify-between items-center w-[80%]">
        {
            quizes.map((quiz, index) => {
                return(
                    <Quiz quizId={quiz.id} quizTitle={quiz.title} category={quiz.questions.length > 0 ? quiz.questions[0].category : 'No category'} numOfQues={quiz.questions.length} key={index+1} />
                )
            })
        }
      </div>
      <p className=' text-[12px] sm:text-[16px] text-white'>Every category has questions with different difficulty levels</p>
    </div>
  )
}

export default ViewQuizes