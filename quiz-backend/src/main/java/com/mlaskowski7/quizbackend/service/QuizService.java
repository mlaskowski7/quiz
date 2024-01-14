package com.mlaskowski7.quizbackend.service;

import com.mlaskowski7.quizbackend.dao.QuestionDAO;
import com.mlaskowski7.quizbackend.dao.QuizDao;
import com.mlaskowski7.quizbackend.model.QuestionWrapper;
import com.mlaskowski7.quizbackend.model.Questions;
import com.mlaskowski7.quizbackend.model.Quiz;
import com.mlaskowski7.quizbackend.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;

    @Autowired
    QuestionDAO questionDAO;

    public ResponseEntity<String> createQuiz(String category, int numOfQues, String title){

        List<Questions> questions = questionDAO.findRandomQuestionsByCategory(category, numOfQues);

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizDao.save(quiz);

        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }

    public ResponseEntity<String> getQuizTitle(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        return new ResponseEntity<String>(quiz.get().getTitle(), HttpStatus.OK);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Questions> questionsFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionsForUser = new ArrayList<>();
        for(Questions q : questionsFromDB){
            QuestionWrapper qw = new QuestionWrapper(q.getId(), q.getQuestion(), q.getOption1(), q.getOption2(), q.getOption3());
            questionsForUser.add(qw);
        }
        return new ResponseEntity<>(questionsForUser, HttpStatus.OK);
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz = quizDao.findById(id).get();
        List<Questions> questions = quiz.getQuestions();

        int i = 0;
        int result = 0;
        for(Response response : responses){
            if(response.getResponse().equals(questions.get(i).getRightAnswer())){
                result++;
            }
            i++;
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
