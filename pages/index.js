import React, { useRef, useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { H1, H2 } from '../components'
const videoPoster = 'intro.jpg'

const NavItem = props => (
  <li className="px-2 py-4 hover:bg-black hover:bg-opacity-50 hover:text-white transition-all duration-300 cursor-pointer">
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
              <nav ref={navRef} className='backdrop-blur-sm absolute w-full mx-auto px-4 flex flex-row justify-between items-center z-50 transition-all'>
                <NextLink href='/#' passHref={true} >
                  <div className='relative rounded-full flex flex-center bg-amber-400 bg-opacity-50 cursor-pointer hover:bg-amber-500 hover:scale-125 transition-all'>
                    <NextImage width='100px' height='30px' src='/logo.png' alt='logo' />
                  </div>
                </NextLink>
                <ul className='flex flex-row items-center justify-center gap-2'>
                  <NavItem href='#toursandlessions' text="Tours & Lessons"></NavItem>
                  <NavItem href='#whatissup' text="About us"></NavItem>
                  <NavItem href='#Product' text="Contact"></NavItem>
                  <NavItem href='#Product' text="Book now"></NavItem>
                </ul>
              </nav>
              <div className="absolute w-full h-full backdrop-blur-sm
               bg-black bg-opacity-10 font-Qwitcher font-bold text-8xl p-2 
               flex justify-center items-center">
                Chèo Trên Núi
              </div>
              <video preload="none" ref={videoRef} className='object-cover w-full h-screen z-0' poster={videoPoster} autoPlay playsInline muted loop>
                <source src="intro_short.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full flex-row'>
              <section id='toursandlessions' className='pt-40 min-h-screen w-2/3 m-auto'>
                <div className='flex gap-20'>
                  <div className='flex-1 text-right'>
                    <H1>
                      PRIVATE MAUI SURF & SUP LESSONS
                    </H1>
                    <H2 className='pt-4'>
                      Your adventure begins here
                    </H2>
                    <p className='pt-4'>
                      We are Maui’s premier ocean activity company and take great pride in offering top-rated, private tours and lessons including Outrigger Canoe and Kayak Tours, Whale Watching, Snorkeling with Turtles, Surfing lessons and Stand Up Paddle Boarding Lessons.
                    </p>
                    <p className='pt-4'>
                      You can escape from the crowds and experience Maui from a local perspective. Most people come to Maui for this very reason—to really get away.
                    </p>
                  </div>
                  <div className='w-full flex-1 relative'>
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
              <section id='whatissup' className='pt-20 min-h-screen w-2/3 m-auto'>
                <div className='flex gap-20'>
                  <div className='w-full flex-1 relative'>
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
                    <p className='pt-4'>
                      Stand up paddle boarding on Maui is a great way to explore Maui’s scenic coasts and bays. Choose from one of two amazing locations—Olowalu or Makena—each offering a unique experience and view of Maui. We realize that everyone comes from different backgrounds, with different fitness and comfort levels in the ocean, which is why we offer exclusive and PRIVATE Stand Up Paddle Board (SUP) Tours.
                    </p>
                    <p className='pt-4'>
                      With our private tours, you will be able to stand up paddle as far and as fast as your ability allows, without feeling like you’re being held back or holding others back. Or, if you choose, just leisurely cruise around and check out numerous Hawaiian green sea turtles that swim by.
                    </p>
                    <p className='pt-4'>
                      FREE digital photography included
                    </p>
                    <p className='pt-4'>
                      Our stand up paddle instructors will take photos, so you can relax and enjoy your morning on the water.
                    </p>
                  </div>

                </div>
              </section>
            </div>
          </div>
      }
    </>
  )
}
