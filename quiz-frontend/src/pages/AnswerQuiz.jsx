import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Question = ({question}) =>{
  
  const [answer, setAnswer] = useState("");

  const {response} = answer;

  return(
    <div className="flex flex-col justify-start items-left gap-2">
      <h2 className="text-[32px] font-Lemon">{question.question}</h2>
      <p><span className='text-[#7E662A] font-bold'>1: </span>{question.option1}</p>
      <p><span className='text-[#7E662A] font-bold'>2: </span>{question.option2}</p>
      <p><span className='text-[#7E662A] font-bold'>3: </span>{question.option3}</p>

      <div className="flex flex-col gap-1">
          <label htmlFor='answer'>
            Pick the correct option:  
          </label>
          <select name='answer' value ={response} onChange={(e) => onChange(e)} className='bg-[whitesmoke] py-1 px-1 outline-none rounded text-black'>
              <option value={question.option1}>{question.option1}</option>
              <option value={question.option2}>{question.option2}</option>
              <option value={question.option3}>{question.option3}</option>
            </select>
        </div>
    </div>
  )
}

const AnswerQuiz = () => {
  let navigate = useNavigate();

  const {id} = useParams();

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([]);


  const onChange = (e) => {
      setAnswers({...user,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e) =>{

  };

  const loadQuestions = async (id) => {
      const result = await axios.get(`http://localhost:8080/quiz/get-quiz-questions/${id}`);
      setQuestions(result.data);
  }

  useEffect(() => {
    loadQuestions(id);
  }, []);

  return (
    <div className='relative bg-gradient min-h-screen flex flex-col gap-4 justify-center items-center' id='questions'>
      <div className="flex flex-wrap flex-col gap-4 justify-start items-left w-[80%] py-20 px-30">
        {
            questions.map((question, index) => {
                return(
                    <Question question={question} />
                )
            })
        }
      </div>
    </div>
  )
}

export default AnswerQuiz