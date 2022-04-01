import React, { useState } from 'react'

export const Input = ({ label, errorMessage, className, ...restProps }) => {
  const [focused, setFocused] = useState(false)

  const handleOnBlur = () => {
    setFocused(true)
  }

  return (
    <div className={className}>
      <div className='pb-2'>
        {
          label &&
          <label htmlFor={restProps.name}>
            {label}
          </label>
        }
      </div>
      <div>
        <input
          id={restProps.name}
          onBlur={handleOnBlur}
          focused={focused}
          className={`w-full p-2 border-slate-400 border-2 rounded-md
        peer focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        valid:border-2 valid:border-green-600 
        ${focused && 'invalid:border-2 focus:invalid:outline-none focus:invalid:ring-0 invalid:border-red-400 focus:invalid:border-4 focus:invalid:border-red-600'}`}
          {...restProps} />
        {
          errorMessage && <div className={`text-red-400 hidden ${focused && 'peer-invalid:block peer-focus:text-red-600'}`}>
            {errorMessage}
          </div>
        }
      </div>
    </div>
  )
}
