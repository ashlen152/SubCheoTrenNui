import React from 'react'
import Image from 'next/image'
import { H1, H2, Section } from '../../components'

const tour1 = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <Image src="/sup01.jpg"
            alt='landing 1' layout="fill" objectFit='cover'>
          </Image>
        </div>
        <div className="w-full h-2/3
               font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
          Săn Sương Caffe Sáng
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
              Thời gian bắt đầu: 5h45 sáng
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
              Độ khó: Dễ
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
          <p>
            Chèo thuyền trên độ cao 900m trong làn sương mờ ảo của hồ nước ngọt lớn nhất Huyện Lâm Hà.
          </p>
          <p>
            Café sáng đón những tia nắng đầu tiên của ngày mới.
          </p>
          <p>
            Tour này thích hợp với những bạn chưa hề biết chèo Sup bởi vì mặt hồ lặng như gương, nhẹ nhàng, quyến rũ.
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
            <span className='text-sky-400 font-bold'>- 5h45</span> Đến địa điểm tại hồ Phúc Thọ theo tin nhắn của CLB Chèo Trên Núi
            <span className='block pl-4'>
              Khởi động và bắt đầu xuống hồ lúc 6h
            </span>
            <span className='block pl-4'>
              Săn sương và tận hưởng sự thức dậy của thiên nhiên hồ PHÚC THỌ
            </span>
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 7h</span> tận hưởng những ly café/ cacao nóng ngay trên mặt hồ mênh mông (CHÈO TRÊN NÚI MỜI BẠN NHÉ)
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 8h</span> kết thúc chuyến đi, Hẹn gặp lại các bạn đồng chèo nhé.
          </p>
        </Section>
      </div>
    </div>
  )
}

export default tour1