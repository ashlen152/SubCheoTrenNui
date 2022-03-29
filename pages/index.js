import React, { useRef, useEffect, useState } from 'react'
import NextImage from 'next/image'
import { H1, H2, Section } from '../components'
import ImageSlider from '../components/ImageSlider'
const videoPoster = 'intro.jpg'

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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = videoPoster
    image.onload = () => {
      setIsLoading(false)
    }

  }, [])

  const images = ['/img_landing_1.jpg', '/img_landing_2.jpg', '/img_hoanhon.jpg']

  return (
    <>
      {
        isLoading ?
          <Loading />
          :
          <div>
            <div className='relative w-screen h-screen' >
              <div className="absolute w-full h-full backdrop-blur-0
               bg-black bg-opacity-10 font-Qwitcher font-bold text-7xl p-2 
               flex justify-center items-center md:text-8xl">
                Chèo Trên Núi
              </div>
              <video preload="none" ref={videoRef} className='object-cover w-full h-screen z-0' poster={videoPoster} autoPlay playsInline muted loop>
                <source src="intro_short.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full flex-row'>
              <Section
                id='whatissup'
                src='/bg_footer.jpg'
                alt='what is sup'
              >
                <H1>
                  SUP Là Gì
                </H1>
                <H2>
                  Chèo Trên Núi
                </H2>
                <p className='pt-4 text-white md:text-black '>
                  Chèo SUP Là Gì? Giải Mã Môn Thể Thao Chill Ơi Là Chill
                  Chèo thuyền trên độ cao 900m trong làn sương mờ ảo của hồ nước ngọt lớn nhất Huyện Lâm Hà.
                </p>
                <p className='pt-4 text-white md:text-black'>
                  SUP – Stand-up Paddleboarding được gọi là môn “chèo ván đứng”, “ván lướt sóng có mái chèo”, hoặc đơn giản là “chèo SUP”. Môn chèo SUP hiện đại bắt nguồn từ Hawaii vào những năm 1900 và được yêu thích trên toàn thế giới bởi sự đơn giản, tiện lợi của nó. Bạn không cần phải biết bơi, mà chỉ cần nắm vững một số kỹ thuật chèo cơ bản là có thể di chuyển ổn định trên mặt nước được rồi.
                  Ngoài việc đứng, ngồi thì bạn có thể quỳ, nằm thư giãn trên ván, kết hợp với yoga hoặc câu cá, miễn là sử dụng mái chèo cho ván chuyển động. Bởi thế, chèo SUP không chỉ là một trò chơi giải trí mà còn là môn thể thao rèn luyện sức khỏe cực kỳ tốt, phù hợp cho mọi lứa tuổi.
                  Bạn có thể chèo SUP trên nhiều loại mặt nước khác nhau như: hồ, sông, vịnh, thác, và cả biển – nơi có nhiều sóng. Ván chèo của bộ môn này cũng được chế tạo từ nhiều chất liệu khác nhau, nhưng phổ biến nhất Việt Nam hiện nay là SUP bơm hơi. Với một chiếc ba lô đầy đủ ván chèo, ống bơm và phụ kiện, bạn có thể tự tin chinh phục mặt nước được rồi.
                  Vì Sao Bạn Nên Đi Chèo SUP Một Lần Trong Đời?
                </p>
              </Section>
              <section className="section-wrapper !mt-0">
                <ImageSlider images={images}></ImageSlider>
              </section>
              <Section
                id='toursandlessions'
                src='/sup01_1080.jpg'
                alt='image landing page 1'
                href='toursandlessions/tour1' >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Săn Sương Caffe Sáng
                </H2>
                <p className='pt-4 text-white md:text-black '>
                  Chèo thuyền trên độ cao 900m trong làn sương mờ ảo của hồ nước ngọt lớn nhất Huyện Lâm Hà.
                </p>
                <p className='pt-4 text-white md:text-black'>
                  Café sáng đón những tia nắng đầu tiên của ngày mới. Tour này thích hợp với những bạn chưa hề biết chèo Sup bởi vì mặt hồ lặng như gương, nhẹ nhàng, quyến rũ.
                </p>
              </Section>
              <Section id='toursandlessions2'
                src='/sup02_1080.jpg'
                alt='image hoan hon'
                href='toursandlessions/tour2'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Đón Hoàn Hôn Trên Hồ
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
              <Section id='toursandlessions3'
                src='/sup03_1080.jpg'
                alt='image co ban'
                href='toursandlessions/tour3'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Chèo SUP Cơ Bản
                </H2>
                <p className='pt-4 text-white md:text-black'>
                  Các bạn sẽ được hướng dẫn cách chơi sup và những kỹ năng an toàn khi chơi bộ môn này,
                </p>
                <p className='pt-4 text-white md:text-black'>
                  Ngoài ra các bạn cũng học được cách ngồi, quỳ và đứng trên sup để có thể có được trải nghiệm thú vị nhất và có những shot hình đẹp nhất.
                </p>
              </Section>
              <Section id='toursandlessions4'
                src='/sup04_1080.jpg'
                alt='image landing page 2'
                href='toursandlessions/tour4'
              >
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Chèo SUP Nâng Cao
                </H2>
                <p className='pt-4 text-white md:text-black'>
                  Các bạn sẽ được tập đứng trên mặt nước không cân bằng, tập các skill bốc đầu sup, nhảy santo, bẻ lái nhanh, đứng dọc sup,….
                </p>
                <p className='pt-4 text-white md:text-black'>
                  Và hấp dẫn nhất là giải đua Sup dưới hoàng hôn hồ Phúc Thọ
                </p>
              </Section>
              <Section id='toursandlessions5'
                src='/sup05_1080.jpg'
                alt='image landing page 2'
                href='toursandlessions/tour5'>
                <H1>
                  Hồ Phú Thọ
                </H1>
                <H2>
                  Khám Phá Hồ Phú Thọ
                </H2>
                <p className='pt-4 text-white md:text-black'>
                  Cùng tham quan vẻ đẹp hung vĩ nhất của hồ nước ngọt lớn nhất Lâm Hà
                </p>
                <p className='pt-4 text-white md:text-black'>
                  Các bạn sẽ được khám phá những góc đẹp nhất của hồ này và nếu may mắn các bạn có thể vào vườn trái cây ven hồ để hái và mua trái cây tại vườn
                </p>
              </Section>
            </div >
          </div >
      }
    </>
  )
}
