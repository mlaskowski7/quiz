import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const AnswerQuiz = () => {
  let navigate = useNavigate();

  const {id} = useParams();

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(0);


  const onChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { id: questionId, response: selectedOption },
    ]);
  }

  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(answers);
    const result = await axios.post(`http://localhost:8080/quiz/submit-quiz/${id}`, answers);
    console.log(result.data);
    setResult(result.data);
  };

  const loadQuestions = async (id) => {
      const result = await axios.get(`http://localhost:8080/quiz/get-quiz-questions/${id}`);
      setQuestions(result.data);
  }

  useEffect(() => {
    setAnswers([]);
    loadQuestions(id);
  }, []);

  return (
    <div className='relative bg-gradient flex flex-col gap-1 justify-center items-center' id='questions'>
      <form className="flex flex-wrap flex-col gap-4 justify-start items-left w-[80%] py-20 px-30" onSubmit={onSubmit}>
        {
            questions.map((question) => {
                return(
                    <div className="flex flex-col justify-start items-left gap-2 w-[80%]" key={question.id}>
                      <h2 className="sm:text-[32px] text-[16px] font-Lemon">{question.question}</h2>
                      <p><span className='text-[#7E662A] font-bold'>1: </span>{question.option1}</p>
                      <p><span className='text-[#7E662A] font-bold'>2: </span>{question.option2}</p>
                      <p><span className='text-[#7E662A] font-bold'>3: </span>{question.option3}</p>
                
                      <div className="flex flex-col gap-1">
                          <label htmlFor='answer'>
                            Pick the correct option:  
                          </label>
                          <select name='answer' value ={answers.find((answer) => answer.id == question.id)?.response || ''} onChange={(e) => onChange(question.id, e.target.value)} className='bg-[whitesmoke] py-1 px-1 outline-none rounded text-black'>
                            <option value={question.option1}>{question.option1}</option>
                            <option value={question.option2}>{question.option2}</option>
                            <option value={question.option3}>{question.option3}</option>
                          </select>
                          
                      </div>

                    </div>
                )
            })
        }
        <button type='submit' className='w-[80%] py-1 px-2 bg-[#7E662A] text-white border-[#7E662A] border-2 hover:text-[#7E662A] hover:bg-transparent rounded-xl transition-all duration-300 ease-in-out mt-10'>Check Result</button>
      </form>
      <div className='py-1 px-2 bg-white text-black border-[#7E662A] border-2 w-[30%] rounded-xl transition-all duration-300 ease-in-out mb-10'>
        Your score: <span className='font-Lemon text-[#7E662A]'>{result}/{questions.length}</span>
      </div>
    </div>
  )
}

export default AnswerQuiz