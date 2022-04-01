import React from 'react'
import Link from 'next/link'

export const NavItem = (props) => {
  return (
    <>
      {
        props.onClick ?
          <button type='button' onClick={props.onClick} className={`px-2 py-4 hover:bg-black hover:bg-opacity-50 
    hover:text-white transition-all duration-300 cursor-pointer ${props.className}`} >{props.text}</button>
          :
          <Link passHref={true} onClick={() => props.onClick && props.onClick()} href={props.href}>
            <li
              className={`px-2 py-4 hover:bg-black hover:bg-opacity-50 
      hover:text-white transition-all duration-300 cursor-pointer ${props.className}`}>
              {props.text}
            </li>
          </Link>
      }
    </>
  )
}