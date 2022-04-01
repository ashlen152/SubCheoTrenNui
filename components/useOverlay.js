import React, { useEffect } from 'react'

export const useOverlay = (
  isOpen,
  close,
  ref
) => {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeydown = (ev) => {
      if (ev.key === 'Escape') {
        close()
        return
      }

      if (ev.key === 'Tab') {
        ev.preventDefault()

        if (ref.current === null) return

        const focusables = Array.from(
          ref.current.querySelectorAll(
            // eslint-disable-next-line max-len
            'button, a[href], input:not([type="hidden"]), select, details > summary:first-child, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable]'
          )
        )

        const currentIndex = focusables.findIndex(
          element => element === document.activeElement
        )

        if (currentIndex === -1) {
          focusables[0].focus()
          return
        }

        const nextIndex = currentIndex + (ev.shiftKey ? -1 : 1)

        if (nextIndex === -1) {
          focusables[focusables.length - 1].focus()
          return
        }

        if (nextIndex === focusables.length) {
          focusables[0].focus()
          return
        }

        focusables[nextIndex].focus()
      }
    }

    document.body.addEventListener('keydown', handleKeydown)
    // return () => {
    //   document.body.addEventListener('keydown', handleKeydown)
    // }
  })
}
