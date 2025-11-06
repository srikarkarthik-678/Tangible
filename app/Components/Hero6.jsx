import React from "react";
import { Ruler, Hammer } from "lucide-react";

const Hero6 = () => {
  return (
    <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Image Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="/images (2).jpeg"
            alt="Airavatesvara Temple Architecture"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-[#3E2E12]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Architectural Technology & Construction Techniques
          </h2>

          {/* Content Card */}
          <div className="bg-[#E7AF73] rounded-2xl shadow-md p-6 divide-y divide-[#d69e5a]">
            {/* Row 1: Two Columns */}
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#d69e5a]">
              {/* Left Column */}
              <div className="flex-1 p-4">
                <h3 className="font-bold text-lg mb-2">Mortar-Free Construction</h3>
                <p className="text-[15px] leading-relaxed">
                  The structure was built using a traditional{" "}
                  <b>interlocking stone system</b>, achieving phenomenal
                  stability and earthquake resistance without the use of binding
                  mortar.
                </p>
              </div>

              {/* Middle Divider Icon */}
              <div className="flex justify-center items-center p-4">
                
              </div>

              {/* Right Column */}
              <div className="flex-1 p-4">
                <h3 className="font-bold text-lg mb-2">Geometric Precision</h3>
                <p className="text-[15px] leading-relaxed">
                  The temple follows a strict <b>symmetrical square plan</b> and
                  extensive geometric measurements, covering an area of
                  approximately 107m × 70m.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-start gap-4 p-4">
              
              <div>
                <h3 className="font-bold text-lg mb-2">Granite Shaping</h3>
                <p className="text-[15px] leading-relaxed">
                  Constructed primarily from hard granite, its precise shaping
                  and intricate carving suggest advanced techniques, possibly
                  involving heat or "stone melting" methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
