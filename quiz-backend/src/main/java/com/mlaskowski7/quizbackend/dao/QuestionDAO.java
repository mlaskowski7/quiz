package com.mlaskowski7.quizbackend.dao;

import com.mlaskowski7.quizbackend.model.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionDAO extends JpaRepository<Questions, Integer> {
    List<Questions> findByCategory(String category);

    @Query(value = "SELECT * FROM questions q Where q.category=:category ORDER BY RANDOM() LIMIT :numOfQues", nativeQuery = true)
    List<Questions> findRandomQuestionsByCategory(String category, int numOfQues);
}
