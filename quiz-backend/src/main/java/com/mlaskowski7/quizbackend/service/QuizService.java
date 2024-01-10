package com.mlaskowski7.quizbackend.service;

import com.mlaskowski7.quizbackend.dao.QuestionDAO;
import com.mlaskowski7.quizbackend.dao.QuizDao;
import com.mlaskowski7.quizbackend.model.Questions;
import com.mlaskowski7.quizbackend.model.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
