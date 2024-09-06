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
                src="/Work 1.png"
                alt="Work 1"
                style={{ width: "400px", height: "350px" }}
                className="mx-auto object-cover rounded-lg"
              />
            </div>
  
            {/* Second item */}
            <div className="text-center sm:mr-40">
          
              <img
                src="/Work 2.png"
                alt="Work 2"
                style={{ width: "400px", height: "350px" }}
                className="mx-auto object-cover rounded-lg"
              />
                
            </div>
  
            {/* Third item */}
            <div className="text-center sm:ml-40">
             
              <img
                src="/Work 3.png"
                alt="Work 3"
                style={{ width: "400px", height: "350px" }}
                className="mx-auto object-cover rounded-lg"
              />
            
            </div>
  
            {/* Fourth item */}
            <div className="text-center sm:mr-40">
              <img
                src="/Work 4.png"
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