package com.mlaskowski7.quizbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String question;
    private String category;
    private String option1;
    private String option2;
    private String option3;
    private String rightAnswer;
    private String difficultyLevel;



}
