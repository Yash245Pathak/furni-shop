import React from 'react'
import proImg1 from "../assets/pro-img1.png"
import proImg2 from "../assets/pro-img2.png"
import proImg3 from "../assets/pro-img3.png"
import proImg4 from "../assets/pro-img4.png"
import proImg5 from "../assets/pro-img5.png"
import proImg6 from "../assets/pro-img6.png"

function Product() {
  return (
    <section className='text-black/70 mt-16 px-16'>
      <div className='text-center flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1 className='font-serif text-[40px] font-semibold'>Products</h1>
          <span className='text-[18px] font-medium cursor-pointer'>See All</span>
        </div>
        <div className='flex gap-x-16 max-w-max mx-auto text-[20px] font-medium'>
          <span className='opacity-100 cursor-pointer '>All</span>
          <span className='opacity-50 cursor-pointer '>Bed</span>
          <span className='opacity-50 cursor-pointer '>Sofa</span>
          <span className='opacity-50 cursor-pointer '>Chair</span>
          <span className='opacity-50 cursor-pointer '>Light</span>
        </div>
      </div>
      <div className='mt-16 p-8'>
        <div className='grid grid-cols-3 gap-y-[8rem] max-w-max gap-x-[8rem] mx-auto'>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>Hand base lamp</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[7rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg1} alt="" />
          </div>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>vinatage chair</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[10rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg2} alt="" />
          </div>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>lamp tool</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[8rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg3} alt="" />
          </div>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>stylish chair</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[10rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg4} alt="" />
          </div>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>vintage chair</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[8rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg5} alt="" />
          </div>
          <div className='bg-black/10 w-[20rem] h-[20rem] relative p-10 flex flex-col gap-6'>
            <div className='text-[30px] absolute left-[16rem] top-[-25px] p-2'>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <h1 className='capitalize text-[30px]'>stackable chair</h1>
            <div className='flex gap-4'>
              <span className='text-[18px]'>$35.00</span>
              <span className='text-[18px] text-black/40'><s>$55.00</s></span>
            </div>
            <img className='w-[10rem] absolute bottom-[-6rem] left-[5.5rem]' src={proImg6} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product