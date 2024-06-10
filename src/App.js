import React, { useEffect } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Banner from './components/Banner/Banner'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/App.scss'

export default function App () {
  useEffect(() => {
    document.title = "Sebastian Bartosik | Portfolio"
  }, []);

  return (
    <>
      <NavigationBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
