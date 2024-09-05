export const PricingSection = () => {
    // Features list for the pricing plans
    const starterFeatures = [
      { text: "2GB of space", highlighted: true },
      { text: "15 days of backup", highlighted: true },
      { text: "social integration", highlighted: true },
      { text: "client billing", highlighted: true },
      { text: "Remote access", highlighted: false },
      { text: "custom domain", highlighted: false },
      { text: "24 hours support", highlighted: false },
      { text: "admin tools", highlighted: false },
      { text: "collaboration tools", highlighted: false },
      { text: "user management", highlighted: false },
    ];
  
    const professionalFeatures = [
      { text: "2GB of space", highlighted: true },
      { text: "15 days of backup", highlighted: true },
      { text: "social integration", highlighted: true },
      { text: "client billing", highlighted: true },
      { text: "Remote access", highlighted: true },
      { text: "custom domain", highlighted: true },
      { text: "24 hours support", highlighted: true },
      { text: "admin tools", highlighted: false },
      { text: "collaboration tools", highlighted: false },
      { text: "user management", highlighted: false },
    ];
  
    const enterpriseFeatures = [
      "2GB of space",
      "15 days of backup",
      "social integration",
      "client billing",
      "Remote access",
      "custom domain",
      "24 hours support",
      "admin tools",
      "collaboration tools",
      "user management",
    ];
  
    return (
      <section className="relative min-h-[110vh] w-full flex flex-col items-center justify-start pt-16 pb-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/Mask (2).png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.9",
          }}
        ></div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2F1893] opacity-50"></div>
  
        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-white text-4xl font-bold mb-4">Plans & Pricing</h2>
  
          {/* Paragraph */}
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
          </p>
  
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            {/* Pricing Plan 1 */}
            <div className="border border-white rounded-lg p-4 sm:p-6 w-full sm:w-full md:w-3/4 lg:w-2/3 mx-auto mb-4 sm:mb-6">
              <h3 className="text-white text-2xl font-bold mb-4">Starter</h3>
              <h2 className="text-white text-4xl mb-4">$9.99</h2>
              <ul className="space-y-2 text-left">
                {starterFeatures.map((feature, index) => (
                  <li key={index} className="flex items-left">
                    <i
                      className={`fas fa-check text-green-500 mr-2 ${
                        feature.highlighted ? "" : "opacity-0"
                      }`}
                    ></i>
                    <span
                      className={`text-gray-300 ${
                        feature.highlighted ? "font-bold" : ""
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-transparent text-white font-bold py-2 px-4 border border-white rounded-full hover:bg-white hover:text-[#2F1893]">
                Get Started
              </button>
            </div>
  
            {/* Pricing Plan 2 */}
            <div className="border border-white rounded-lg p-4 sm:p-6 w-full sm:w-full md:w-3/4 lg:w-2/3 mx-auto mb-4 sm:mb-6">
              <h3 className="text-white text-2xl font-bold mb-4">Professional</h3>
              <h2 className="text-white text-4xl mb-4">$19.99</h2>
              <ul className="space-y-2 text-left">
                {professionalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-left">
                    <i
                      className={`fas fa-check text-green-500 mr-2 ${
                        feature.highlighted ? "" : "opacity-0"
                      }`}
                    ></i>
                    <span
                      className={`text-gray-300 ${
                        feature.highlighted ? "font-bold" : ""
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-[#E93A7D] text-white font-bold py-2 px-4 border border-white rounded-full hover:bg-white hover:text-[#2F1893]">
                Get Started
              </button>
            </div>
  
            {/* Pricing Plan 3 */}
            <div className="border border-white rounded-lg p-4 sm:p-6 w-full sm:w-full md:w-3/4 lg:w-2/3 mx-auto mb-4 sm:mb-6">
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise</h3>
              <h2 className="text-white text-4xl mb-4">$49.99</h2>
              <ul className="space-y-2 text-left">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-left">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-transparent text-white font-bold py-2 px-4 border border-white rounded-full hover:bg-white hover:text-[#2F1893]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };