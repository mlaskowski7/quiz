package com.mlaskowski7.quizbackend.controller;

import com.mlaskowski7.quizbackend.model.Questions;
import com.mlaskowski7.quizbackend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    QuestionService questionService;
    @GetMapping("/all-questions")
    public List<Questions> getAllQuestions(){
        return (questionService.getAllQuestions());
    }

    @GetMapping("/category/{category}")
    public List<Questions> getQuestionsByCategory(@PathVariable String category){
        return questionService.getQuestionsByCategory(category);
    }
}
