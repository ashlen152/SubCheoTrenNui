import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ImageSection = ({ src, alt }) => (
  <div className='w-full h-full absolute top-0 right-0 -z-10
                  transition-all
                  duration-500
                  before:content-[""] before:bg-black before:w-full 
                  before:h-full before:block before:absolute before:t-0 before:l-0
                  before:bg-opacity-30 before:rounded-3xl before:z-10
                  md:before:content-none
                  md:section-content
                  md:hover:scale-105
                  '>
    <Image
      layout="fill"
      objectFit="cover"
      className='rounded-3xl'
      src={src}
      alt={alt}
    />
  </div>
)

export const Section = ({ id, src, alt, children, href }) => (
  <section id={id} className='section-wrapper '>
    <div className='section-content'>
      {children}
      {
        href &&
        <Link href={`/${href}`}>
          <a className='transition-all text-white mt-4 p-4 block bg-red-600 
          cursor-pointer
          hover:bg-red-600 border-red-600 border-2 rounded-full 
          md:hover:border-red-600 md:hover:text-white
          w-fit
          md:bg-transparent md:border-gray-400 md:text-black'>
            Thông tin chi tiết
          </a>
        </Link>
      }
    </div>
    <ImageSection
      className='section-image'
      src={src}
      alt={alt}
    />
  </section>
)