import React from "react";
import { HandCoins, TvMinimal, Users, Building2 } from "lucide-react";

const Hero7 = () => {
  return (
    <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
      <div className="text-[#3E2E12] text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Cultural & Religious Significance
        </h2>
      </div>

      {/* 2-column grid layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Column */}
        <div className="space-y-10">
          {/* 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Living Temple</h3>
              <p className="text-[15px] leading-relaxed">
                One of the oldest functional Hindu temples, with rituals and
                practices maintained continuously since the 12th century.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Global Attraction</h3>
              <p className="text-[15px] leading-relaxed">
                A major landmark promoting heritage tourism in Tamil Nadu,
                sharing the rich history of the Chola empire.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Yamatheertham Tank</h3>
              <p className="text-[15px] leading-relaxed">
                The sacred tank is associated with the legend of Yama, the God
                of Death, offering spiritual purification for pilgrims.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-left">
              <h3 className="font-bold text-lg mb-1">Shaivism Centre</h3>
              <p className="text-[15px] leading-relaxed">
                It remains a vital hub for Shaivism and a repository of{" "}
                <b>Tamil cultural heritage</b>, attracting scholars and devotees
                globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
