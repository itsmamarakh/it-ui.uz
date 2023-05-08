import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/MainPage/Home';
import Certification from './components/Certification/certification';
import Statistic from './components/Statistic/Statistic';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Certification />
      <Statistic/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main;
