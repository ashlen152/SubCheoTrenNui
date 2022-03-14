import React, { useRef, useEffect, useState } from 'react'
import NextImage from 'next/image'
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
        <NextImage  width='200px' height='69px' src='/banner.png' alt='banner' />
      </div>

    </div>)
}

export default function Home() {
  const videoRef = useRef()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = videoPoster
    image.onload = () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      {
        isLoading ?
          <Loading />
          :
          <div>
            <nav className='fixed w-full top-4 mx-auto flex flex-col text-center z-50'>
              <div className="backdrop-blur-sm bg-black bg-opacity-20 font-Qwitcher text-8xl p-2 ">
                Chèo Trên Núi
              </div>
              <ul className='backdrop-blur-sm bg-black bg-opacity-20 mt-2 flex flex-row items-center justify-center gap-2'>
                <NavItem href='#Product' text="Giới Thiệu"></NavItem>
                <NavItem href='#Product' text="Hình Ảnh"></NavItem>
                <NavItem href='#Product' text="Liên Lạc"></NavItem>
              </ul>
            </nav>
            <video preload="none" ref={videoRef} className='object-cover w-full h-screen z-0' poster={videoPoster} autoPlay playsInline muted loop>
              <source src="intro_short.mp4" type="video/mp4" />
            </video>
          </div>
      }
    </>
  )
}
