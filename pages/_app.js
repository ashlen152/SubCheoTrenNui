import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { Footer } from '../components'


function MyApp({ Component, pageProps }) {

  return (<>
    <Head>
      <title>Chèo Trên Núi</title>
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
