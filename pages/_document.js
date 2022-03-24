
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="w-screen h-screen">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="logo32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="logo16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body className="w-full h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}