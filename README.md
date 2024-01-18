# Quiz Application

This is a quiz application with backend developed in Java Spring Framework, frontend using Vite with React.js, and Tailwind CSS for styling. The database is powered by PostgreSQL. API endpoints were tested using Postman.

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

5. [Testing](#testing)
   
6. [Screenshots](#screenshots)


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
   cd quiz backend
   mvn clean install
   cd ../quiz-frontend
  	npm install

3. Run the backend and frontend servers:
   
  1. In the backend directory
  ```bash
  mvn spring-boot:run
  ```
  2. In the frontend directory
  ```bash
  npm run dev
  ```
4. Visit http://localhost:5173 in your browser to access the quiz application.

## Testing
API endpoints were tested using Postman.

## Screenshots
   1. Main Page
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/5e1ea505-0102-4447-b3e6-b542a1916913)
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/2e2b45e6-978b-42ff-8671-b3009b8925c3)

   2. View Quizes Page
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/6149d026-830c-449a-8b00-4bd72fda8db2)

   3. Create Quiz Page
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/f925aa0c-5cb9-49e5-8fd3-789bf956912f)

   4. Answer Quiz Page
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/25ac9206-5d92-480f-96c6-0cfb640dbe8b)
   ![image](https://github.com/mlaskowski7/quiz/assets/144243838/a543d0ac-65a2-4d77-8ec4-736d78a77653)


### Feel free to contribute or open issues if you find any problems or have suggestions!

