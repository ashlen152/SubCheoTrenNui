import React, { useRef, useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import disableScroll from 'disable-scroll'
import { useOverlay } from './useOverlay'

export const useModal = (elementId = 'root', options = {}) => {
  const { preventScroll = false, closeOnOverlayClick = true } = options
  const [isOpen, setOpen] = useState(false)

  const open = useCallback(() => {
    setOpen(true)
    if (preventScroll) {
      disableScroll.on()
    }
  }, [setOpen, preventScroll])

  const close = useCallback(() => {
    setOpen(false)
    if (preventScroll) disableScroll.off()
  }, [setOpen, preventScroll])

  const onOverlayClick = useCallback(
    ev => {
      ev.stopPropagation()
      if (closeOnOverlayClick) close()
    },
    [closeOnOverlayClick, close]
  )

  useEffect(() => {
    return () => {
      if (isOpen) close()
    }
  }, [close, isOpen])

  const ModalWrapper = useCallback(
    ({ children }) => (
      <Modal
        isOpen={isOpen}
        close={close}
        onOverlayClick={onOverlayClick}
        elementId={elementId}
      >
        {children}
      </Modal>
    ),
    [isOpen, close, elementId, onOverlayClick]
  )

  return [ModalWrapper, open, close, isOpen]
}

export const Modal = ({
  children,
  isOpen = false,
  close,
  onOverlayClick,
  elementId = 'root'
}) => {
  const ref = useRef(null)
  useOverlay(isOpen, close, ref)

  if (isOpen === false) return null

  return createPortal(
    <div className='fixed rounded-md top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40' role="dialog" aria-modal>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-50' onClick={onOverlayClick} />
      <div className='relative p-4 z-[60] h-fit w-3/4 sm:w-2/5 lg:w-2/6 rounded overflow-hidden bg-white' ref={ref}>{children}</div>
    </div>,
    document.getElementById(elementId)
  )
}
