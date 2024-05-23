
import React from 'react';
import './App.css';
import { Navbar, CTA } from './components';
import { Header, Skills, About, Comment, Footer, Portfolio, Achievement, ProjectDesscription } from './container'
import listPorfolio from './data/porfolio.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  console.log(listPorfolio);
  return (
    <BrowserRouter>
    
    <div className='App'>
      <div>
        <Navbar />       
      </div>
      <div className='bg_about'>
        <Header />
        <About />        
      </div>
      <div className='section__padding grid__gap'>
        <Skills />
        <CTA />
        <Achievement />
        <Portfolio />
        <Comment />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App


