import React from 'react';

export const H1 = ({ children }) => (
  <div className="font-medium leading-tight mt-0 mb-2 sm:text-xl text-zinc-200 sm:text-slate-600">
    {children}
  </div>
)

export const H2 = ({ children }) => (
  <div className="font-medium leading-tight text-4xl sm:text-5xl sm:mb-10 sm:pt-4 mt-0 mb-2 text-sky-200 sm:text-sky-400">
    {children}
  </div>
)