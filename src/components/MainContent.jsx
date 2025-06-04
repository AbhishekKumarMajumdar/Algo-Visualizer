import React from 'react';

function MainContent() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 lg:py-24 py-8 flex flex-col lg:flex-row justify-around items-center gap-12">
      {/* Left Section */}
      <section className="max-w-lg space-y-6">
        <h1 className="text-5xl font-black text-gray-900">
          Empower Your{' '}
          <span className="text-pink-500">Learning with </span>
          <span className="text-[#8b7de9] font-extrabold">Visual Algorithms</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Dive into complex algorithms through interactive visualizers and explore hands-on projects across AI/ML, Web, Android, AR/VR, and more — all in one platform crafted for curious minds.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700">
          Start Free Now
        </button>
      </section>

      {/* Right Section with Responsive Video */}
      <section className="w-full max-w-2xl shadow-2xl rounded-3xl p-6 bg-white">
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 p-2 rounded-3xl">
          <div className="rounded-2xl aspect-video overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/-mY4B5Gz8LY?si=CpWEDB9hd81t6nhw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
