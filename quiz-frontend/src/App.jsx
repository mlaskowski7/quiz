import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { CreateQuiz, Main } from './pages';

const App = () => {
  return (
    <div className='relative bg-gradient text-white'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/create-quiz' element={<CreateQuiz />} />
          <Route exact path='/view-quizes' element={<CreateQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;