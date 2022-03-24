import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { Footer, Navbar } from '../components'


function MyApp({ Component, pageProps }) {

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
