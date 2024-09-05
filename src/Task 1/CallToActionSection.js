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
  