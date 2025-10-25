
























// src/App.js


import React from 'react';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import Services from './components/Services';
import About from './components/About';
import WeOffers from './components/WeOffers'; 
import ProductQuality from './components/ProductQuality';
import AgricultureGrowthSection from './components/AgricultureGrowthSection';
import Contact from './components/Contact';  
import BlogsCard from './components/BlogsCard';
import FarmerStory from './components/FarmerStory';
import Footer from './components/Footer'; 
import ScrollToNav from "./components/ScrollToNav";

import './App.css'; 
// You would create and import other components like Projects, Blog, etc.

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <MainSlider />
      <About /> 
      <WeOffers/>  
      <ProductQuality />
      <Services />
      <AgricultureGrowthSection />  
      {/* Add other components here in the correct order */}
      <Contact /> 
      <BlogsCard />
      <FarmerStory />
      <Footer />
      <ScrollToNav showAfter={200} />

      {/* Mobile Nav and Search Popup can be included here or in their own components */}
       <div className="mobile-nav__wrapper">
            {/* ... mobile nav content ... */}
       </div>
       <div className="search-popup">
            {/* ... search popup content ... */}
       </div>
       <a href="/#" data-target="" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
    </div>
  );
}

export default App;

