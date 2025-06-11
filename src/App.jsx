import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import this

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import ExplainerCard from './components/ExplainerCard';
import AiTools from './components/AiTools';
import StatsSection from './components/StatsSection';
import NewsletterSignup from './components/NewsletterSignup';
import BubbleSortVisualizer from './Algorithm/Sorting/BubbleSortVisualizer';
import InsertionSortVisualizer from './Algorithm/Sorting/InsertionSortVisualizer';
import QuickSortVisualizer from './Algorithm/Sorting/QuickSortVisualizer';
import SelectionSortVisualizer from './Algorithm/Sorting/SelectionSortVisualizer';
import MergeSortVisualizer from './Algorithm/Sorting/MergeSortVisualizer';
import HeapSortVisualizer from './Algorithm/Sorting/HeapSortVisualizer';
import BinarySearchVisualizer from './Algorithm/Searching/BinarySearchVisualizer';
import LinearSearchVisualizer from './Algorithm/Searching/LinearSearchVisualizer';
import StackVisualizer from './Algorithm/DSA/StackVisualizer';
import QueueVisualizer from './Algorithm/DSA/QueueVisualizer';
import BSTVisualizer from './Algorithm/Searching/BSTVisualizer';
import ArrayVisualizer from './Algorithm/DSA/ArrayVisualizer';
import Compiler from './components/Compiler/Compiler';

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
    <HelmetProvider> {/* ✅ Wrap entire app in HelmetProvider */}
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

            {/* Sorting Visualizers */}
            <Route path="/Algorithm/Sorting/bubble-sort" element={<BubbleSortVisualizer />} />
            <Route path="/Algorithm/Sorting/insertion-sort" element={<InsertionSortVisualizer />} />
            <Route path="/Algorithm/Sorting/quick-sort" element={<QuickSortVisualizer />} />
            <Route path="/Algorithm/Sorting/selection-sort" element={<SelectionSortVisualizer />} />
            <Route path="/Algorithm/Sorting/merge-sort" element={<MergeSortVisualizer />} />
            <Route path="/Algorithm/Sorting/heap-sort" element={<HeapSortVisualizer />} />

            {/* Searching Visualizers */}
            <Route path="/Algorithm/Searching/binary-search" element={<BinarySearchVisualizer />} />
            <Route path="/Algorithm/Searching/linear-search" element={<LinearSearchVisualizer />} />
            <Route path="/Algorithm/Searching/bst" element={<BSTVisualizer />} />

            {/* DSA Visualizers */}
            <Route path="/Algorithm/DSA/stack" element={<StackVisualizer />} />
            <Route path="/Algorithm/DSA/queue" element={<QueueVisualizer />} />
            <Route path="/Algorithm/DSA/array" element={<ArrayVisualizer />} />




              {/* Beta  Version  */}
            <Route path="/beta/compiler" element={<Compiler />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
