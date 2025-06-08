import React from 'react';
import { Link } from 'react-router-dom';
import bubble from '../Asset/image/bubble-sort.png'
function ExplainerCard() {
  const cardData = [
    {
      src: bubble,
      alt: "3D Bubble Sort  Background",
      title: "Bubble Sort Visualizer",
      link: "/Algorithm/Sorting/bubble-sort"
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/83de498f-12ff-49a2-6221-d7332c754ab8.jpg",
      alt: "Whiteboard Animation Toolkit with 4 Characters Holding Sign",
      title: "Whiteboard animation toolkit",
      link: "/Algorithm/Sorting/bubble-sort"
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/44c510f4-0a33-4748-3ef8-e5ddc2d313b2.jpg",
      alt: "Trendy Typography Pack Blue Background with Text",
      title: "Trendy typography pack",
      link: "/Algorithm/Sorting/bubble-sort"
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/44c510f4-0a33-4748-3ef8-e5ddc2d313b2.jpg",
      alt: "Trendy Typography Pack Blue Background with Text",
      title: "Trendy typography pack",
      link: "/Algorithm/Sorting/bubble-sort"
    },
  ];

  return (
    <div className="bg-[#e9fbff] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-[#1f2e47] py-6 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto">
          Explore Algorithm Visualizers
        </h1>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {cardData.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                aria-label={`Go to ${item.title}`}
                className={`bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl ${
                  i >= 4 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                  height={350}
                  width={600}
                />
                {item.title && (
                  <div className="p-4 text-[#394867] text-sm sm:text-base">
                    {item.title}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplainerCard;
