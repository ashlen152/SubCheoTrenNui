import React, { useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { Footer, Navbar } from '../components'
import smoothscroll from 'smoothscroll-polyfill'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, [])
  return (<>
    <Head>
      <title>Chèo Trên Núi</title>
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
