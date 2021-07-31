import React from 'react'
import './MainMenu.css'
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div class='menu__wrapper'>
      <ul className='menu__body'>
        <Link to='free'><li>자유게시판</li></Link>
        <Link to='school'><li>학교 소식</li></Link>
        <Link to='honey'><li>꿀팁게시판</li></Link>
        <Link to='view-rank'><li>조회수 많은 글</li></Link>
        <Link to='like-rank'><li>좋아요 많은 글</li></Link>
        <Link to='comment-rank'><li>댓글 많은 글</li></Link>
        <Link to='secret'><li>비밀게시판</li></Link>

      </ul>
    </div>
  )
}
