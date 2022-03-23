import React, { useRef, useEffect, useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { H1, H2 } from '../components'
const videoPoster = 'intro.jpg'

const NavItem = props => (
  <a href={props.href}>
    <li className={`px-2 py-4 hover:bg-black hover:bg-opacity-50 hover:text-white transition-all duration-300 cursor-pointer ${props.className}`}>
      {props.text}
    </li>
  </a>
)

const ImageSection = ({ src, alt }) => (
  <div className='w-full h-full absolute top-0 right-0 -z-10
                  transition-all
                  duration-500
                  before:content-[""] before:bg-black before:w-full 
                  before:h-full before:block before:absolute before:t-0 before:l-0
                  before:bg-opacity-30 before:rounded-3xl before:z-10
                  sm:before:content-none
                  sm:section-content
                  sm:hover:scale-105
                  '>
    <NextImage
      layout="fill"
      objectFit="cover"
      className='rounded-3xl'
      src={src}
      alt={alt}
    />
  </div>
)

const Section = ({ id, src, alt, children }) => (
  <section id={id} className='section-wrapper '>
    <div className='section-content'>
      {children}
    </div>
    <ImageSection
      className='section-image'
      src={src}
      alt={alt}
    />
  </section>
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
  const breadRef = useRef()
  const listMenuRef = useRef()

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

  const handleClickBread = () => {
    if (!breadRef.current) return
    breadRef.current.classList.toggle('breadActive')
    listMenuRef.current.classList.toggle('navMenuActive')
  }


  return (
    <>
      {
        isLoading ?
          <Loading />
          :
          <div>
            <div className='relative w-screen h-screen' >
              <nav ref={navRef} className='flex backdrop-blur-sm absolute w-full mx-auto 
              py-4 sm:py-0 flex-row justify-between items-center z-50 transition-all'>
                <NextLink href='/#' passHref={true} >
                  <div className='relative ml-4 rounded-full flex flex-center 
                  bg-amber-400 bg-opacity-50 cursor-pointer 
                  hover:bg-amber-500 hover:scale-125 transition-all'>
                    <NextImage width='100px' height='30px' src='/logo.png' alt='logo' />
                  </div>
                </NextLink>
                <button className='mr-4 sm:hidden relative w-[25px] h-[25px] z-50' onClick={handleClickBread}>
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
                sm:mr-4 sm:translate-y-0 sm:relative sm:w-auto sm:flex 
                flex-col items-center justify-center gap-2 sm:flex-row
                '>
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
              <Section
                id='toursandlessions'
                src='/img_landing_1.jpg'
                alt='image landing page 1' >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Săn sương caffe sáng
                </H2>
                <p className='pt-4 text-white sm:text-black '>
                  Chèo thuyền trên độ cao 900m trong làn sương mờ ảo của hồ nước ngọt lớn nhất Huyện Lâm Hà.
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Café sáng đón những tia nắng đầu tiên của ngày mới. Tour này thích hợp với những bạn chưa hề biết chèo Sup bởi vì mặt hồ lặng như gương, nhẹ nhàng, quyến rũ.
                </p>
              </Section>
              <Section id='toursandlessions2'
                src='/img_hoanhon.jpg'
                alt='image hoan hon'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Đón hoàn hôn trên hồ
                </H2>
                <p className='pt-4 text-white sm:text-black'>
                  Tham quan cung hoa Mua Tím lung linh của khu du lịch Long Đỉnh, những đồ chè sát hồ đẹp nhất huyện Lâm Hà, những vườn café hoa trắng xóa và cuối cùng là màn trình diễn ánh sáng HOÀNG HÔN hoành tráng nhất trên mặt hồ nước ngọt lớn nhất huyện Lâm Hà.
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Bạn sẽ có những phút giây vui vẻ nhất và những shots hình ảo ma Lazada nhất mạng xã hội.
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Tour này phù hợp cho các bạn mới tập chơi sup và nhóm bạn trẻ.
                </p>
              </Section>
              <Section id='toursandlessions3'
                src='/img_sup_coban.jpg'
                alt='image co ban'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Chèo SUP cơ bản
                </H2>
                <p className='pt-4 text-white sm:text-black'>
                  Các bạn sẽ được hướng dẫn cách chơi sup và những kỹ năng an toàn khi chơi bộ môn này,
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Ngoài ra các bạn cũng học được cách ngồi, quỳ và đứng trên sup để có thể có được trải nghiệm thú vị nhất và có những shot hình đẹp nhất.
                </p>
              </Section>
              <Section id='toursandlessions4'
                src='/img_sup_nangcao.jpg'
                alt='image landing page 2'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Chèo SUP nâng cao
                </H2>
                <p className='pt-4 text-white sm:text-black'>
                  Các bạn sẽ được tập đứng trên mặt nước không cân bằng, tập các skill bốc đầu sup, nhảy santo, bẻ lái nhanh, đứng dọc sup,….
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Và hấp dẫn nhất là giải đua Sup dưới hoàng hôn hồ Phúc Thọ
                </p>
              </Section>
              <Section id='toursandlessions5'
                src='/img_landing_2.jpg'
                alt='image landing page 2'>
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Khám phá hồ phú thọ
                </H2>
                <p className='pt-4 text-white sm:text-black'>
                  Cùng tham quan vẻ đẹp hung vĩ nhất của hồ nước ngọt lớn nhất Lâm Hà
                </p>
                <p className='pt-4 text-white sm:text-black'>
                  Các bạn sẽ được khám phá những góc đẹp nhất của hồ này và nếu may mắn các bạn có thể vào vườn trái cây ven hồ để hái và mua trái cây tại vườn
                </p>
              </Section>
            </div >
          </div >
      }
    </>
  )
}
