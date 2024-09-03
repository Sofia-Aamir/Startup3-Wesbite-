import React, { useState } from 'react';


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


export const NewSection = () => {
    return (
      <section className="relative h-[540px] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/495a/76ab/fa6125a690a426b8fcb3bbfd55392e02?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqzHr~Pgauqzi12exE8ADmcz2K5-MaQoyxbGM0fJkRem5F5IGNYDWBpXv02kZfHd9-NDajIT8cRl7tMi4hqxEning3Hn3VFpOfr-0vc-jB1SY7RHKcKWgQhIcTA9BL5aTWJuCRg4Ko1JLJxP1kIkNhSkfWxdl9yervfFlSLIyZb6KUXYi1vrVXv-Jx9d2JH9YPfchTtKhFQXg6oJ4RoDgdagDs2xm1lrjulcbqSS1YfTUTbyqw1k0ZAW-apvd90qtkWGKiESmS9juj48Xdt0551KGaLGxNlLrs-OolmyL2YjjBm-e5uhTpwpajQOML79swV2Stjm739lig9DPQI0QA__')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.5',
          }}
        ></div>
          <div className="absolute inset-0" style={{ backgroundColor: '#2F1893', opacity: 0.5 }}></div>
        <div className="relative text-center text-white px-4">
          <p className="text-sm mb-2">Free Sample</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
  <span className="block">Powerful Generator and Free</span>
  <span className="block">Figma Sources</span>
</h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </section>
    );
  };

  export const FeatureSection = () => {
    return (
      <section className="relative h-[600px] w-full py-16 px-4 md:px-16 flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/cd87/98ea/9e781bdf0627ed8d9186867e7b1d6a53?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Spa~nuln7uwdclYyIpKWm3N8rnD87smghPrW8mDRjbcy1--O2iH7VSTVl~OEYKGzevZjE84Qd01NsAD9sSz-3x65JxvA~GjPllYbif6BGRzTqYIhX7iW9ZUSd11eJsPLiVr5S29IrvJbgYbEtwNTad~kaPD4-RoLPmYI2TRwYLZEfaqnJoBFEI4FdsHFzmSBMG7fMSH9mW-VUNEgfd97lcUdiHjTqC~Cy7AGxOgWiF8LgP8-kNRKGWWtEC5kOt19Yd076SL0pUUHpdEjmTMBMaa3epCbqKmRpbv5VBoRQrXp1Z3-GJ82a2gD2tR21AZbDAPkDOpCKsgTvZhw1PfsfA__')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.9',
          }}
        ></div>
        {/* Optional Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#2F1893', opacity: 0.5 }}></div>
  
        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto">
          {/* Mockup Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/Mockup.png"
              alt="Mockup"
              className="w-[450px] h-[500px]"
            />
          </div>
  
          {/* Text and Features */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white mt-[-20px] md:pl-[-60px] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Create Something New</h2>
            <p className="text-lg md:text-xl mb-6">
              We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
            </p>
  
            {/* Feature Icons and Text */}
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="mb-6 md:mb-0">
                <div className="flex justify-center md:justify-start mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-1">30 New Feature Pages</h4>
                <p className="text-sm">Startup Framework contains components and complex blocks which can easily.</p>
              </div>
              <div className="mb-6 md:mb-0">
                <div className="flex justify-center md:justify-start mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m4 1.5V14a9.5 9.5 0 10-9.5 9.5H10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-1">Useful Symbol Components</h4>
                <p className="text-sm">Samples will show you the feeling on how to play around using the components.</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Dots on the right */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
          <div className="w-2 h-2 border border-white rounded-full"></div>
        </div>
      </section>
    );
  };
  