import React from 'react';
import { Hero, Questions, Quizes } from '../components';
const Main = () => {
  return (
    <div className='h-screen relative'>
      <Hero />
      <Questions />
      <Quizes />
    </div>
  )
}

export default Main