import React from "react";

const Hero5 = () => {
    return (
        <section className="bg-[#E8BC84] font-Ane py-16 px-10 hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                {/* Left Section - Text Content */}
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#3E2E12] mb-5">
                        Micro-Carving Mastery
                    </h2>
                    <p className="text-[#3E2E12] text-[16px] leading-relaxed mb-10">
                        The Airavatesvara Temple is a visual encyclopedia, etched with an
                        astonishing level of detail that borders on the microscopic.
                    </p>

                    {/* Feature Rows */}
                    <div className="space-y-8">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row items-start gap-10">
                            <div className="flex items-start gap-4">
                               
                                <div>
                                    <h3 className="font-bold text-[#3E2E12] text-lg">
                                        Intricate Iconography
                                    </h3>
                                    <p className="text-[#3E2E12] text-[15px] leading-relaxed">
                                        Panels depict stories from the epics, celestial dancers, and
                                        everyday life, all rendered with surgical precision.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                
                                <div>
                                    <h3 className="font-bold text-[#3E2E12] text-lg">
                                        Precision Tools
                                    </h3>
                                    <p className="text-[#3E2E12] text-[15px] leading-relaxed">
                                        The carvings suggest the use of tools far finer than typical
                                        chisels, allowing for detail invisible to the naked eye from
                                        a distance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-start gap-4">
                            <div>
                                <h3 className="font-bold text-[#3E2E12] text-lg">
                                    Unfaded Detail
                                </h3>
                                <p className="text-[#3E2E12] text-[15px] leading-relaxed">
                                    Despite 900 years of weathering, the sharpness of the lines
                                    and the expressiveness of the figures remain intact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Images */}
                <div className="flex flex-col gap-6">
                    <img
                        src="/Airavateshwarar_Gopuram.jpg"
                        alt="Airavatesvara Temple"
                        className="rounded-lg shadow-lg w-[300px] object-cover"
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default Hero5;
