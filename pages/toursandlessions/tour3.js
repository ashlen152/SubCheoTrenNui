import React from 'react'
import Image from 'next/image'
import { H1, H2, Section } from '../../components'

const tour3 = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <Image src="/sup03.jpg"
            alt='landing 2' layout="fill" objectFit='cover'>
          </Image>
        </div>
        <div className="w-full h-2/3
               font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
          Chèo SUP Cơ Bản
        </div>
        <div className='absolute bottom-0 left-0 w-full flex flex-col'>
          <div className="text-white bg-black bg-opacity-50 w-full h-full
        p-4">
            <p>
              Địa điểm: Hồ Phúc Thọ
            </p>
            <p>
              Thời gian toàn chuyến đi: 2 tiếng
            </p>
            <p>
              Thời gian bắt đầu: 5h45 sáng hoặc 16h chiều
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
            <p className='flex-1'>5h45 sáng - 8h sáng</p>
            <p className='flex-1'>16h chiều - 18h chiều</p>
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
              Độ khó: Trung bình
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
            Các bạn sẽ được hướng dẫn cách chơi sup và những kỹ năng an toàn khi chơi bộ môn này,
          </p>
          <p className='pt-4 text-white sm:text-black'>
            Ngoài ra các bạn cũng học được cách ngồi, quỳ và đứng trên sup để có thể có được trải nghiệm thú vị nhất và có những shot hình đẹp nhất.
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
            <span className='text-sky-400 font-bold'>- 5h45 sáng hoặc 16h chiều </span>
            Đến địa điểm tại hồ Phúc Thọ theo tin nhắn của CLB Chèo Trên Núi
            <span className='block pl-4'>
              Sau đó thành viên Chèo Trên Núi sẽ hướng dẫn những kỹ năng và cách an toàn khi chơi sup
            </span>
            <span className='block pl-4'>
              Khởi động và xuống hồ quẩy thôi
            </span>
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 8h sáng hoặc 18h </span>
            Chiều buổi huấn luyện kết thúc
          </p>
        </Section>
      </div>
    </div>
  )
}

export default tour3