import React from 'react';
import './Main.css';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import FreeContent from '../components/FreeContent';

export default function Free() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <FreeContent />
      </div>
    </div>
  )
}
