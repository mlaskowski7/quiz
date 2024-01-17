# Quiz Application

This is a quiz application with a backend developed in Java Spring Framework, a frontend using Vite with React.js, and Tailwind CSS for styling. The database is powered by PostgreSQL. API endpoints were tested using Postman.

## Table of Contents

1. [Project Structure](#project-structure)
   - [Backend](#backend)
   - [Frontend](#frontend)

2. [Backend](#backend-1)
   - [Technologies Used](#technologies-used)
   - [API Endpoints](#api-endpoints)

3. [Frontend](#frontend-1)
   - [Technologies Used](#technologies-used-1)

4. [Development Setup](#development-setup)
   - [Clone the repository](#1-clone-the-repository)
   - [Install dependencies](#2-install-dependencies-for-the-backend-and-frontend)
   - [Run the servers](#3-run-the-backend-and-frontend-servers)

5. [Testing](#testing)
   - [API Endpoints Testing](#api-endpoints-testing)


## Project Structure

- `quiz-backend/`: Java Spring backend implementation.
- `quiz-frontend/`: React.js frontend with Vite and Tailwind CSS.

## Backend

### Technologies Used
- Java Spring Framework
- PostgreSQL

### API Endpoints

1. **Get All Questions:**
   - Endpoint: `http://127.0.0.1:8080/questions/all-questions`
   - Description: Retrieve all questions from the database.

2. **Create Quiz:**
   - Endpoint: `http://localhost:8080/quiz/create?category=JavaScript&numOfQues=10&title=Hard-Javascript-Quiz`
   - Description: Create a quiz with a specified category, number of questions, and title.

3. **Get Quiz Questions:**
   - Endpoint: `http://localhost:8080/quiz/get-quiz-questions/2`
   - Description: Retrieve questions for a specific quiz by providing the quiz ID.

4. **Submit Quiz:**
   - Endpoint: `http://localhost:8080/quiz/submit-quiz/1`
   - Description: Submit a quiz with responses. Provide the quiz ID in the endpoint.

5. **Get Quiz Title:**
   - Endpoint: `http://localhost:8080/quiz/get-quiz-title/3`
   - Description: Retrieve the title of a specific quiz by providing the quiz ID.

6. **Get All Quizzes:**
   - Endpoint: `http://localhost:8080/quiz/all`
   - Description: Retrieve a list of all quizzes.

## Frontend

### Technologies Used
- React.js
- Vite
- Tailwind CSS

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mlaskowski7/quiz.git
   
2. Install dependencies for the backend and frontend:
   ```bash
   cd backend
  mvn clean install
  cd ../quiz-frontend
  npm install

3. Run the backend and frontend servers:
   
  # In the backend directory
  ```bash
  mvn spring-boot:run
  ```
  # In the frontend directory
  ```bash
  npm run dev
  ```
4. Visit http://localhost:5173 in your browser to access the quiz application.

## Testing
API endpoints were tested using Postman.

### Feel free to contribute or open issues if you find any problems or have suggestions!

