import React from 'react'

export const NavItem = (props) => {
  return (
    <a href={props.href}>
      <li className={`px-2 py-4 hover:bg-black hover:bg-opacity-50 
    hover:text-white transition-all duration-300 cursor-pointer ${props.className}`}>
        {props.text}
      </li>
    </a>
  )
}