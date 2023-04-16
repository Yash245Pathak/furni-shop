import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

function About() {
    return (
        <section>
            <div className='w-full px-16 mt-28'>
                <div className='flex items-center justify-between'>
                    <div className='text-black/70'>
                        <h1 className='text-[40px] font-serif font-semibold'>About Us</h1>
                        <span>At Bensik Consultancy, we take pride in our values <br /> -service, integrity, and excellence.</span>
                    </div>
                    <button className='bg-black/5 p-3 font-medium shadow-2xl'>Learn More</button>
                </div>
                <div className='flex justify-between mt-20 text-black/70'>
                    <div className='flex-1'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[50px] font-bold'>1.</h1>
                                <span className='text-[28px] font-bold capitalize'>Who we are</span>
                                <p>You get a 2-week free trial to kick the <br /> smarty tries. We want you to.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[50px] font-bold'>2.</h1>
                                <span className='text-[28px] font-bold capitalize'>What do we do</span>
                                <p>We give you free course that guides <br /> you through the process.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[50px] font-bold'>3.</h1>
                                <span className='text-[28px] font-bold capitalize'>How do we help</span>
                                <p>Use our multimedia lectures, videos, <br /> and coaching sessions.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[50px] font-bold'>4.</h1>
                                <span className='text-[28px] font-bold capitalize'>Create success story</span>
                                <p>With access to online learning<br /> resources anyone can transform.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 container.xl ml-10'>
                        <div className='flex w-10/12 flex-wrap'>
                            <div className='flex w-1/2 flex-wrap'>
                                <div className='w-full p-9'>
                                    <img src={img1} alt="" />
                                </div>
                                <div className='w-full p-1'>
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                            <div className='flex w-1/2 flex-wrap'>
                                <div className='w-full p-1'>
                                    <img src={img2} alt="" />
                                </div>
                                <div className='w-full p-9'>
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About