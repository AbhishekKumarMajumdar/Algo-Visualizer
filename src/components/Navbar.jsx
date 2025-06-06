import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [sortingSubmenuOpen, setSortingSubmenuOpen] = useState(false);
  const [searchingSubmenuOpen, setSearchingSubmenuOpen] = useState(false);
  const [dataStructureSubmenuOpen, setDataStructureSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setSubmenuOpen(false);
        setSortingSubmenuOpen(false);
        setSearchingSubmenuOpen(false);
        setDataStructureSubmenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-4 py-4 text-gray-700 text-sm relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          alt="Logo"
          className="w-10 h-10 cursor object-contain"
          onClick={() => handleNavigate("/")} 
          src="https://storage.googleapis.com/a1aa/image/6bc5fca2-5198-4c6d-3517-ceb42822e52a.jpg"
        />
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden z-30"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6 font-medium text-sm">
        <ul className="flex space-x-6">
          <li className="relative group cursor-pointer hover:text-purple-600">
            <div className="flex items-center">
              Algorithm
              <span className="ml-1 text-[9px] font-bold text-white bg-pink-500 rounded px-1 uppercase">Beta</span>
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.395a.75.75 0 011.02 1.1l-4.25 3.89a.75.75 0 01-1.02 0l-4.25-3.89a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
            <ul className="absolute left-0 top-full mt-1 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              {/* Sorting submenu */}
              <li className="relative group px-4 py-2 hover:bg-purple-100">
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Sorting</span>
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <ul className="absolute top-0 left-full ml-1 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/bubble-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Bubble Sort</li>
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/insertion-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Insertion Sort</li>
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/quick-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Quick Sort</li>
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/selection-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Selection Sort</li>
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/merge-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Merge Sort</li>
                  <li onClick={() => handleNavigate("/Algorithm/Sorting/heap-sort")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Heap Sort</li>
                </ul>
              </li>

              {/* Searching submenu */}
              <li className="relative group px-4 py-2 hover:bg-purple-100">
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Searching</span>
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <ul className="absolute top-0 left-full ml-1 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <li onClick={() => handleNavigate("/Algorithm/Searching/linear-search")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Linear Search</li>
                  <li onClick={() => handleNavigate("/Algorithm/Searching/binary-search")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Binary Search</li>
                </ul>
              </li>

              {/* Data Structures submenu */}
              <li className="relative group px-4 py-2 hover:bg-purple-100">
                <div className="flex justify-between items-center cursor-pointer">
                  <span>Data Structures</span>
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <ul className="absolute top-0 left-full ml-1 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <li onClick={() => handleNavigate("/DataStructure/stack")} className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Stack</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="hover:text-purple-600 cursor-pointer">Websites</li>
          <li className="hover:text-purple-600 cursor-pointer">Mockups</li>
          <li className="hover:text-purple-600 cursor-pointer">Designs</li>
        </ul>
        <img
          alt="UK flag"
          className="w-6 h-6 rounded-full cursor-pointer"
          src="https://storage.googleapis.com/a1aa/image/cf2a31db-93b5-4782-7a83-b2d7d6a2ffca.jpg"
        />
        <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">Sign In</button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-sm transform transition-transform z-40 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute top-4 right-4 z-50">
          <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl">&times;</button>
        </div>
        <div className="flex flex-col px-6 pt-20 space-y-6 text-gray-700 font-medium text-base">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setSubmenuOpen(!submenuOpen)}>
            <span className="flex items-center">
              Algorithm
              <span className="ml-2 text-xs font-bold text-white bg-pink-500 rounded px-1.5 py-0.5 uppercase">Beta</span>
            </span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${submenuOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {submenuOpen && (
            <ul className="pl-4 space-y-2">
              <div onClick={() => setSortingSubmenuOpen(!sortingSubmenuOpen)} className="cursor-pointer hover:text-purple-600 flex justify-between">
                <span>Sorting</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {sortingSubmenuOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/bubble-sort")}>Bubble Sort</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/insertion-sort")}>Insertion Sort</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/quick-sort")}>Quick Sort</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/selection-sort")}>Selection Sort</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/merge-sort")}>Merge Sort</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Sorting/heap-sort")}>Heap Sort</li>
                </ul>
              )}

              <div onClick={() => setSearchingSubmenuOpen(!searchingSubmenuOpen)} className="cursor-pointer hover:text-purple-600 flex justify-between">
                <span>Searching</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {searchingSubmenuOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Searching/linear-search")}>Linear Search</li>
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/Searching/binary-search")}>Binary Search</li>
                </ul>
              )}

              <div onClick={() => setDataStructureSubmenuOpen(!dataStructureSubmenuOpen)} className="cursor-pointer hover:text-purple-600 flex justify-between">
                <span>Data Structures</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {dataStructureSubmenuOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="cursor-pointer hover:text-purple-600" onClick={() => handleNavigate("/Algorithm/DSA/stack")}>Stack</li>
                </ul>
              )}
            </ul>
          )}
          <div className="cursor-pointer hover:text-purple-600">Websites</div>
          <div className="cursor-pointer hover:text-purple-600">Mockups</div>
          <div className="cursor-pointer hover:text-purple-600">Designs</div>
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
            <img
              alt="UK flag"
              className="w-6 h-6 rounded-full"
              src="https://storage.googleapis.com/a1aa/image/cf2a31db-93b5-4782-7a83-b2d7d6a2ffca.jpg"
            />
            <button className="border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100 w-full text-center">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
