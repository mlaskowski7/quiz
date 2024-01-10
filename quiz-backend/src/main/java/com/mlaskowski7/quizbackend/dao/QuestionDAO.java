package com.mlaskowski7.quizbackend.dao;

import com.mlaskowski7.quizbackend.model.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionDAO extends JpaRepository<Questions, Integer> {
    List<Questions> findByCategory(String category);
}
