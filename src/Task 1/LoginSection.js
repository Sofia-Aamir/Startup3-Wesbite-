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
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-4 md:mt-0 mb-8 md:mb-0 pb-16">
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