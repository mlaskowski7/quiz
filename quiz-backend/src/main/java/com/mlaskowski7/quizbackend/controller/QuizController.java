package com.mlaskowski7.quizbackend.controller;


import com.mlaskowski7.quizbackend.model.QuestionWrapper;
import com.mlaskowski7.quizbackend.model.Questions;
import com.mlaskowski7.quizbackend.model.Response;
import com.mlaskowski7.quizbackend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("/create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numOfQues, @RequestParam String title){

        return quizService.createQuiz(category, numOfQues, title);

    }

    @GetMapping("/get-quiz/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id){
        return quizService.getQuizQuestions(id);
    }

    @PostMapping("submit-quiz/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> responses){
        return quizService.calculateResult(id, responses);
    }

}
