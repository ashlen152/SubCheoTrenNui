import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return (<>
    <Head>
      <title>Chèo Trên Núi</title>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
