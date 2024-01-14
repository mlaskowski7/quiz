import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const AnswerQuiz = () => {
  let navigate = useNavigate();

  const {id} = useParams();

  const [quiz, setQuiz] = useState({
      name:"",
      username:"",
      email:""
  });

  const{name, username, email} = user;

  const onChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e) =>{
      e.preventDefault();
      await axios.post(`http://localhost:8080/user/${id}`, user);
      navigate("/");

  };

  const loadQuiz = async () => {
      const result = await axios.get(`http://localhost:8080/qet-quiz-questions/${id}`);
      setUser(result.data);
  }

  useEffect(() => {
    loadQuiz();
  }, []);

  return (
    <div>AnswerQuiz</div>
  )
}

export default AnswerQuiz