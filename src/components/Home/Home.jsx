import React from 'react';
import photo from '../../assets/fathy.jpg';
import { FaStar } from 'react-icons/fa';
import style from './Home.module.css';

export default function Home() {
  return (
    <div className={`${style.headerSection} d-flex flex-column align-items-center justify-content-center text-white py-5`}>
      
      <img 
        src={photo} 
        alt="Avatar" 
        className={`${style.fathy} img-fluid rounded-circle shadow mb-4`} 
      />

      <h1 className="fw-bold text-uppercase mb-4">fathy Abdalhamed</h1>

      <div className="d-flex align-items-center mb-3">
        <div className={style.line}></div>
        <FaStar className="mx-3" />
        <div className={style.line}></div>
      </div>

      <p className="fs-5">I am student at faculty of Artificial Intelligence; department cyber security. I am blending creativity with code to craft secure and modern web experiences</p>
    </div>
  );
}
