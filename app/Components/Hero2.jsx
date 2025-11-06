import React from 'react'

const Hero2 = () => {
    return (
        <div>
            <div className="localtiondetails font-Ane bg-[#E8BC84] ">
                <div className="locationcontent">
                    <div className='border border-black p-10 mt-2 rounded-xl hover:bg-[#E6A961] 
          hover:border-[#E0752C] 
          hover:border 
          border-transparent '>
                        <div className="location flex justify-between items-center ">
                            <div className="leftitem flex flex-col  gap-3 justify-center">
                                <div className='text-2xl font-semibold'>
                                    Location
                                </div>
                                <div>
                                    The magnificent Airavatesvara, situated in Darasuram near Kumbakonam, is a UNESCO World Heritage site. Built in the 12th century CE by Rajaraja Chola II, it is a testament to the rich history of Thanjavur district.
                                </div>
                                <div>
                                    <div className=''>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1982737600856!2d79.35397307451923!3d10.94839025599931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd15bd8b0bbb%3A0xedd65959af78b9ea!2sAiravatesvara%20Temple!5e0!3m2!1sen!2sin!4v1762375619102!5m2!1sen!2sin"
                                            width="330"
                                            height="190"
                                            style={{
                                                border: 0,
                                                borderRadius: "1rem",
                                            }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="img border border-none rounded-xl">
                                <img src="/darasuram-airavateswara.jpg" alt="" className='rounded-xl' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero2
