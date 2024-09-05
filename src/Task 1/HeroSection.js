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
        <section className="relative h-auto w-full py-10 px-4 md:px-16 flex items-center">
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
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
                {/* Laptop Image */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="/Mockup.png"
                        alt="Mockup"
                        className="w-[500px] h-[400px] relative top-[10px] left-[-200px]"
                    />
                </div>

              {/* Text and Features */}
              <div className="relative w-full md:w-1/2 text-left text-white mt-[20px] transform md:-translate-x-[220px] flex flex-col">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
      We Create Something New
  </h2>
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

            <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-[250px] flex flex-col space-y-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 border border-white rounded-full"></div>
                <div className="w-2 h-2 border border-white rounded-full"></div>
                <div className="w-2 h-2 border border-white rounded-full"></div>
                <div className="w-2 h-2 border border-white rounded-full"></div>
            </div>

        </section>
    );
};

export const LoginSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/495a/76ab/fa6125a690a426b8fcb3bbfd55392e02?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqzHr~Pgauqzi12exE8ADmcz2K5-MaQoyxbGM0fJkRem5F5IGNYDWBpXv02kZfHd9-NDajIT8cRl7tMi4hqxEning3Hn3VFpOfr-0vc-jB1SY7RHKcKWgQhIcTA9BL5aTWJuCRg4Ko1JLJxP1kIkNhSkfWxdl9yervfFlSLIyZb6KUXYi1vrVXv-Jx9d2JH9YPfchTtKhFQXg6oJ4RoDgdagDs2xm1lrjulcbqSS1YfTUTbyqw1k0ZAW-apvd90qtkWGKiESmS9juj48Xdt0551KGaLGxNlLrs-OolmyL2YjjBm-e5uhTpwpajQOML79swV2Stjm739lig9DPQI0QA__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.9",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2F1893] opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-4 md:px-8 space-y-4 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white p-6 md:pr-8 mb-8 md:mb-0 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            We solve digital<br />
            problems with an<br />
            outstanding<br />
            creative flare
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mx-auto md:mx-0" style={{ maxWidth: "30ch" }}>
            We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-4 md:mt-0 mb-8 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between mb-4">
              <div className="w-1/2 text-center">
                <h3 className="text-md md:text-lg font-bold mb-2">Sign Up</h3>
                <hr className="border-gray-300 mb-4 mx-auto w-3/4" />
              </div>
              <div className="w-1/2 text-center">
                <h3 className="text-md md:text-lg font-bold mb-2">Login</h3>
                <hr className="border-gray-300 mb-4 mx-auto w-3/4" />
              </div>
            </div>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Your password"
                className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full h-12 bg-[#25DAC5] text-white rounded-full hover:bg-[#20c4b0] focus:outline-none focus:ring-2 focus:ring-[#20c4b0]"
              >
                Create an Account
              </button>
              <p className="text-center text-gray-600 mt-2">or</p>
              <button
                type="button"
                className="w-full h-12 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1991e6] focus:outline-none focus:ring-2 focus:ring-[#1991e6]"
              >
                Login via Twitter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialSection = () => {
  return (
    <section className="bg-[#1E0E62] py-7">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold text-left mb-10 sm:ml-40">Our Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5">
          {/* Adjusted negative margins only for larger screens using sm: */}
          <div className="flex justify-center items-center sm:ml-40"> {/* Positive margin-left to move right */}
  <div className="bg-[#26177d] rounded-lg p-6 flex items-start gap-3 text-left border border-white"
       style={{ width: '400px', height: '237px' }}>
    <img src="mockup.png" alt="Rayhan Curran" className="w-16 h-16 rounded-full" />
    <div>
      <p className="text-sm leading-6 mb-1">
        Get a fully retina ready site when
        you build with Startup Framework.
        Websites look sharper and more
        gorgeous on devices with retina
        display support.
      </p>
      <p className="font-medium mt-10">Rayhan Curran</p>
    </div>
  </div>
</div>

          <div className="flex justify-center items-center sm:mr-40"> {/* Negative margin-left reduced */}
            <div className="bg-[#26177d] rounded-lg p-6 flex items-start gap-3 text-left border border-white"
                 style={{ width: '400px', height: '237px' }}>
              <img src="mockup.png" alt="Kayley Frame" className="w-16 h-16 rounded-full" />
              <div>
                <p className="text-sm leading-6 mb-1">
                  As a business targeting high net
                  worth individuals, we were looking
                  for a slick, cool and minimalistic
                  design for our website.
                </p>
                <p className="font-medium mt-20">Kayley Frame</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:ml-40"> {/* Adjust negative margins for consistency */}
            <div className="bg-[#26177d] rounded-lg p-6 flex items-start gap-3 text-left border border-white"
                 style={{ width: '400px', height: '237px' }}>
              <img src="mockup.png" alt="Gene Whitfield" className="w-16 h-16 rounded-full" />
              <div>
                <p className="text-sm leading-6 mb-1">
                  The most important part of the
                  Startup Framework is the samples
                </p>
                <p className="font-medium mt-20">Gene Whitfield</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:mr-40"> {/* Adjust negative margins for consistency */}
            <div className="bg-[#26177d] rounded-lg p-6 flex items-start gap-3 text-left border border-white"
                 style={{ width: '400px', height: '237px' }}>
              <img src="mockup.png" alt="Allan Kim" className="w-16 h-16 rounded-full" />
              <div>
                <p className="text-sm leading-6 mb-1">
                  I've built my website with Startup
                  just in one day, and it was
                  ready-to-go.
                </p>
                <p className="font-medium mt-20">Allan Kim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CallToActionSection = () => {
  return (
    <section
       className="relative min-h-[70vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1541972621150-b7a509e9c114?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.9",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2F1893] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white space-y-6">
        {/* Headline */}
        <h2 className="text-4xl font-bold">
          Easy to setup.<br />Easy to maintain.
        </h2>

        {/* Paragraph */}
        <p className="text-lg max-w-lg mx-auto">
          Bootstrap is a widely-used, sleek, intuitive, and powerful front-end framework for faster and easier web development.
        </p>

        {/* YouTube icon and Get Started button */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          {/* YouTube Icon */}
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-1.412-.934-4.92-1.184-7.615-1.184s-6.203.25-7.615 1.184c-1.604 1.063-1.681 3.874-1.681 8.816s.078 7.754 1.681 8.816c1.412.934 4.92 1.184 7.615 1.184s6.203-.25 7.615-1.184c1.603-1.062 1.681-3.874 1.681-8.816s-.078-7.753-1.681-8.816zm-10.615 11.816v-7l6 3.501-6 3.499z"/>
            </svg>
          </div>

          {/* Get Started Button */}
          <button
            className="bg-[#25DAC5] text-white font-bold py-3 px-8 rounded-full"
            style={{ width: '213px', height: '70px' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export const ShowcaseSection = () => {
  return (
    <section className="bg-[#1E0E62] py-16">
      <div className="container mx-auto px-4">
        {/* Top section: Last Work heading and View All Work button */}
        <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold  text-white">Last Work</h2>

          <button className="bg-[#25DAC5] text-white font-bold py-3 px-8 rounded-full ">
            View All Work
          </button>
        </div>

        {/* Grid section: 2 rows and 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-0"> {/* Adjusted horizontal gap */}
          {/* First item */}
          <div className="text-center sm:ml-40">
      
            <img
              src="/work 1.png"
              alt="Work 1"
              style={{ width: "400px", height: "350px" }}
              className="mx-auto object-cover rounded-lg"
            />
          </div>

          {/* Second item */}
          <div className="text-center sm:mr-40">
        
            <img
              src="/work 2.png"
              alt="Work 2"
              style={{ width: "400px", height: "350px" }}
              className="mx-auto object-cover rounded-lg"
            />
              
          </div>

          {/* Third item */}
          <div className="text-center sm:ml-40">
           
            <img
              src="/work 3.png"
              alt="Work 3"
              style={{ width: "400px", height: "350px" }}
              className="mx-auto object-cover rounded-lg"
            />
          
          </div>

          {/* Fourth item */}
          <div className="text-center sm:mr-40">
            <img
              src="/work 4.png"
              alt="Work 4"
              style={{ width: "400px", height: "350px" }}
              className="mx-auto object-cover rounded-lg"
            />
             
          </div>
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  return (
    <section className="bg-[#1E0E62] py-16">
      <div className="container mx-auto px-4">
        {/* Top section: StartUp Crew heading and paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">StartUp Crew</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
          </p>
        </div>

        {/* Grid section: 3 columns in the first row and 2 columns in the second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* First item */}
          <div className="text-center p-6 rounded-lg">
            <img
              src="/Mask.png"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-1 text-white">Leah Salomon</p>
            <p className="text-sm mb-4 text-white">UI Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-xs">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-xs">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>

          {/* Repeat for other team members */}
          {/* Second item */}
          <div className="text-center p-6 rounded-lg">
            <img
              src="/Userpic2.png"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-1 text-white">Colin Timmons</p>
            <p className="text-sm mb-4 text-white">UX Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-xs">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-xs">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>

          {/* Third item */}
          <div className="text-center p-6 rounded-lg ">
            <img
              src="/Userpic.png"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-1 text-white">Miguel Osborne</p>
            <p className="text-sm mb-4 text-white">Frontend web Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-xs">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-xs">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>

          {/* Fourth item */}
          <div className="text-center p-6 rounded-lg ">
            <img
              src="/Mask (1).png"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-1 text-white">Taylor Simon</p>
            <p className="text-sm mb-4 text-white">Project Manager</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-xs">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-xs">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>

          {/* Fifth item */}
          <div className="text-center p-6 rounded-lg">
            <img
              src="/Userpic3.png"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold mb-1 text-white">Steven MacAlister</p>
            <p className="text-sm mb-4 text-white">Copy Writer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 text-xs">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700 text-xs">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-xs">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-xs">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Background (1).png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.9",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2F1893] opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-4 md:px-8 space-y-4 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white p-6 md:pr-8 mb-12 md:mb-0 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Let's Keep in Touch
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mx-auto md:mx-0 mb-6" style={{ maxWidth: "30ch" }}>
            We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <i className="fas fa-phone h-6 w-6 text-white"></i>
              <span className="ml-2 text-gray-300">+1 555 505 5050</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope h-6 w-6 text-white"></i>
              <span className="ml-2 text-gray-300">info@designmodo.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-building h-6 w-6 text-white"></i>
              <span className="ml-2 text-gray-300">
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
              </span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-4 md:mt-0 mb-8 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <form className="flex flex-col space-y-6">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First name"
                    style={{ width: "100%" }} // Adjust the percentage as needed
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="budget" className="block text-gray-700 text-sm font-bold mb-2">
                    Budget
                  </label>
                  <div className="flex items-center justify-start">
                    <span className="bg-[#25DAC5] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                     $ 500
                      <i className="fas fa-arrow-right ml-2 text-white"></i> {/* Add arrow icon */}
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col">
                <label htmlFor="input-field" className="block text-gray-700 text-sm font-bold mb-2">
                  Input Field
                </label>
                <input
                  type="text"
                  id="input-field"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Input field"
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" id="copy" className="custom-checkbox mr-2" />
                  <label htmlFor="copy" className="text-gray-700 text-sm">
                    Send me a copy
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#25DAC5] hover:bg-[#20c4b0] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
