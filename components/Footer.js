import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from './Phone'

export const Footer = () => {
  return (
    <footer id='contact' className='relative flex flex-col py-6 gap-4 items-center 
    justify-between mt-20 bg-sky-900 bg-opacity-60  text-white
    sm:py-0 sm:gap-0text-center'>
      <div className='flex flex-col'>
        <div className='flex flex-col w-full justify-center sm:flex-row sm:py-6'>
          <div className='image-container sm:w-60'>
            <Image src='/banner.png' alt='footer banner' layout='responsive' width='1200' height='400' />
          </div>
        </div>
        <div className='flex flex-col gap-2 text-center mt-4 sm:text-4xl sm:font-light'>
          <span>
            Chèo Trên Núi
          </span>
          <span>
            Tân Hà - Lâm Động
          </span>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex flex-row gap-2 text-xl text-yellow-300 justify-center'>
            <a href='#' className="fa fa-star"></a>
            <a href='#' className="fa fa-star"></a>
            <a href='#' className="fa fa-star"></a>
            <a href='#' className="fa fa-star"></a>
            <a href='#' className="fa fa-star"></a>
          </div>
          <div className='text-center'>162 Reviews</div>
        </div>
      </div>
      <div className='flex flex-col gap-4 sm:py-4 sm:flex-row sm:justify-between sm:w-full sm:px-4'>
        <div className='flex flex-col gap-4 justify-center sm:flex-row'>
          <span className='text-center'>Hotline: </span>
          <div className='flex gap-4'>
            <Phone value="0373750953"></Phone> | <Phone value="0911258379"></Phone> | <Phone value="0704417808"></Phone>
          </div>
        </div>
        <div className='flex gap-4 justify-center text-xl'>
          <span>
            <a href="https://www.facebook.com/Ch%C3%A8o-Tr%C3%AAn-N%C3%BAi-103159982300129" className="fa fa-facebook"> </a>
          </span> |
          <span>
            <a href="#" className="fa fa-youtube"> </a>
          </span> |
          <span>
            <a href="#" className="fa fa-instagram"> </a>
          </span>
        </div>
      </div>
      <div className='flex flex-col w-full items-center gap-4 sm:flex-row sm:justify-between sm:bg-black sm:bg-opacity-40 sm:py-2 sm:px-4'>
        <div className='flex flex-col gap-2 text-sm'>
          <span className='text-center'>
            © Copyright - Chèo Trên Núi
          </span>
          <span className='text-center'>
            Design & Build - Kyou
          </span>
        </div>
        <div className='flex flex-row gap-4 text-xs sm:text-sm'>
          <span>
            <Link href='/#toursandlessions' passHref={true} >
              Tours & Lessons
            </Link>
          </span> |
          <span>
            <Link href='/#whatissup' passHref={true} >
              About us
            </Link>
          </span> |
          <span>
            <Link href='/#' passHref={true} >
              Contact
            </Link>
          </span> |
          <span>
            <Link href='/#' passHref={true} >
              Book now
            </Link>
          </span>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <Image src="/bg_footer.jpg" alt="bg footer" layout='fill' objectFit='cover' />
      </div>
    </footer>
  )
}
