import React from 'react';
import './Main.css';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import WritingContent from '../components/WritingContent';

export default function Writings() {
  return (
    <div className='main__body'>
      <Header />
      <div className='main__context'>
        <MainMenu />

        <WritingContent />
      </div>
    </div>
  )
}
