import React from 'react'
import './myprojects.css'
// import PropertyImg from './assets/Screenshot (19).png'
// import MqttDashboard from './assets/Screenshot (20).png'
// import NativeProject from './assets/project.jpeg'
const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

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

                 alt="" style={{ height: '20%'}} />
            </div>
            <h3>Bluetooth Tracking App</h3>
            <small className='text-light'>ReactNative | Bluetooth API</small>
            <div className="portfolio__item-cta">
            </div>
            
        </article>
        
        
      </div>
    </section>
  )
}

export default Myprojects