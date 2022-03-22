import React from 'react'

export const Phone = ({ value }) => {
  return (
    <a className="text-white text-base transition-all  hover:font-bold hover:text-sky-600" href={`tel:${value}`}>{value}</a>
  )
}