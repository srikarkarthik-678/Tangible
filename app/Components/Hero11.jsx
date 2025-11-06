import React from 'react'
import Link from 'next/link'
const Hero11 = () => {
  return (
    <div>
      <div className="herocontains font-Ane bg-[#E8BC84]">
        <div className="herocontents">
            <div className="hero11">
                <div className="mainflex px-10">
                    <div className="leftflex text-center py-4">
                        <div className='text-2xl font-semibold'>
                            Get a Virtual Tour Of Airavatesvara Temple
                        </div>
                        <Link href="https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/darasuram/index.html"><button className='bg-black text-white p-2 rounded-xl mt-3'>Click For More</button></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero11
