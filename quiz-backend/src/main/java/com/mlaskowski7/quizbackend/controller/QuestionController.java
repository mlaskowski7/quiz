package com.mlaskowski7.quizbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @GetMapping("/all-questions")
    public String getAllQuestions(){
        return ("working");
    }
}
