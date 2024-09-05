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