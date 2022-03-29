import React, { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'


const ImageSlider = ({images}) => {
  const [indexActiveImage, setIndexActiveImage] = useState(0)

  useEffect(() => {
    console.log('test')
    const timeout = setInterval(() => {
      handleOnClickNextImage('next', indexActiveImage)
    }, 5000)

    return () => clearInterval(timeout)
  }, [handleOnClickNextImage, indexActiveImage])

  const handleOnClickNextImage = useCallback((type, index) => {
    console.log(type,index)
    const nextIndex = index + (type === 'next' ? 1 : -1)
    if (nextIndex >= images.length)
      nextIndex = 0
    else if (nextIndex < 0)
      nextIndex = images.length - 1
    setIndexActiveImage(nextIndex)
    console.log(nextIndex)
  }, [images.length])


  return (
    <div className="block relative w-full h-[500px] text-white">
      <div className='relative w-full h-full' >
        {images.map((imgUrl, index) => {
          return (<div key={index} className={`absolute top-0 right-0 transition-all duration-500 w-full h-full 
          ${index === indexActiveImage ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              height='500px'
              layout='fill'
              objectFit='cover'
              className='rounded '
              src={imgUrl} alt='logo' />
          </div>)
        })}
      </div>
      <button type='button' onClick={() => handleOnClickNextImage('next', indexActiveImage)} className='
          transition-all hover:bg-opacity-80 active:bg-opacity-80
          absolute top-1/2 -translate-y-1/2 right-4 p-4 
          rounded w-[50px] h-[50px] bg-black bg-opacity-30
          my-auto flex items-center justify-center'>
        &rarr;
      </button>
      <button type='button' onClick={() => handleOnClickNextImage('pre', indexActiveImage)} className='
          transition-all hover:bg-opacity-80 active:bg-opacity-80
          absolute top-1/2 -translate-y-1/2 left-4 p-4 
          rounded w-[50px] h-[50px] bg-black bg-opacity-30  
          flex items-center justify-center'>
        &larr;
      </button>
    </div >
  )
}

export default ImageSlider