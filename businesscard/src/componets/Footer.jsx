import React from 'react'
import './Footer.css';
import { FaLinkedinIn,FaTwitter,FaInstagram,FaFacebook,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      
        <a href=""><FaLinkedinIn/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaInstagram/></a>
        <a href=""><FaFacebook/></a>
        <a href=""><FaGithub/></a>
        
    </div>
  )
}

export default Footer