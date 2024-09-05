export const FooterSection = () => {
    return (
      <footer className="bg-[#2F1893] text-white py-8">
        {/* Container for footer content */}
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
  
          {/* Left side: Startup3 */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">Startup3</h2>
          </div>
  
          {/* Right side: Policy, Terms, Icons */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Links */}
            <div className="flex space-x-6">
              <a href="#policy" className="hover:underline">Private Policy</a>
              <a href="#terms" className="hover:underline">Terms</a>
            </div>
  
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter text-xl hover:text-gray-300"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook text-xl hover:text-gray-300"></i>
              </a>
              <a href="https://google.com" aria-label="Google">
                <i className="fab fa-google text-xl hover:text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Horizontal Line */}
        <div className="border-t border-gray-400 my-4"></div>
  
        {/* Bottom Section: Features and Copyright */}
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Features */}
          <div className="flex space-x-6 text-sm">
            {[
              "Tour",
              "Features",
              "Pricing Plan",
              "Our Work",
              "Brands",
              "Contacts"
            ].map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
  
          {/* Copyright */}
          <div className="text-sm">
            © 2017 Designmodo. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  