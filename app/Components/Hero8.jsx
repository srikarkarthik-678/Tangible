import React from "react";

const Hero8 = () => {
  return (
    <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/toi3-1024x768.jpg"
            alt="Airavatesvara Temple"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full lg:w-1/2 text-[#3E2E12]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Airavatesvara Temple in the Global Context
          </h2>
          <p className="text-[16px] leading-relaxed mb-10">
            Recognised internationally for its profound historical and artistic
            value.
          </p>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Stat 1 */}
            <div>
              <h3 className="text-5xl font-extrabold text-[#3E2E12] mb-2">
                2004
              </h3>
              <h4 className="font-bold text-lg mb-1">
                UNESCO Recognition
              </h4>
              <p className="text-[15px] leading-relaxed">
                The year the temple was inscribed as part of the{" "}
                <b>Great Living Chola Temples</b> World Heritage Site.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-5xl font-extrabold text-[#3E2E12] mb-2">3</h3>
              <h4 className="font-bold text-lg mb-1">Chola Temple Cluster</h4>
              <p className="text-[15px] leading-relaxed">
                One of three major temples representing the architectural
                achievements of the <b>Chola Dynasty</b> (alongside
                Brihadeeswarar and Gangaikonda Cholapuram).
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-5xl font-extrabold text-[#3E2E12] mb-2">12</h3>
              <h4 className="font-bold text-lg mb-1">Century of Zenith</h4>
              <p className="text-[15px] leading-relaxed">
                Represents the culmination and artistic peak of{" "}
                <b>Chola architectural</b> and sculptural innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero8;
