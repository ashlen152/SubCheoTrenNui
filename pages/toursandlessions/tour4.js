import React from 'react'
import Image from 'next/image'
import { H1, H2, Section } from '../../components'

const tour4 = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <Image src="/sup04.jpg"
            alt='landing 2' layout="fill" objectFit='cover'>
          </Image>
        </div>
        <div className="w-full h-2/3
               font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
          Chèo SUP nâng cao
        </div>
        <div className='absolute bottom-0 left-0 w-full flex flex-col'>
          <div className="text-white bg-black bg-opacity-50 w-full h-full
        p-4">
            <p>
              Địa điểm: Hồ Phúc Thọ
            </p>
            <p>
              Thời gian toàn chuyến đi: 3 tiếng
            </p>
            <p>
              Thời gian bắt đầu: 15h chiều
            </p>
            <p>
              Số người tham gia: 1-6 người
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full mt-8 p-2">
        <div className='relative flex flex-row gap-2 text-center'>
          <div className='relative flex-1 flex flex-col p-2'>
            <div className='m-auto h-fix'>
              <Image src="/icon-time.svg"
                alt='time' width='21' height='21'>
              </Image>
            </div>
            <p className='flex-1'>15h chiều - 18h chiều</p>
          </div>
          <div className='relative flex-1 flex flex-col p-2'>
            <div className='m-auto h-fit'>
              <Image src="/icon-calendar.svg"
                alt='calendar' width='21' height='21'>
              </Image>
            </div>
            <span className='flex-1'>
              Tất cả các mùa
            </span>
          </div>
          <div className='relative flex-1 flex flex-col p-2'>
            <div className='m-auto h-fit'>
              <Image src="/icon-difficulty.svg"
                alt='difficulty' width='21' height='21'>
              </Image>
            </div>
            <span className='flex-1'>
              Độ khó: Khó
            </span>
          </div>
        </div>
      </div>
      <div className='w-full text-white sm:text-black'>
        <Section id='mota' alt='mo ta' src='/img_landing_1.jpg'>
          <H1>
            Hành trình mới
          </H1>
          <H2>
            Chill
          </H2>
          <p className='pt-4 text-white sm:text-black'>
            Các bạn sẽ được tập đứng trên mặt nước không cân bằng, tập các skill bốc đầu sup, nhảy santo, bẻ lái nhanh, đứng dọc sup,….
          </p>
          <p className='pt-4 text-white sm:text-black'>
            Và hấp dẫn nhất là giải đua Sup dưới hoàng hôn hồ Phúc Thọ
          </p>
        </Section>
        <Section id='lichtrinh' alt='lich trinh' src='/img_landing_2.jpg'>
          <H1>
            Lịch Trình
          </H1>
          <H2>
            Chuyến hành trình của bạn bắt đầu từ đây
          </H2>
          <p>
            <span className='text-sky-400 font-bold'>- 15h chiều </span>
            Chiều Đến địa điểm tại hồ Phúc Thọ theo tin nhắn của CLB Chèo Trên Núi
            <span className='block pl-4'>
              Làm nóng và hướng dẫn cơ bản cùng CLB Chèo Trên Núi
            </span>
            <span className='block pl-4'>
              Xuống hồ và tập luyện kỹ năng cùng các Huấn Luyện Viên
            </span>
            <span className='block pl-4'>
              Đua sup đứng với phần quà dưới 1 tỉ
            </span>
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 18h </span>
            Chiều buổi huấn luyện kết thúc
          </p>
        </Section>
      </div>
    </div>
  )
}

export default tour4