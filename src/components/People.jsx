import React from 'react'
import rings from '../assets/ring.png'
import icon from '../assets/icon.png'
import person from '../assets/person.png'

function People() {
    return (
        <section className='mt-56 px-28 text-black/70'>
            <div className='bg-black/10 w-full relative'>
                <img className='absolute' src={rings} alt="" />
                <div className='flex flex-col gap-3 text-center pt-36'>
                    <h1 className='capitalize text-[50px] font-serif font-semibold mx-auto leading-tight'>what our happy <br /> clients say</h1>
                    <p>File storage made easy - including powerful features <br /> you won't find anywhere else. Whether you're.</p>
                </div>
                <img className='absolute top-[13rem] right-32' src={icon} alt="" />
                <div className='flex w-[70%] mx-auto pt-20 pb-28'>
                    <div className='flex-1'>
                        <img src={person} alt="" />
                    </div>
                    <div className='flex-1 flex flex-col gap-y-8 my-auto'>
                        <h1 className='font-bold text-[30px]'>furni.shop</h1>
                        <p className='italic font-medium text-black/50 w-2/3'>File storage made easy - including powerful features you won't find anywhere else. Whether you're.</p>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-black/90 text-[30px]'>Larry Diamond</h1>
                            <span className='text-[15px] italic text-black/50'>Chief Executive Officer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default People