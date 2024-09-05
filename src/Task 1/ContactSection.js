import './Styles.css';

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
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-4 md:mt-0 mb-8 md:mb-0 pb-16">
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
  