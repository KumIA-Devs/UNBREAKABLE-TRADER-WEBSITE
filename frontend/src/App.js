import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemSection from './components/SystemSection';
import NotionShowcase from './components/NotionShowcase';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SystemSection />
      <div id="notion-showcase">
        <NotionShowcase />
      </div>
      <SuccessStories />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;