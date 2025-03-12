import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import "./header.css"

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/alina-mehdi-59308413a" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/AlinaS012" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials