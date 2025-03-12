import React from 'react'
import './myprojects.css'
import { FiExternalLink } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
// import PropertyImg from './assets/Screenshot (19).png'
// import MqttDashboard from './assets/Screenshot (20).png'
// import NativeProject from './assets/project.jpeg'
const Myprojects = () => {
  return (<>
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='assets/todolist.png'//NativeProject

              alt="" style={{ height: '20%' }} />
          </div>
          <h3>MUI TodoList</h3>
          <small className='text-light'>React | MUI</small>
          <div className="portfolio__item-cta">
            {/* <div className="header__socials"> */}

            <a href="https://taupe-maamoul-032134.netlify.app/" target="_blank" rel='noreferrer'><FiExternalLink /></a>
            <a href="https://github.com/AlinaS012/MUI-todolist" target="_blank" rel='noreferrer'><BsGithub /></a>
            {/* </div> */}
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='assets/static-ecommerce.png'//NativeProject

              alt="" style={{ height: '20%' }} />
          </div>
          <h3>Static Shoe ecommerce site</h3>
          <small className='text-light'>React | Bootstrap</small>
          <div className="portfolio__item-cta">

            <a href="https://unrivaled-pasca-f3ffc0.netlify.app/" target="_blank" rel='noreferrer'><FiExternalLink /></a>
            <a href="https://github.com/AlinaS012/Stylish-Store" target="_blank" rel='noreferrer'><BsGithub /></a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={'assets/img1.png'//PropertyImg
            } alt="" />
          </div>
          <h3>Property Search App</h3>
          <small className='text-light'>React | Nest.js</small>
          <div className="portfolio__item-cta">
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={"assets/img3.png"//MqttDashboard
            } alt="" />
          </div>
          <h3>IOT Project Admin Dashboard</h3>
          <small className='text-light'>React | MUI | Node.js | AWS</small>
          <div className="portfolio__item-cta">
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='assets/project.jpeg'//NativeProject

              alt="" style={{ height: '20%' }} />
          </div>
          <h3>Bluetooth Tracking App</h3>
          <small className='text-light'>ReactNative | Bluetooth API</small>
          <div className="portfolio__item-cta">
          </div>

        </article>


      </div>
    </section>
  </>)
}

export default Myprojects