import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <div className="footer_container">
        <span>Pour les pasionnee e-s des plantes </span>
        <span>Laissez-nous votre mail:</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="email_input"
        />
    </div>
  )
}

export default Footer