import React from 'react';

function AiTools() {
  return (
    <main className=" text-black max-w-7xl mx-auto px-6 py-12 font-['Inter']">
      <h1 className="text-center font-extrabold text-3xl sm:text-4xl mb-12 leading-tight">
        Find the Right{' '}
        <span className="text-[#f07fc7] font-extrabold">AI</span>{' '}
        <span className="text-[#8b7de9] font-extrabold">Tools</span> for You
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {/* Card 1 */}
        <article className="bg-[#c9f5ff] rounded-3xl p-8 flex flex-col justify-between">
          <div className="relative mb-8">
            <img
              src="https://storage.googleapis.com/a1aa/image/f30da4ba-d25e-4dd6-24ee-f5727e6ae775.jpg"
              alt="AI Video Gen"
              className="rounded-xl shadow-lg mx-auto"
              height={200}
              width={400}
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/eb109232-db0c-41ab-1913-5568e3be2322.jpg"
              className="absolute top-20 right-20 w-14 h-14 rounded-lg shadow-lg"
              alt="icon"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/37440d2e-59ad-4cbb-afa1-3db066ea34de.jpg"
              className="absolute bottom-16 right-16 w-16 h-16 rounded-lg shadow-lg"
              alt="cursor"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-24 bg-white rounded-md shadow-md px-6 py-2 flex items-center gap-2 text-sm sm:text-base font-semibold">
              A video for <span className="font-bold text-black">Pizza</span>{' '}
              delivery <span className="text-gray-400">service with AI</span>
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-lg mb-2">AI Video Generator</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              Create high-quality videos in minutes. Type in a prompt or
              script, pick a style, and watch our AI turn your idea into a
              professional video.
            </p>
            <a
              className="text-blue-700 font-medium inline-flex items-center gap-1 text-sm sm:text-base"
              href="#"
            >
              Explore the Tool <i className="fas fa-arrow-right" />
            </a>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-[#fff1b8] rounded-3xl p-8 flex flex-col justify-between">
          <div className="relative mb-8">
            <img
              src="https://storage.googleapis.com/a1aa/image/c3d08fce-45d4-4f02-9c59-be3d2d0a6c83.jpg"
              alt="Animation Tool"
              className="rounded-xl shadow-lg mx-auto"
              height={200}
              width={400}
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/eb109232-db0c-41ab-1913-5568e3be2322.jpg"
              className="absolute top-16 right-16 w-14 h-14 rounded-lg shadow-lg"
              alt="sparkle"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/efd62b74-022b-4954-ebb0-15454a940323.jpg"
              className="absolute bottom-16 left-8 w-20 h-14 rounded-lg shadow-md border border-white"
              alt="bicycle"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/a847e002-356c-48e3-ca1e-2d1e25196c57.jpg"
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-36 h-14 rounded-lg shadow-md border-2 border-pink-400"
              alt="family"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/b62716fc-1d54-4300-f07e-fa60cdc2d8d1.jpg"
              className="absolute bottom-16 right-8 w-20 h-14 rounded-lg shadow-md border border-white"
              alt="desk"
            />
            <div className="absolute top-16 left-6 flex flex-col gap-4 bg-white rounded-lg shadow-md p-2">
              {[
                'ef94a913-0a8e-40fe-2b5f-ce23a68e0b0c',
                'df8f0083-1233-4808-d41b-d40239675209',
                'ff286059-9784-4374-3c7b-1c6fdc38261c',
                '4009dd0b-eec8-4c9b-5dda-8930bfa3ecc9',
              ].map((id, i) => (
                <button
                  key={i}
                  className="w-8 h-8 bg-white rounded-md shadow flex items-center justify-center"
                >
                  <img
                    src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                    className="w-4 h-4"
                    alt={`icon-${i}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-lg mb-2">
              AI Animation Generator
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Make animated videos out of thin air. Our AI tool allows you to
              generate and personalize 2D, 3D, and whiteboard animations easily.
            </p>
            <a
              className="text-blue-700 font-medium inline-flex items-center gap-1 text-sm sm:text-base"
              href="#"
            >
              Explore the Tool <i className="fas fa-arrow-right" />
            </a>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-[#f3d7ff] rounded-3xl p-8 flex flex-col justify-between relative">
          <div className="relative mb-8">
            <img
              src="https://storage.googleapis.com/a1aa/image/3059e1cd-fbc8-49d5-8b1d-7ff2242d250b.jpg"
              alt="Text to Video"
              className="rounded-xl shadow-lg mx-auto"
              height={200}
              width={400}
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/eb109232-db0c-41ab-1913-5568e3be2322.jpg"
              className="absolute bottom-20 right-20 w-14 h-14 rounded-lg shadow-lg"
              alt="sparkle"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/37440d2e-59ad-4cbb-afa1-3db066ea34de.jpg"
              className="absolute bottom-16 right-16 w-16 h-16 rounded-lg shadow-lg"
              alt="cursor"
            />
          </div>
          <div>
            <h2 className="font-extrabold text-lg mb-2">Text to Video AI</h2>
            <p className="text-purple-900 text-sm sm:text-base mb-4 leading-relaxed">
              Turn your text into videos. Choose from over 10 different styles,
              type out your idea, and our AI will create a custom video for you
              in minutes.
            </p>
            <a
              className="text-blue-700 font-medium inline-flex items-center gap-1 text-sm sm:text-base"
              href="#"
            >
              Explore the Tool <i className="fas fa-arrow-right" />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default AiTools;
