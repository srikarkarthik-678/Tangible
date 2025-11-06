import React from 'react'

const Model = () => {
    return (
        <div>
            <div className="modeldetails font-Ane bg-[#E8BC84] hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent ">
                <div className="modelcontent">
                    <div className="mainflex flex justify-between items-center px-10">
                        <div className="leftflex flex flex-col  gap-5">
                            <div className='text-2xl font-semibold'>
                                Introduction to Airavatesvara Temple
                            </div>
                            <div className="leftflexfelx ">
                                <div className='font-semibold text-lg'>
                                    12th Century Marvel
                                </div>
                                <div>
                                    Commissioned and built during the reign of the powerful Chola king, Rajaraja Chola II (1146-1173 CE).
                                </div>
                            </div>
                            <div className="leftflexfelx">
                                 <div className='font-semibold text-lg'>
                                    UNESCO World Heritage

                                </div>
                                <div>
                                    Located in Darasuram, Tamil Nadu, it is one of the three Great Living Chola Temples recognised by UNESCO
                                </div>
                            </div>
                            <div className="leftflexfelx">
                                 <div className='font-semibold text-lg'>
                                    Dedicated to Lord Shiva
                                </div>
                                <div>
                                    The temple's name is derived from Airavat, the sacred white elephant of the Vedic god Indra
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/airavatesvara-temple-thanjavur-tamil-nadu-3-attr-hero.jpeg" alt="" className='w-[500px] rounded-xl'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Model
