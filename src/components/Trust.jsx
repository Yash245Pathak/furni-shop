import React from 'react'
import hot from "../assets/hot.png"

function Trust() {
  return (
    <section>
        <div className='w-full bg-black/10 my-10 h-auto'>
            <div className='px-16 py-10'>
                <h1 className='capitalize text-center text-[20px] mb-8'>trusted By over 1k+ companies</h1>
                <div className='flex gap-x-28 max-w-max mx-auto text-black/50 font-semibold text-[18px]'>
                    <span>Microsoft</span>
                    <span>Entrepreneur</span>
                    <span>FORTUNE</span>
                    <span>business Web</span>
                    <span>Mashable</span>
                </div>
            </div>
        </div>
        <div className='text-black/70'>
            <div className='flex px-16 py-10 items-center'>
                <div className='flex-1 max-w-max mr-40 p-10'>
                    <h1 className='text-[50px] leading-tight font-serif'>Hot <br /> deals for you</h1>
                    <p className='mt-2'>Online shopping for retail sales <br />direct to consumers.</p>
                </div>
                <div className='grid grid-cols-3 gap-36'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-6' src={hot} alt="" />
                        <h1 className='font-bold'>1.5% cashback</h1>
                        <p className='text-[12px]'>Online shopping for retail <br />sales direct to <br /> consumers.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img className='w-6' src={hot} alt="" />
                        <h1 className='font-bold'>30-day terms</h1>
                        <p className='text-[12px]'>Online shopping for retail <br />sales direct to <br /> consumers.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img className='w-6' src={hot} alt="" />
                        <h1 className='font-bold'>Save Money</h1>
                        <p className='text-[12px]'>Online shopping for retail <br />sales direct to <br /> consumers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust