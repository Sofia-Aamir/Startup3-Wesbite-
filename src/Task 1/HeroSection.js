import React, { useState } from 'react';
import './Styles.css'; // Import custom styles


export const HeroSection = () => {
  const images = [
    "url('https://s3-alpha-sig.figma.com/img/2e9d/962f/4c269f57807850115899b4611a2bf3ba?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYpCfu26UM-2m-EKQ2hk8tdSiAwyl4Tul5khE4byJs~qSPxwAqjDz5QImSKKzdiIpuZuKz0vTA8iC~s8ydVYln6YTTMR~oEc2FjiGTqvBYEAfTVw7EQoFx3UzJ1oCLCWCRkEH-IeJ0sHudS9beYJW4VvJr6aBZAGkUu5q6ofNvvwDSE5Eq7wa6FnOwzSAnq4Lm1W7qa~SntMf2pfPHvhpUluiUpLoKiANiZ~k7NaaIThCCN77eU1gOxiAoMc2THLJ53Dvu-UNnJZwxHoQv03RGs7A0Woou-bcTkoj1HtWUTdumulKlGtbPnw7g9TfNlDfx-~eKpa8XKOrJLlpQTB~A__')",
    "url('https://cdnvb4.haiper.ai/jobs/66d1fdd454c25c1d5be100d6/66d7473fd3c54b8d0f7dbcac/3.jpg')"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeBackground = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: images[currentImageIndex] }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#2F1893', opacity: 0.5 }}
      ></div>

      <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4">
        <nav
          className="flex justify-center space-x-8 text-lg mb-4"
          style={{ marginTop: '-7rem' }}
        >
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <div
              className="w-4 h-4 bg-white rounded-full relative"
              style={{ marginTop: '0.5rem' }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gray-500"></div>
              <div className="absolute top-1/4 left-1/4 transform rotate-45 w-0.5 h-4 bg-gray-500"></div>
              <div className="absolute top-1/4 right-1/4 transform -rotate-45 w-0.5 h-4 bg-gray-500"></div>
            </div>
            <a href="#" className="hover:text-gray-300">Be</a>
          </div>
        </nav>
        <div className="mt-10">
          <h1 className="text-2xl mb-2">Startup 3</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-72px">
            Forget About Code
          </h1>
          <div className="flex items-center justify-center mb-8 max-w-2xl">
            <p className="text-lg md:text-xl">
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white ml-4"
              style={{ marginLeft: '1rem', position: 'relative', right: '-1rem' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={changeBackground}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex space-x-2 mb-8">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
          Create an Account
        </button>
      </div>
    </div>
  );
};
