import React from 'react'
import Image from 'next/image'
import { H1, H2, Section } from '../../components'

const tour2 = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <Image src="/sup02.jpg"
            alt='landing 2' layout="fill" objectFit='cover'>
          </Image>
        </div>
        <div className="w-full h-2/3
               font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
          Đón hoàn hôn trên hồ
        </div>
        <div className='absolute bottom-0 left-0 w-full flex flex-col'>
          <div className="text-white bg-black bg-opacity-50 w-full h-full
        p-4">
            <p>
              Địa điểm: Hồ Phúc Thọ
            </p>
            <p>
              Thời gian toàn chuyến đi: 2,5 tiếng
            </p>
            <p>
              Thời gian bắt đầu: 15h30 chiều
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
            <p className='flex-1'>15h30 chiều - 18h chiều</p>
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
          <p className='pt-4 text-white md:text-black'>
            Tham quan cung hoa Mua Tím lung linh của khu du lịch Long Đỉnh, những đồ chè sát hồ đẹp nhất huyện Lâm Hà, những vườn café hoa trắng xóa và cuối cùng là màn trình diễn ánh sáng HOÀNG HÔN hoành tráng nhất trên mặt hồ nước ngọt lớn nhất huyện Lâm Hà.
          </p>
          <p className='pt-4 text-white md:text-black'>
            Bạn sẽ có những phút giây vui vẻ nhất và những shots hình ảo ma Lazada nhất mạng xã hội.
          </p>
          <p className='pt-4 text-white md:text-black'>
            Tour này phù hợp cho các bạn mới tập chơi sup và nhóm bạn trẻ.
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
            <span className='text-sky-400 font-bold'>- 15h30 </span>
            Đến địa điểm tại hồ Phúc Thọ theo tin nhắn của CLB Chèo Trên Núi
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 15h45 </span>
            Khởi động và bắt đầu xuống hồ
            <span className='block pl-4'>
              Theo sự chỉ dẫn của các thành viên Chèo Trên Núi các bạn sẽ tới được những cung đẹp nhất của Hồ Phúc Thọ gồm, đồi chè Long Đỉnh, Cung hoa Mua tím, đồi café,…
            </span>
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 17h40 </span>
            đón hoàng hôn cực lãng mạn và có những shots hình ảo ma nhất
          </p>
          <p className='pl-0'>
            <span className='text-sky-400 font-bold'>- 18h </span> kết thúc chuyến đi, Hẹn gặp lại các bạn đồng chèo nhé.
          </p>
        </Section>
      </div>
    </div>
  )
}

export default tour2