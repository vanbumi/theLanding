import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import SectionInfo from './components/sectionInfo';
import Highlight from './components/highlight';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{ height: "1500px", background: 'lightblue'}}>
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      
      <Element name="venuenfo">
        <SectionInfo />    
      </Element>
      
      
      <Element name="highlights">
        <Highlight />    
      </Element>

      <Element name="pricing">
        <Pricing />    
      </Element>
      
      <Element name="location">
        <Location />    
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;
