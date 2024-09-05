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
