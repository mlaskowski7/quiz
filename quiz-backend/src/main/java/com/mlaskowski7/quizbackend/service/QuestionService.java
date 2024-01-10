package com.mlaskowski7.quizbackend.service;


import com.mlaskowski7.quizbackend.dao.QuestionDAO;
import com.mlaskowski7.quizbackend.model.Questions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionDAO questionDAO;

    public ResponseEntity<List<Questions>> getAllQuestions(){
        try{
            return new ResponseEntity<>(questionDAO.findAll(), HttpStatus.OK);
        } catch (Exception error){
            error.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

    }


    public ResponseEntity<List<Questions>> getQuestionsByCategory(String category) {
        return new ResponseEntity<>(questionDAO.findByCategory(category), HttpStatus.OK );
    }
}
