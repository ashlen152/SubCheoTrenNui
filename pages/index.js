import React, { useRef, useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { H1, H2 } from '../components'
const videoPoster = 'intro.jpg'

const NavItem = props => (
  <li className={`px-2 py-4 hover:bg-black hover:bg-opacity-50 hover:text-white transition-all duration-300 cursor-pointer ${props.className}`}>
    <a href={props.href}>
      {props.text}
    </a>
  </li>
)


const Loading = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <NextImage width='200px' height='69px' src='/banner.png' alt='banner' />
      </div>

    </div>)
}

export default function Home() {
  const videoRef = useRef()
  const lastScrollTop = useRef(0)
  const navRef = useRef()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = videoPoster
    image.onload = () => {
      setIsLoading(false)
    }

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


  return (
    <>
      {
        isLoading ?
          <Loading />
          :
          <div>
            <div className='relative w-screen h-screen' >
              <nav ref={navRef} className='hidden sm:flex backdrop-blur-sm absolute w-full mx-auto px-4  flex-row justify-between items-center z-50 transition-all'>
                <NextLink href='/#' passHref={true} >
                  <div className='relative rounded-full flex flex-center bg-amber-400 bg-opacity-50 cursor-pointer hover:bg-amber-500 hover:scale-125 transition-all'>
                    <NextImage width='100px' height='30px' src='/logo.png' alt='logo' />
                  </div>
                </NextLink>
                <ul className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
                  <NavItem href='#toursandlessions' text="Tours & Lessons"></NavItem>
                  <NavItem href='#whatissup' text="About us"></NavItem>
                  <NavItem href='#Product' text="Contact"></NavItem>
                  <NavItem href='#' className='text-red-400' text="Book now"></NavItem>
                </ul>
              </nav>
              <div className="absolute w-full h-full backdrop-blur-0
               bg-black bg-opacity-10 font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center sm:text-8xl">
                Chèo Trên Núi
              </div>
              <video preload="none" ref={videoRef} className='object-cover w-full h-screen z-0' poster={videoPoster} autoPlay playsInline muted loop>
                <source src="intro_short.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full flex-row'>
              <section id='toursandlessions' className='pt-40  w-11/12 m-auto sm:w-2/3'>
                <div className='flex flex-col relative gap-4 py-10 px-2 
                sm:py-0 sm:px-0 sm:gap-20 sm:flex-row' >
                  <div className='text-right z-10 sm:flex-1'>
                    <H1>
                      PRIVATE MAUI SURF & SUP LESSONS
                    </H1>
                    <H2>
                      Your adventure begins here
                    </H2>
                    <p className='pt-4 text-white sm:text-black'>
                      We are Maui’s premier ocean activity company and take great pride in offering top-rated, private tours and lessons including Outrigger Canoe and Kayak Tours, Whale Watching, Snorkeling with Turtles, Surfing lessons and Stand Up Paddle Boarding Lessons.
                    </p>
                    <p className='pt-4 text-white sm:text-black'>
                      You can escape from the crowds and experience Maui from a local perspective. Most people come to Maui for this very reason—to really get away.
                    </p>
                  </div>
                  <div className='w-full h-full absolute top-0 right-0 -z-10
                                transition-all
                                before:content-[""] before:bg-black before:w-full 
                                before:h-full before:block before:absolute before:t-0 before:l-0
                                before:bg-opacity-30 before:rounded-3xl before:z-10
                                sm:before:content-none
                                sm:section-content'>
                    <NextImage
                      layout="fill"
                      objectFit="cover"
                      className='rounded-3xl'
                      src='/img_landing_1.jpg'
                      alt='image landing page 1'
                    />
                  </div>
                </div>
              </section>
              <section id='whatissup' className='pt-10  w-11/12 m-auto sm:pt-40 sm:w-2/3'>
                <div className='flex flex-col relative gap-4 py-10 px-2 
                sm:py-0 sm:px-0 sm:gap-20 sm:flex-row' >
                  <div className='w-full h-full absolute top-0 right-0 -z-10
                                transition-all
                                before:content-[""] before:bg-black before:w-full 
                                before:h-full before:block before:absolute before:t-0 before:l-0
                                before:bg-opacity-30 before:rounded-3xl before:z-10
                                sm:before:content-none
                                sm:section-content'>
                    <NextImage
                      layout="fill"
                      objectFit="cover"
                      className='rounded-3xl'
                      src='/img_landing_2.jpg'
                      alt='image landing page 2'
                    />
                  </div>
                  <div className='flex-1 text-left'>
                    <H2>
                      Stand Up Paddle Boarding
                    </H2>
                    <p className='pt-4 text-white sm:text-black'>
                      Stand up paddle boarding on Maui is a great way to explore Maui’s scenic coasts and bays. Choose from one of two amazing locations—Olowalu or Makena—each offering a unique experience and view of Maui. We realize that everyone comes from different backgrounds, with different fitness and comfort levels in the ocean, which is why we offer exclusive and PRIVATE Stand Up Paddle Board (SUP) Tours.
                    </p>
                    <p className='pt-4 text-white sm:text-black'>
                      With our private tours, you will be able to stand up paddle as far and as fast as your ability allows, without feeling like you’re being held back or holding others back. Or, if you choose, just leisurely cruise around and check out numerous Hawaiian green sea turtles that swim by.
                    </p>
                    <p className='pt-4 text-white sm:text-black'>
                      FREE digital photography included
                    </p>
                    <p className='pt-4 text-white sm:text-black'>
                      Our stand up paddle instructors will take photos, so you can relax and enjoy your morning on the water.
                    </p>
                  </div>

                </div>
              </section>
            </div >
          </div >
      }
    </>
  )
}
