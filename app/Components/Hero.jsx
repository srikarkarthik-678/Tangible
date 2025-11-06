import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="backgroundimg font-title">
        <div className="backgroundetails">
            <div className="background" style={{backgroundImage: "url('/3756c53e873f952ac3272a07056fe88d.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", width: "100%" }}>
                <div className="welcomesection flex justify-center items-center h-[100vh] text-white">
                    <div className="welcome   flex flex-col justify-center items-center gap-1">
                        <div className='text-4xl font-semibold text-[#EEDFC5]'>
                            Airavatesvara Temple, Darasuram,
                        </div>
                       <div className='text-4xl font-semibold text-[#EEDFC5]'>
                        Tamil Nadu
                       </div>
                       <div className='text-md font-Ane text-[#EEDFC5]'>
                        One of the Greatest living temples of Cholas - unfolding the beauty of miniature sculpture
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
