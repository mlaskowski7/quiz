import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const CreateQuiz = () => {

  let navigate = useNavigate();

    const [quiz, setQuiz] = useState({
        title:"",
        category:"",
        numOfQues:""
    });

    const{title, category, numOfQues} = quiz;

    const onChange = (e) => {
        setQuiz({...quiz,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/quiz/create?category=${category}&numOfQues=${numOfQues}&title=${title}`);
        navigate("/");

    };

  return (
    <div className='h-screen flex flex-col sm:flex-row gap-5 justify-center items-center'>
      <div className="flex flex-col gap-2 justify-center items-center w-[30%] ">
        <h1 className='text-[46px] font-Lemon'>Create<span className='text-[#7E662A] font-bold font-Lemon'> New Quiz</span></h1>
        <p>Fill in the form to generate your own quiz</p>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className='w-[60%] flex flex-col gap-4 justify-start items-left bg-white text-black p-8 sm:p-16 rounded-lg'>
        <div className="flex flex-col gap-1">
            <label htmlFor="title">
                Quiz Title:
            </label>
            <input type="text" name="title" className='bg-[whitesmoke] py-2 px-1 rounded' value={title} onChange={(e) => onChange(e)} placeholder='Provide title without spaces...' />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor='category'>
            Pick the category:  
          </label>
          <select name='category' value ={category} onChange={(e) => onChange(e)} className='bg-[whitesmoke] py-1 px-1 outline-none rounded'>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </select>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="numOfQues">
                Number Of Questions:
            </label>
            <input type="number" name="numOfQues" className='bg-[whitesmoke] py-2 px-1 rounded' value={numOfQues} onChange={(e) => onChange(e)} placeholder='Select the number of questions...' />
        </div>  
        <button type='submit' className='p-2 rounded bg-[#7E662A] text-white transition-all duration-300 ease-in-out border-2 font-semibold hover:text-[#7E662A] hover:bg-transparent hover:border-[#7E662A]'>
            Submit
        </button>
    </form>
    </div>
  )
}

export default CreateQuiz