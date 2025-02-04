import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'
const App = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: "all"
  })
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },  
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    },
  };
  // useEffect(()=>{
  //   console.log(`${isInView} isInView`)
  // },[isInView])
  return (

    <div>
      {[
        <Header />,
        <Nav />,
        <About />,
        <Experience />,
        <Myprojects />,
        <Contacts />,
        <Footer />,
      ].map((Component, index) => (
        <motion.div
          key={index}
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >
          {Component}
        </motion.div>
      ))}
    </div>
  )
}

export default App
