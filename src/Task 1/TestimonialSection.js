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
      <img src="Userpic.png" alt="Rayhan Curran" className="w-16 h-16 rounded-full" />
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
                <img src="Userpic2.png" alt="Kayley Frame" className="w-16 h-16 rounded-full" />
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
                <img src="Userpic3.png" alt="Gene Whitfield" className="w-16 h-16 rounded-full" />
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
                <img src="Mask.png" alt="Allan Kim" className="w-16 h-16 rounded-full" />
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