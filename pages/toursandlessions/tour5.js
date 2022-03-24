import React from 'react'
import Image from 'next/image'
import { H1, H2, Section } from '../../components'

const tour5 = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <Image src="/sup05.jpg"
            alt='landing 2' layout="fill" objectFit='cover'>
          </Image>
        </div>
        <div className="w-full h-2/3
               font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
          Khám phá hồ phú thọ
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
            Cùng tham quan vẻ đẹp hung vĩ nhất của hồ nước ngọt lớn nhất Lâm Hà
          </p>
          <p className='pt-4 text-white sm:text-black'>
            Các bạn sẽ được khám phá những góc đẹp nhất của hồ này và nếu may mắn các bạn có thể vào vườn trái cây ven hồ để hái và mua trái cây tại vườn
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
              Sau đó thành viên Chèo Trên Núi sẽ hướng dẫn những kỹ năng và cách an toàn khi chơi sup
            </span>
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 15h15  </span>
            Xuống nước và bắt đầu Thám hiểm hồ Phúc Thọ.
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 17h40 </span>
            Ngắm hoàng hôn ở Ngã 3 rộng nhất hồ Phúc Thọ
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 18h chiều </span>
            Tour kết thúc
          </p>
        </Section>
      </div>
    </div>
  )
}

export default tour5