package com.mlaskowski7.quizbackend.dao;

import com.mlaskowski7.quizbackend.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizDao extends JpaRepository<Quiz, Integer> {
}
