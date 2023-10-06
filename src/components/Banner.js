import React from 'react'
import logo from '../assets/logo.png';
import '../Style/Banner.css';

const Banner = () => {
  return (
    <div className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="title">
      <h1>La Maison Jungle</h1>
    </div>
  </div>
  )
}

export default Banner