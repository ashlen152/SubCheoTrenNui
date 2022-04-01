import React, { useState } from 'react'
import { Input } from './Input'
import { NavItem } from './NavItem'
import { Modal, useModal } from './useModal'
import emailjs from '@emailjs/browser'

const SuccessMessage = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center text-sky-400 gap-2">
      <div className='rounded-full flex justify-center items-center w-6 h-6 p-4 bg-green-400 text-white animate-pulse'>&#10003;</div>
      <p>
        Cảm ơn bạn đã gửi thông tin cho Chèo Trên Núi
      </p>
      <p>
        Chèo trên núi sẽ liên lạc với bạn sớm nhất có thể
      </p>
      <p>
        Chúc bạn một ngày vui vẻ
      </p>
    </div>
  )
}

const LoadingMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-400"></div>
      <p>
        Đang gửi vui lòng chờ trong giây lát..
      </p>
    </div>
  )
}

export const Links = () => {
  const [sending, setSending] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(<LoadingMessage />)
  const [dataSubmit, setDataSumit] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const [Modal, open, close] = useModal('__next', {
    preventScroll: true,
    closeOnOverlayClick: true
  })

  const handleInputOnChange = (e) => {
    setDataSumit({
      ...dataSubmit,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs.sendForm('service_xg9hddr', 'template_e62fsqr', e.target, 'GFq5LPHCxaOSktns8').then(() => {
      setDataSumit({
        name: '',
        phone: '',
        email: ''
      })
      setSendingMessage(<SuccessMessage />)
    }).finally(() => {
      setTimeout(() => {
        setSending(false)
        setSendingMessage(<LoadingMessage />)
        close()
      }, 3000)
    })
  }
  return (
    <>
      <NavItem href='/#whatissup' text="SUP là gì"></NavItem>
      <NavItem href='/#toursandlessions' text="Tours & Khoá học"></NavItem>
      <NavItem href='#contact' text="Liên lạc"></NavItem>
      <NavItem onClick={() => open()} className='text-red-400' text="Đặt Ngay"></NavItem>
      <Modal>
        {
          sending ? sendingMessage :

            <form onSubmit={handleOnSubmit}>
              <div className='text-center w-full text-lg sm:text-sm md:text-lg text-sky-400 p-4 mb-4'>
                Chèo Trên Núi sẽ liên lạc với bạn trong thời gian ngắn nhất
              </div>
              <div>
                <Input
                  label='Tên'
                  errorMessage='Xin vui lòng nhập tên của bạn từ 4-100 ký tự!'
                  minLength="4"
                  maxLength="100"
                  required name='name' type='text'
                  value={dataSubmit.name}
                  onChange={handleInputOnChange}
                  className='flex flex-col '
                />
              </div>
              <div className='mt-4'>
                <Input
                  label='Số điện thoại:'
                  errorMessage='Số điện thoại không đúng!'
                  required name='phone' type='text'
                  minLength='10'
                  maxLength='12'
                  pattern='^[0-9]+$'
                  value={dataSubmit.phone}
                  onChange={handleInputOnChange}
                  className='flex flex-col '
                />
              </div>
              <div className='mt-4'>
                <Input
                  label='Email:'
                  errorMessage='Email không đúng !'
                  required name='email' type='email'
                  value={dataSubmit.email} onChange={handleInputOnChange}
                />
              </div>
              <div className='mt-4 flex justify-end'>
                <button className='px-4 py-2 mr-4 border-2 border-slate-400 bg-transparent rounded-md' type='button' onClick={() => close()}>Đóng</button>
                <button className='px-4 py-2 hover:bg-sky-500 hover:border-sky-500  bg-sky-400 border-2 border-sky-400 text-white rounded-md' type='submit'>Gửi</button>
              </div>
            </form>
        }
      </Modal>
    </>
  )
}
