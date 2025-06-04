import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import ExplainerCard from './components/ExplainerCard';
import AiTools from './components/AiTools';
import StatsSection from './components/StatsSection';
import NewsletterSignup from './components/NewsletterSignup';
import BubbleSortVisualizer from './Algorithm/Sorting/BubbleSortVisualizer'; // Check this path
import InsertionSortVisualizer from './Algorithm/Sorting/InsertionSortVisualizer'; // Check this path

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const seenPopup = localStorage.getItem('seenHomePopup');
    if (!seenPopup) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem('seenHomePopup', 'true');
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen relative">
        {/* ✅ First-Time Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl max-w-md mx-auto shadow-xl text-center animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4 text-[#1f2943]">👋 Welcome!</h2>
              <p className="text-gray-700 mb-6">
                This Web Application is Only For Komal 
              </p>
              <button
                onClick={closePopup}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Let's Go
              </button>
            </div>
          </div>
        )}

        <Navbar />

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <MainContent />
                <FloatingButton />
                <ExplainerCard />
                <StatsSection />
                <AiTools />
                <NewsletterSignup />
             
              </>
            }
          />

          {/* Bubble Sort Visualizer */}
          <Route path="/Algorithm/Sorting/bubble-sort" element={<BubbleSortVisualizer />} />
          <Route path="/Algorithm/Sorting/insertion-sort" element={<InsertionSortVisualizer />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
