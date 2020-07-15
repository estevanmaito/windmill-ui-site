import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import '../css/tailwind.css'

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)
