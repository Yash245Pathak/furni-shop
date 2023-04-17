import React from 'react'

function Footer() {
  return (
    <section className='w-full mt-20 bg-black/80 text-white/80'>
      <div className='px-28 py-20'>
        <div className='flex justify-between items-center mb-14'>
          <h1 className='text-[50px] leading-tight'>Start your buisness today for <br /> $0+ state fees.</h1>
          <div className='flex gap-8 mr-16'>
            <button className='bg-white/80 text-black/80 py-3 px-5 rounded-full'>Get Started</button>
            <button className='bg-white/10 text-white/80 py-3 px-5 rounded-full'>Contact Sales</button>
          </div>
        </div>
        <hr />
        <div className='flex mt-14 mx-auto px-12'>
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-[36px] font-serif max-w-max'>furni.shop</h1>
            <p className='w-2/4 max-w-max'>Optix seamlessly connects your members with the community, resources.</p>
            <div className='flex gap-4 text-[25px] cursor-pointer max-w-max'>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-x-16 -ml-16'>
            <div className=' flex flex-col w-full gap-3'>
              <h1 className='text-[25px] font-bold'>Entity types</h1>
              <div className='flex flex-col gap-1 text-white/50'>
                <span>Knowledge base</span>
                <span>Security</span>
                <span>Privacy policy</span>
                <span>Partners</span>
                <span>About Us</span>
                <span>FAQs</span>
              </div>
            </div>
            <div className=' flex flex-col w-full gap-3'>
              <h1 className='text-[25px] font-bold'>Services</h1>
              <div className='flex flex-col gap-1 text-white/50'>
                <span>Contact us</span>
                <span>Press</span>
                <span>Payroll</span>
                <span>Library</span>
                <span>Blog</span>
                <span>Help Center</span>
              </div>
            </div>
            <div className=' flex flex-col w-full gap-3'>
              <h1 className='text-[25px] font-bold'>Resources</h1>
              <div className='flex flex-col gap-1 text-white/50'>
                <span>Pricing</span>
                <span>FAQs</span>
                <span>Contact Support</span>
                <span>Privacy Policy</span>
                <span>Terms</span>
              </div>
            </div>
            <div className=' flex flex-col w-full gap-3'>
              <h1 className='text-[25px] font-bold'>Support</h1>
              <div className='flex flex-col gap-1 text-white/50'>
                <span>Contact</span>
                <span>Affiliates</span>
                <span>Sitemap</span>
                <span>Cancellation Policy</span>
                <span>Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer