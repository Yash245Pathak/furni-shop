import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='md:flex md:justify-between md:items-center px-16 py-5 text-black/70 w-full shadow-md cursor-pointer'>
        <h1 className='text-[25px] md:text-[40px] font-bold'>furni.shop</h1>
        <div className={`md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-16 transition-all duration-100 ease-in md:gap-x-8 md:mx-auto text-xl flex flex-col ${open ? 'top-20':'top-[-490px]'}`}>
          <span>Home</span>
          <span>About</span>
          <span>Features</span>
          <span>Contact</span>
        </div>
        <div className='absolute top-6 md:top-9 right-8 text-[30px] flex gap-x-6 items-center'>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon onClick={()=>setOpen(!open)} name="menu-outline"></ion-icon>
        </div>
      </header>
    </>
  )
}

export default Header