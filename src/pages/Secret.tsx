import React from 'react';
import './Main.css';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import SecretContent from '../components/SecretContent';

export default function Main() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <SecretContent />
      </div>
    </div>
  )
}
