import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Main } from './pages';

const App = () => {
  return (
    <div className='relative bg-gradient text-white'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;