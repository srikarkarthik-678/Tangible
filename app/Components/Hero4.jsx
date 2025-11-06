import React from "react";
import { Music, Hammer } from "lucide-react"; // optional icons

const Hero4 = () => {
    return (
        <div className="font-Ane bg-[#E8BC84] py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                {/* Left side — video */}
                <div className="flex justify-center">
                    <video
                        src="/WhatsApp Video 2025-11-05 at 22.36.50_4d1569ab.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-xl border-4 border-[#D4AF37]"
                        style={{ width: "320px", maxWidth: "800px" }}
                    />
                </div>

                {/* Right side — content */}
                <div className="text-[#3E2E12] max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left">
                        The Singing Steps: Ancient Acoustic Engineering
                    </h2>

                    {/* Two feature boxes */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                              
                            </div>
                            <h3 className="font-bold text-lg">Sapthas Swara Padalgal</h3>
                            <p className="mt-1 text-[15px] leading-relaxed">
                                A set of seven granite steps are famously known as the <b>'Singing Steps'</b> or <b>'Sapthas Swara Padalgal'</b>.
                            </p>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                
                            </div>
                            <h3 className="font-bold text-lg">Seven Musical Notes</h3>
                            <p className="mt-1 text-[15px] leading-relaxed">
                                Each step corresponds to one of the <b>seven musical notes</b> (Sa Ri Ga Ma Pa Da Ni) of Carnatic music when lightly tapped.
                            </p>
                        </div>
                    </div>

                    {/* Third section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            
                        </div>
                        <h3 className="font-bold text-lg">Precision Craftsmanship</h3>
                        <p className="mt-1 text-[15px] leading-relaxed">
                            This acoustic marvel demonstrates <b>Chola artisans' advanced knowledge</b> of material science and precise geometry for sound manipulation.
                        </p>
                    </div>

                    {/* Bottom text */}
                    <p className="mt-5 text-sm text-[#5a4020] leading-relaxed">
                        This technological feature highlights a sophisticated understanding of stone resonance and architectural design far ahead of its time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero4;
