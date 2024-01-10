package com.mlaskowski7.quizbackend.service;


import com.mlaskowski7.quizbackend.dao.QuestionDAO;
import com.mlaskowski7.quizbackend.model.Questions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionDAO questionDAO;

    public List<Questions> getAllQuestions(){
        return questionDAO.findAll();
    }


    public List<Questions> getQuestionsByCategory(String category) {
        return questionDAO.findByCategory(category);
    }
}
