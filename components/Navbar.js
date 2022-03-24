import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './NavItem'

export const Navbar = () => {
  const navRef = useRef()
  const breadRef = useRef()
  const listMenuRef = useRef()
  const lastScrollTop = useRef(0)

  useEffect(() => {
    window.onscroll = () => {
      const navElement = navRef.current
      if (!navElement) {
        navRef.current = document.getElementById('topnav')
        return
      }
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop.current) {
        // downscroll code
        navElement.classList.remove('top-nav-fixed')
        navElement.classList.add('hidden!')
      } else {
        // upscroll code
        if (st > 20) {
          navElement.classList.add('top-nav-fixed')
          navElement.classList.remove('hidden!')
        } else {
          navElement.classList.remove('top-nav-fixed')
          navElement.classList.remove('hidden!')
        }
      }
      lastScrollTop.current = st <= 0 ? 0 : st // for mobile scroll
    }
  }, [])

  const handleClickBread = () => {
    if (!breadRef.current) return
    breadRef.current.classList.toggle('breadActive')
    listMenuRef.current.classList.toggle('navMenuActive')
  }


  return (
    <nav ref={navRef} className='flex backdrop-blur-md absolute w-full mx-auto 
    py-4 md:py-0 flex-row justify-between items-center z-50 transition-all'>
      <Link href='/#' passHref={true} >
        <div className='relative ml-4 rounded-full flex flex-center 
        bg-amber-400 bg-opacity-50 cursor-pointer 
        hover:bg-amber-500 hover:scale-125 transition-all'>
          <Image width='100px' height='30px' src='/logo.png' alt='logo' />
        </div>
      </Link>
      <button className='mr-4 md:hidden relative w-[25px] h-[25px] z-50' onClick={handleClickBread}>
        <span ref={breadRef} className='w-full h-[2px] bg-black block transition-all duration-400
        before:content-[""] before:w-[125%] before:h-[2px]
        before:bg-black before:absolute before:top-0 before:right-0
        before:transition-all before:duration-400
        after:content-[""] after:w-[75%] after:h-[2px] after:bg-black 
        after:absolute after:bottom-0 after:right-0
        after:transition-all after:duration-400'
        ></span>
      </button>
      <ul ref={listMenuRef} className='absolute top-0 w-full 
      flex transition-all -translate-y-full duration-400 
      md:mr-4 md:translate-y-0 md:relative md:w-auto md:flex 
      flex-col items-center justify-center gap-2 md:flex-row
      '>
        <NavItem href='../#toursandlessions' text="Tours & Lessons"></NavItem>
        <NavItem href='../#whatissup' text="About us"></NavItem>
        <NavItem href='../#Product' text="Contact"></NavItem>
        <NavItem href='../#' className='text-red-400' text="Book now"></NavItem>
      </ul>
    </nav>
  )
}