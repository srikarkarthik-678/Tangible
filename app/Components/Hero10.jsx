import React from "react";

const Hero10 = () => {
  return (
    <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent">
      <div className="max-w-6xl mx-auto text-[#3E2E12]">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          How Did They Tune Stone?
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] leading-relaxed mb-10">
          Modern acousticians and material scientists are still baffled by the
          precision achieved by the Chola builders without contemporary tools.
        </p>

        {/* 3-Column Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="border border-[#dba86c] rounded-xl bg-[#f3c892]  transition-all duration-300 ease-in-out p-6 shadow-sm hover:shadow-md">
            <h3 className="font-bold text-lg mb-2">Material Density Control</h3>
            <p className="text-[15px] leading-relaxed">
              How were the artisans able to select or modify stones to achieve
              the exact required density for specific vibrational frequencies?
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#dba86c] rounded-xl bg-[#f3c892]  transition-all duration-300 ease-in-out p-6 shadow-sm hover:shadow-md">
            <h3 className="font-bold text-lg mb-2">
              Precise Carving and Shaping
            </h3>
            <p className="text-[15px] leading-relaxed">
              The exact size, shape, and internal cavities of the stone steps
              were seemingly calculated to resonate at specific notes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#dba86c] rounded-xl bg-[#f3c892] transition-all duration-300 ease-in-out p-6 shadow-sm hover:shadow-md">
            <h3 className="font-bold text-lg mb-2">Acoustic Isolation</h3>
            <p className="text-[15px] leading-relaxed">
              The stones must be acoustically isolated from the surrounding
              structure to produce clear, distinct tones without dampening.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-l-4 border-[#E0642C] pl-4 py-3 bg-[#F6D29E] rounded-md shadow-sm">
          <span className="text-[#3E2E12] text-[15px] leading-relaxed">
            <span className="font-bold text-[#d22b2b] bg-yellow-200 px-1">
              Still unexplained:
            </span>{" "}
            The lack of any known acoustic measuring tools or theoretical texts
            from the period makes this achievement even more astounding.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero10;
