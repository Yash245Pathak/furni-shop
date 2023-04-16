import React from 'react'
import imgHero from '../assets/img-hero.png'
import dots from '../assets/DOTS.png'

function Hero() {
    return (
        <section>
            <div className='flex px-28 py-8'>
                <div className='flex-1 flex flex-col gap-2'>
                    <img className='w-[6rem] absolute left-48 top-[14rem] z-[2]' src={dots} alt="" />
                    <div className='flex flex-col items-center justify-center bg-black/10 p-6 backdrop-blur-lg absolute pl-72 top-[18rem] z-[1]'>
                        <h1 className='text-[35px] font-bold text-black/70 leading-tight'>We Help You <br />Make Modern <br /> Interior</h1>
                        <p>We help you to make an elegant <br /> and luxurious interior designed by <br /> profession interior designer.</p>
                    </div>
                </div>
                <div className='z-[0]'>
                    <img className='w-[60rem]' src={imgHero} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero