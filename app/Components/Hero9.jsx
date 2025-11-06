import React from "react";

const Hero9 = () => {
  return (
    <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-[#3E2E12]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Legacy of Innovation & Spiritual Artistry
          </h2>

          <h3 className="text-[#FFD75E] font-semibold border-l-4 border-[#E0642C] pl-3 mb-6">
            A Fusion of Art, Science, and Devotion
          </h3>

          <p className="text-[16px] leading-relaxed mb-5">
            The Airavatesvara Temple stands as a magnificent testament to
            medieval Indian genius, demonstrating a seamless integration of
            artistic expression with engineering principles.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed">
            <li>
              Its architectural brilliance, including the chariot design,
              remains unparalleled.
            </li>
            <li>
              The advanced <b>acoustic technology</b> of the musical steps
              continues to captivate and inspire modern admiration.
            </li>
            <li>
              Preserving this spiritual and technological marvel ensures the
              continuation of a rich cultural legacy for the world.
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/_A_amazing_view_of_World_Heritage_Monument_Airavatesvara_Temple_.JPG"
            alt="Airavatesvara Temple"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero9;
