import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Header = () => {
  return (


    <header id='home'>
      {/* profile picture  */}
      {/* <div className='home__image' >
        <img src="assets/Popup-Login-Page-Example.jpg" />
      </div> */}
      {/*  profile picture */}
      <div className="container header__container">

        <h5>Hello, I'm</h5>
        <h1>Alina Soomro</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <p>
          I'm a <b>Full Stack Developer and MS Software Engineering Student</b>.


        </p>

        <CTA />

        {/* <HeaderSocials /> */}
        <div className='socials__header'>
          <div className='socials__header_a'><a href="https://www.linkedin.com/in/alina-mehdi-59308413a" target="_blank" rel='noreferrer'><BsLinkedin /></a></div>
          <div className='socials__header_a'><a href="https://github.com/AlinaS012" target="_blank" rel='noreferrer'><BsGithub /></a></div>

        </div>
        {/* <div className="me">

            <img src={me} alt='me'/>
          </div> */}

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>



  )
}

export default Header